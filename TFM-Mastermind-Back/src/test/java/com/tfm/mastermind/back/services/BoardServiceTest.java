package com.tfm.mastermind.back.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;

import com.tfm.mastermind.back.models.ProposalCombination;
import com.tfm.mastermind.back.utils.Color;

public class BoardServiceTest {

	@Test
	public void getBoardNotNullTest() {
		BoardService boardService = new BoardService();
		assertNotNull(boardService.getBoard());
	}
	
	@Test
	public void getSecretCombinationFromBoardTest() {
		BoardService boardService = new BoardService();
		assertNotNull(boardService.getBoard().getSecretCombination());
	}
	
	@Test
	public void getActualIntentFromBoardTest() {
		BoardService boardService = new BoardService();
		assertNotNull(boardService.getBoard().getActualIntent());
	}
	
	@Test
	public void addProposalCombinationToBoardTest() {
		BoardService boardService = new BoardService();
		ProposalCombination proposalCombination = new ProposalCombination();
		proposalCombination.combination.add(Color.RED);
		proposalCombination.combination.add(Color.BLUE);
		proposalCombination.combination.add(Color.GREEN);
		proposalCombination.combination.add(Color.ORANGE);
		
		int firstIntent = boardService.getBoard().getActualIntent();		
		assertNull(boardService.getBoard().getProposalCombination(firstIntent));
		assertNotEquals(proposalCombination, boardService.getBoard().getProposalCombination(firstIntent));
		
		boardService.getBoard().addProposal(proposalCombination);
		
		assertNotNull(boardService.getBoard().getProposalCombination(firstIntent));
		assertEquals(proposalCombination, boardService.getBoard().getProposalCombination(firstIntent));
		
	}
}
