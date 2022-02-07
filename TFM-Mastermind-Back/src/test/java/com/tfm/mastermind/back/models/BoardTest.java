package com.tfm.mastermind.back.models;

import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;

public class BoardTest {

	@Test
	public void getBoardSecretCombinationNotNull() {
		Board board = new Board();
		assertNotNull(board.getSecretCombination());
	}
	
	@Test
	public void getDiferentSecretCombinationTest() {
		Board board = new Board();
		Board board2 = new Board();
		assertNotEquals(board.getSecretCombination(), board2.getSecretCombination());
	}
	
}
