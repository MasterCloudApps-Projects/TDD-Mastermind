package com.tfm.mastermind.back.controllers.rest;

import static io.restassured.RestAssured.given;
import static io.restassured.RestAssured.when;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.not;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.hamcrest.CoreMatchers.nullValue;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

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
	        .body("white", is(not(nullValue())))
	        .body("black", is(not(nullValue())));
    }
    
    @Test
	public void getActualIntentRestTest() throws Exception {

    	//Given
		Response actualIntent = when()
            .get("/api/board/actualIntent").thenReturn();

		when()
	        .get("/api/board/")
	    .then()
	         .assertThat()
	         .statusCode(200)
	         .body("actualIntent", equalTo(Integer.parseInt(actualIntent.getBody().asString())));
    }
    
    @Test
	public void getProposalCombinationRestTest() throws Exception {
    	//Given
		Response actualIntent = when()
            .get("/api/board/actualIntent").thenReturn();
    	Integer intent = Integer.parseInt(actualIntent.getBody().asString());
    	
    	
    	given().
	        request()
	            .pathParam("intent", intent)
	            .contentType(ContentType.JSON).
        when()
            .get("/api/board/proposal/{intent}")
        .then()
            .assertThat()
            .statusCode(200)
            .body(notNullValue());
    	
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
	        .body("white", is(not(nullValue())))
	        .body("black", is(not(nullValue())));
    	
    	given().
	    	request()
            .pathParam("intent", intent)
	        .contentType(ContentType.JSON).
        when()
	        .get("/api/board/proposal/{intent}") 
        .then()
            .assertThat()
            .statusCode(200)
            .body(notNullValue())
	        .body("combination[0]", equalTo("BLUE"))//, YELLOW, PURPLE, GREEN]"));
	        .body("combination[1]", equalTo("YELLOW"))//, YELLOW, PURPLE, GREEN]"));
	        .body("combination[2]", equalTo("PURPLE"))//, YELLOW, PURPLE, GREEN]"));
    		.body("combination[3]", equalTo("GREEN"));
    }
    
    @Test
	public void getResultRestTest() throws Exception {
    	given().
        request()
            .body("{ \"combination\" : [ \"BLUE\", \"YELLOW\", \"PURPLE\", \"GREEN\"] }")
            .contentType(ContentType.JSON).
	    when()
	        .put("/api/board/")
	    .then()
	        .assertThat()
	        .statusCode(200);
    	
    	//Given
		when()
            .get("/api/board/result")
        .then()
            .assertThat()
            .statusCode(200)
            .body(notNullValue())
            .body("black", notNullValue())
    		.body("white", notNullValue());
    }
    
    @Test
	public void getResultListRestTest() throws Exception {
    	//Given
		when()
            .get("/api/board/results")
        .then()
            .assertThat()
            .statusCode(200)
            .body(notNullValue())
            .body("size()", is(not(0)));
    }
    
    @Test
	public void getProposaltListRestTest() throws Exception {
    	//Given
		when()
            .get("/api/board/proposals")
        .then()
            .assertThat()
            .statusCode(200)
            .body(notNullValue())
            .body("size()", is(not(0)));
    }
}
