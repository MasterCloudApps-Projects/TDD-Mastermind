package com.tfm.mastermind.back.models;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;

import com.tfm.mastermind.back.utils.Color;

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
	
	@Test
	public void addProposalTest() {
		Board board = new Board();
		ProposalCombination proposalCombination = new ProposalCombination();
		proposalCombination.combination.add(Color.RED);
		proposalCombination.combination.add(Color.BLUE);
		proposalCombination.combination.add(Color.GREEN);
		proposalCombination.combination.add(Color.ORANGE);
		
		assertNotEquals(proposalCombination.getColors(), board.getProposalCombination());
		
		board.addProposal(proposalCombination);
		assertEquals(proposalCombination, board.getProposalCombination());
	}
	
	@Test
	public void addProposalAndIntentChangeTest() {
		Board board = new Board();
		ProposalCombination proposalCombination = new ProposalCombination();
		proposalCombination.combination.add(Color.RED);
		proposalCombination.combination.add(Color.BLUE);
		proposalCombination.combination.add(Color.GREEN);
		proposalCombination.combination.add(Color.ORANGE);
		
		int firstIntent = board.getActualIntent();		
		board.addProposal(proposalCombination);
		int secondIntent = board.getActualIntent();
		
		assertNotEquals(firstIntent, secondIntent);
	}
	
	
}
