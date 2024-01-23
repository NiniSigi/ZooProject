package com.example.zoobackend.model;

import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;

@Data
@Builder
public class CalendarModel {
    private Long id;
    private Timestamp date;
    private String eventName;
    private String targetGroup;
    private String time;
}
