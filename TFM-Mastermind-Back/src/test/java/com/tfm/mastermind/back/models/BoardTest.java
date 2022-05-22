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
		
		int i = board.getActualIntent();
		
		assertNotEquals(proposalCombination.getColors(), board.getProposalCombination(i));
		
		board.addProposal(proposalCombination);
		assertEquals(proposalCombination, board.getProposalCombination(i));
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
	
	@Test
	public void getEspecificProposalTest() {
		Board board = new Board();
		ProposalCombination proposalCombination = new ProposalCombination();
		proposalCombination.combination.add(Color.RED);
		proposalCombination.combination.add(Color.BLUE);
		proposalCombination.combination.add(Color.GREEN);
		proposalCombination.combination.add(Color.ORANGE);
		
		int i = board.getActualIntent();
		
		assertNull(board.getProposalCombination(i));
		board.addProposal(proposalCombination);
		assertNotNull(board.getProposalCombination(i));		
		assertEquals(proposalCombination, board.getProposalCombination(i));
		
		int i2 = board.getActualIntent();
		assertNotEquals(i, i2);
		assertNull(board.getProposalCombination(i2));
		board.addProposal(proposalCombination);
		assertNotNull(board.getProposalCombination(i2));		
		assertEquals(proposalCombination, board.getProposalCombination(i2));
	}
	
	@Test
	public void getNotNullResultBoardTest() {
		Board board = new Board();
		ProposalCombination proposalCombination = new ProposalCombination();
		proposalCombination.combination.add(Color.RED);
		proposalCombination.combination.add(Color.BLUE);
		proposalCombination.combination.add(Color.GREEN);
		proposalCombination.combination.add(Color.ORANGE);
		board.addProposal(proposalCombination);
		
		assertNotNull(board.getResult());
	}
	
	@Test
	public void getNotEmptyResultBoardTest() {
		Board board = new Board();
		ProposalCombination proposalCombination = new ProposalCombination();
		proposalCombination.combination.add(Color.RED);
		proposalCombination.combination.add(Color.BLUE);
		proposalCombination.combination.add(Color.GREEN);
		proposalCombination.combination.add(Color.ORANGE);
		board.addProposal(proposalCombination);
		
		Result result = board.getResult();
		assertNotNull(result.getBlack());
		assertNotNull(result.getWhite());
	}
	
	@Test
	public void addProposalAndGetResultTest() {
		Board board = new Board();
		ProposalCombination proposalCombination = new ProposalCombination();
		proposalCombination.combination.add(Color.RED);
		proposalCombination.combination.add(Color.BLUE);
		proposalCombination.combination.add(Color.GREEN);
		proposalCombination.combination.add(Color.ORANGE);
		
		Result result = board.addProposal(proposalCombination);
		assertNotNull(result);
		assertNotNull(result.getBlack());
		assertNotNull(result.getWhite());
	}
	
	@Test
	public void getNotNullResultListFromBoardTest() {
		Board board = new Board();
		assertNotNull(board.getResults());
		assertNotEquals(board.getResults().length, 0);
	}
}
