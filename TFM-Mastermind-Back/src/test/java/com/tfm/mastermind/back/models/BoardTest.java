package com.tfm.mastermind.back.models;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

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
	
	@Test
	public void getBoardProposalCombinationNullTest() {
		Board board = new Board();
		assertNull(board.getProposalCombination());
	}
	
	@Test
	public void getActualIntentCorrectValueTest() {
		Board board = new Board();
		assertNotEquals(board.getActualIntent(), Integer.MIN_VALUE);
	}
	
}
