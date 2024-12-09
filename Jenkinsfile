pipeline {
    agent any
    tools {
        maven 'Maven 3.9.9' // Your configured Maven tool
        nodejs 'NodeJS16'  // Use the configured NodeJS tool in Jenkins
    }
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-pass') // Docker credentials
        GITHUB_CREDENTIALS = credentials('mygithubcred')   // GitHub credentials
    }
    stages {


        stage('Initialize') {
                    steps {
                        script {
                            // Define a build timestamp (valid for Docker tags)
                            env.BUILD_TIMESTAMP = new Date().format("yyyyMMddHHmmss", TimeZone.getTimeZone('UTC'))
                            echo "Build timestamp: ${env.BUILD_TIMESTAMP}"
                        }
                    }
        }

        stage('Clone Repositories') {
            steps {
                script {
                    // Clone frontend repository
                    dir('frontend') {
                        checkout([
                            $class: 'GitSCM',
                            branches: [[name: '*/main']],
                            userRemoteConfigs: [[
                                url: 'https://github.com/nitesh1012/SWE645_VUE_FRONTEND.git',
                                credentialsId: 'mygithubcred'
                            ]]
                        ])
                    }

                    // Clone backend repository
                    dir('backend') {
                        checkout([
                            $class: 'GitSCM',
                            branches: [[name: '*/main']],
                            userRemoteConfigs: [[
                                url: 'https://github.com/nitesh1012/SWE_645_HW3.git',
                                credentialsId: 'mygithubcred'
                            ]]
                        ])
                    }
                }
            }
        }

        stage('Build Frontend') {
            steps {
                script {
                    // Build the frontend project
                    dir('frontend') {
                        sh 'npm install'
                        sh 'npm run build'
                    }

                    // Copy frontend build to backend static folder
                    sh 'cp -r frontend/dist/* backend/src/main/resources/static/'
                }
            }
        }

        stage('Build Backend') {
            steps {
                script {
                    // Build the backend project
                    dir('backend') {
                        sh 'mvn clean package'
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Securely handle Docker login
                    withCredentials([usernamePassword(credentialsId: 'docker-pass',
                                                      usernameVariable: 'DOCKER_USER',
                                                      passwordVariable: 'DOCKER_PASS')]) {
                        sh """
                            echo "\$DOCKER_PASS" | docker login -u "\$DOCKER_USER" --password-stdin
                        """
                    }

                    // Build a unified Docker image with both frontend and backend
                    def imageName = "nthota2/unified-backend:${env.BUILD_TIMESTAMP}"
                    sh "docker build -t ${imageName} ."

                    // Save the image name for later stages
                    env.IMAGE_NAME = imageName
                }
            }
        }

        stage('Push Image to DockerHub') {
            steps {
                script {
                    // Push the Docker image to DockerHub
                    sh "docker push ${env.IMAGE_NAME}"
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    // Deploy the new image to Kubernetes
                    sh "kubectl set image deployment/extra-credit-deployment container-0=${env.IMAGE_NAME}"
                }
            }
        }
    }
}
