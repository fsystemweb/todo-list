package com.fsystem.apiresttask.api;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.NotEmpty;

@Getter
@Setter
public class TaskRequest {
    @NotEmpty
    private String title;
}
