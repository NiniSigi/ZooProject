package com.example.zoobackend.repository;

import com.example.zoobackend.model.CalendarModel;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class CalendarRepository {
    private final JdbcTemplate jdbcTemplate;
    private final KeyHolderFactory keyHolderFactory;

    public List<CalendarModel> getAllCalendarModel() {
        String sql = "SELECT * FROM calendar";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            CalendarModel calendarModel = CalendarModel.builder().build();
            calendarModel.setId(rs.getLong("id"));
            calendarModel.setDate(rs.getTimestamp("eventDate"));
            calendarModel.setTime(rs.getString("eventTime"));
            calendarModel.setEventName(rs.getString("eventName"));
            calendarModel.setTargetGroup(rs.getString("targetGroup"));
            return calendarModel;
        });
    }
}
