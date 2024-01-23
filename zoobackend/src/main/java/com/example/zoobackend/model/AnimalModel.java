package com.example.zoobackend.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AnimalModel {
    private Long id;
    private String animalType;
    private String description;
    private String image;
}
