package com.tfm.mastermind.back.controllers.rest;

import static io.restassured.RestAssured.when;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.notNullValue;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;

import io.restassured.RestAssured;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class BoardControllerRestTest {

	@LocalServerPort
    int port;
	
	@BeforeEach
    public void setUp() {
        RestAssured.port = port;
    }

    @Test
	public void getBoardRestTest() throws Exception {

        when()
            .get("/api/board/")
        .then()
             .assertThat()
             .statusCode(200)
             .body(notNullValue())
             .body("secretCombination.combination.size()", equalTo(4));
    }
}
