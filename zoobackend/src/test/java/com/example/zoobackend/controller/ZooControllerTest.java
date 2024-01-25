package com.example.zoobackend.controller;

import com.example.zoobackend.model.AnimalModel;
import com.example.zoobackend.model.CalendarModel;
import com.example.zoobackend.service.ZooService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;


import static org.mockito.BDDMockito.given;
import static org.junit.jupiter.api.Assertions.*;
@ExtendWith(MockitoExtension.class)
class ZooControllerTest {
    @Mock
    private ZooService zooService;
    @InjectMocks ZooController zooController;

    @Test
    void getCalendar() {
        //Given
        CalendarModel calendarModel = CalendarModel.builder()
                .id(1L)
                .date(Timestamp.valueOf("2024-12-31 23:59:59"))
                .eventName("New Year's Eve Celebration")
                .targetGroup("Families")
                .time("20:00 - 01:00")
                .build();
        List<CalendarModel> calendarModelList = new ArrayList<>();
        calendarModelList.add(calendarModel);
        given(zooService.getCalendar()).willReturn(calendarModelList);
        //When
        ResponseEntity<List<CalendarModel>> calendar = zooController.getCalendar();
        //Then
        assertEquals(HttpStatus.OK, calendar.getStatusCode());
        assertEquals(calendarModelList, calendar.getBody());
    }

    @Test
    void getAnimalInfo() {
        //Given
        List<AnimalModel> animalList = new ArrayList<>();
        animalList.add(AnimalModel.builder()
                .id(1L)
                .animalType("Lion")
                .description("Large carnivorous feline found in grasslands and savannas.")
                .image("lion.jpg")
                .build());
        given(zooService.getAnimalInfo()).willReturn(animalList);
        //When
        ResponseEntity<List<AnimalModel>> responseEntity = zooController.getAnimalInfo();
        //Then
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(animalList, responseEntity.getBody());
    }
}