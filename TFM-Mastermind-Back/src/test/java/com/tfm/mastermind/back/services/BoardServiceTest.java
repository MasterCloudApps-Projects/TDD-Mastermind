package com.tfm.mastermind.back.services;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;

public class BoardServiceTest {

	@Test
	public void getBoardNotNullTest() {
		BoardService boardService = new BoardService();
		assertNotNull(boardService.getBoard());
	}
}
