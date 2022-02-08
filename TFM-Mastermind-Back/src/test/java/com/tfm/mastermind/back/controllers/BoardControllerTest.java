package com.tfm.mastermind.back.controllers;

import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;

public class BoardControllerTest {

	@Test
	public void getBoardNullFromControllerTest() {
		BoardController boardController = new BoardController();
		assertNull(boardController.getBoard());
	}
}
