package com.tfm.mastermind.back.models;

import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;

public class BoardTest {

	@Test
	public void getBoardSecretCombinationNotNull() {
		Board board = new Board();
		assertNull(board.getSecretCombination());
	}
	
}
