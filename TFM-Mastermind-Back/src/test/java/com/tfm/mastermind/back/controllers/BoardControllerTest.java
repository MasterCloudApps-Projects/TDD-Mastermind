package com.tfm.mastermind.back.controllers;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class BoardControllerTest {
	
	@Autowired
	private BoardController boardController;
	
	@Test
	public void getBoardNotNullFromControllerTest() {
		assertNotNull(this.boardController.getBoard());
	}
}
