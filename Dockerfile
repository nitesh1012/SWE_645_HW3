# Using base image with java
FROM openjdk:17-jdk-alpine

# Setting the working directory in the container
WORKDIR /app

# Copying the built JAR file into the container
COPY target/demo-0.0.1-SNAPSHOT.jar app.jar

# Exposing the port on which the app will run (default is 8080)
EXPOSE 8080

# Command to run the JAR file
ENTRYPOINT ["java", "-jar", "app.jar"]
