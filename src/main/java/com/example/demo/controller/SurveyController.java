package com.example.demo.controller;

import com.example.demo.model.Survey;
import com.example.demo.service.SurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/api/surveys")
public class SurveyController {
    @Autowired
    private SurveyService surveyService;

    // Creating a new survey
    @PostMapping
    public ResponseEntity<Survey> createSurvey(@RequestBody Survey survey) {
        Survey savedSurvey = surveyService.saveSurvey(survey);
        return new ResponseEntity<>(savedSurvey, HttpStatus.CREATED);
    }

    // Getting all surveys
    @GetMapping
    public ResponseEntity<List<Survey>> getAllSurveys() {
        List<Survey> surveys = surveyService.getAllSurveys();
        return new ResponseEntity<>(surveys, HttpStatus.OK);
    }

    // Getting a survey by ID
    @GetMapping("/{id}")
    public ResponseEntity<Survey> getSurveyById(@PathVariable("id") Long id) {
        Survey survey = surveyService.getSurveyById(id);
        return new ResponseEntity<>(survey, HttpStatus.OK);
    }

    // Updating a survey by ID
    @PutMapping("/{id}")
    public ResponseEntity<Survey> updateSurvey(@PathVariable("id") Long id, @RequestBody Survey survey) {
        Survey updatedSurvey = surveyService.updateSurvey(survey, id);
        return new ResponseEntity<>(updatedSurvey, HttpStatus.OK);
    }

    // Deleting a survey by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSurvey(@PathVariable("id") Long id) {
        surveyService.deleteSurvey(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
