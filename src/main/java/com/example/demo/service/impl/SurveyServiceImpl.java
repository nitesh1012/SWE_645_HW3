package com.example.demo.service.impl;

import com.example.demo.model.Survey;
import com.example.demo.repository.SurveyRepository;
import com.example.demo.service.SurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class SurveyServiceImpl implements SurveyService {

    @Autowired
    private SurveyRepository surveyRepository;

    @Override
    public Survey saveSurvey(Survey survey) {
        return surveyRepository.save(survey);
    }

    @Override
    public List<Survey> getAllSurveys() {
        return surveyRepository.findAll();
    }

    @Override
    public Survey getSurveyById(Long id) {
        return surveyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Survey not found with id: " + id));
    }

    @Override
    public Survey updateSurvey(Survey survey, Long id) {
        return surveyRepository.findById(id).map(existingSurvey -> {
            // Copy data from `survey` to `existingSurvey`
            existingSurvey.setFirstName(survey.getFirstName());
            existingSurvey.setLastName(survey.getLastName());
            existingSurvey.setStreetAddress(survey.getStreetAddress());
            existingSurvey.setCity(survey.getCity());
            existingSurvey.setState(survey.getState());
            existingSurvey.setZip(survey.getZip());
            existingSurvey.setPhone(survey.getPhone());
            existingSurvey.setEmail(survey.getEmail());
            existingSurvey.setSurveyDate(survey.getSurveyDate());
            existingSurvey.setLikedMost(survey.getLikedMost());
            existingSurvey.setInterestSource(survey.getInterestSource());
            existingSurvey.setrecommendation_list(survey.getrecommendation_list());

            return surveyRepository.save(existingSurvey);
        }).orElseThrow(() -> new RuntimeException("Survey not found with id: " + id));
    }

    @Override
    public void deleteSurvey(Long id) {
        if (!surveyRepository.existsById(id)) {
            throw new RuntimeException("Survey not found with id: " + id);
        }
        surveyRepository.deleteById(id);
    }

}
