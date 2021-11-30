package com.fsystem.apiresttask.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class Task {
    @JsonProperty("_id")
    @NotNull
    private String id;
    @NotNull
    private String title;
    private String date;

    public Task(String title){
        this.title = title;
        this.date = LocalDate.now().toString();
    }
}
