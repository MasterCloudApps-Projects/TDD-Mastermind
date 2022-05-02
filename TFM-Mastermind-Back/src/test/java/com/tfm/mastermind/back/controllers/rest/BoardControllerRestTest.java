package com.tfm.mastermind.back.controllers.rest;

import static io.restassured.RestAssured.when;
import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.notNullValue;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;

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
    
    @Test
	public void addProposalCombinationRestTest() throws Exception {
    	
    	given().
        request()
            .body("{ \"combination\" : [ \"BLUE\", \"YELLOW\", \"PURPLE\", \"GREEN\"] }")
            .contentType(ContentType.JSON).
        when()
            .put("/api/board/")
            
        .then()
            .assertThat()
            .statusCode(200)
            .body(notNullValue())
	        .body("combination[0]", equalTo("BLUE"))//, YELLOW, PURPLE, GREEN]"));
	        .body("combination[1]", equalTo("YELLOW"))//, YELLOW, PURPLE, GREEN]"));
	        .body("combination[2]", equalTo("PURPLE"))//, YELLOW, PURPLE, GREEN]"));
    		.body("combination[3]", equalTo("GREEN"));
    }
}
