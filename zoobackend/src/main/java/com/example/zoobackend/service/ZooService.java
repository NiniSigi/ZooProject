package com.example.zoobackend.service;

import com.example.zoobackend.model.AnimalModel;
import com.example.zoobackend.model.CalendarModel;
import com.example.zoobackend.repository.AnimalRepository;
import com.example.zoobackend.repository.CalendarRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class ZooService {
    private final CalendarRepository calendarRepository;
    private final AnimalRepository animalRepository;
    public List<CalendarModel> getCalendar() {
        return calendarRepository.getAllCalendarModel();
    }

    public List<AnimalModel> getAnimalInfo() {
        return animalRepository.getAllAnimals();
    }
}
