package com.example.zoobackend.repository;

import com.example.zoobackend.model.CalendarModel;
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
class CalendarRepositoryTest {
    @Mock
    private JdbcTemplate jdbcTemplate;
    @InjectMocks
    CalendarRepository calendarRepository;

    @Test
    void getAllCalendarModel() {
        // Given
        CalendarModel redditPostEntity = CalendarModel.builder().id(1L).build();
        given(
                jdbcTemplate.query(
                        eq("SELECT * FROM calendar"),
                        ArgumentMatchers.<RowMapper<CalendarModel>>any()))
                .willReturn(List.of(redditPostEntity));

        // When
        List<CalendarModel> redditPostEntityList = calendarRepository.getAllCalendarModel();

        // Then
        assertEquals(redditPostEntityList.size(), 1);
        assertEquals(redditPostEntityList.get(0).getId(), 1L);
    }
}