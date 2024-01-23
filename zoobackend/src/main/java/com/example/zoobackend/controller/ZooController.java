package com.example.zoobackend.controller;

import com.example.zoobackend.model.AnimalModel;
import com.example.zoobackend.model.CalendarModel;
import com.example.zoobackend.service.ZooService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/zoo")
@CrossOrigin(origins = "http://localhost:3000") // Erlaubt CORS-Anfragen nur von localhost:3000
@AllArgsConstructor
public class ZooController {
    private final ZooService zooService;

    @GetMapping("/calendar")
    public ResponseEntity<List<CalendarModel>> getCalendar() {
        return ResponseEntity.ok(zooService.getCalendar());
    }

    @GetMapping("/animalInfo")
    public ResponseEntity<List<AnimalModel>> getAnimalInfo() {
        return ResponseEntity.ok(zooService.getAnimalInfo());
    }
}
