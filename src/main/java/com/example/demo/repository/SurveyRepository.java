package com.example.demo.repository;

import com.example.demo.model.Survey;
import org.springframework.data.jpa.repository.JpaRepository;



public interface SurveyRepository extends JpaRepository<Survey, Long> {
}
