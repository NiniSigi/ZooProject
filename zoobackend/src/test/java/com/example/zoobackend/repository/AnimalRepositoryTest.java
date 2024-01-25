package com.example.zoobackend.repository;

import com.example.zoobackend.model.AnimalModel;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
class AnimalRepositoryTest {
    @Mock
    private JdbcTemplate jdbcTemplate;

    @InjectMocks
    private AnimalRepository animalRepository;

    @Test
    void getAllAnimals() {
        // Given
        AnimalModel animalModel = AnimalModel.builder().id(1L).build();
        given(
                jdbcTemplate.query(
                        eq("SELECT * FROM animalInfo"),
                        ArgumentMatchers.<RowMapper<AnimalModel>>any()))
                .willReturn(List.of(animalModel));

        // When
        List<AnimalModel> animalModelList = animalRepository.getAllAnimals();

        // Then
        assertEquals(animalModelList.size(), 1);
        assertEquals(animalModelList.get(0).getId(), 1L);
    }
}