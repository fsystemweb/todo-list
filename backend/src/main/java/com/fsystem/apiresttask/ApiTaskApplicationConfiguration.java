package com.fsystem.apiresttask;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.dropwizard.Configuration;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class ApiTaskApplicationConfiguration extends Configuration {
    @JsonProperty
    @NotNull
    public String mongoHost;

    @JsonProperty
    @Min(1)
    @Max(65535)
    public int mongoPort;

    @JsonProperty
    public String mongoDB;

    @JsonProperty
    @NotNull
    public String collectionName;

    @JsonProperty
    public String mongoUser;

    @JsonProperty
    public String mongoPassword;
}
