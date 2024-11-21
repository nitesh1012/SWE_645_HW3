package com.example.demo.service;

import com.example.demo.model.Survey;

import java.util.List;

public interface SurveyService {

    Survey saveSurvey(Survey survey);
    List<Survey> getAllSurveys();
    Survey getSurveyById(Long id);
    Survey updateSurvey(Survey survey, Long id);
    void deleteSurvey(Long id);
}
