package com.example.zoobackend.repository;

import com.example.zoobackend.model.AnimalModel;
import com.example.zoobackend.model.CalendarModel;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class AnimalRepository {
    private final JdbcTemplate jdbcTemplate;
    public List<AnimalModel> getAllAnimals() {
        String sql = "SELECT * FROM animalInfo";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            AnimalModel animalModel = AnimalModel.builder().build();
            animalModel.setId(rs.getLong("id"));
            animalModel.setAnimalType(rs.getString("animalType"));
            animalModel.setDescription(rs.getString("description"));
            animalModel.setImage(rs.getString("image"));
            return animalModel;
        });
    }
}
