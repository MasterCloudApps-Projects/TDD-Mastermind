package com.tfm.mastermind.back.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;

import com.tfm.mastermind.back.models.Board;
import com.tfm.mastermind.back.models.ProposalCombination;
import com.tfm.mastermind.back.models.Result;
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
	
	@Test
	public void addProposalCombinationToBoardServiceTest() {
		BoardService boardService = new BoardService();
		ProposalCombination proposalCombination = new ProposalCombination();
		proposalCombination.combination.add(Color.RED);
		proposalCombination.combination.add(Color.BLUE);
		proposalCombination.combination.add(Color.GREEN);
		proposalCombination.combination.add(Color.ORANGE);
		int firstIntent = boardService.getBoard().getActualIntent();		
		assertNull(boardService.getBoard().getProposalCombination(firstIntent));
		
		boardService.addProposal(proposalCombination);
		
		assertNotNull(boardService.getBoard().getProposalCombination(firstIntent));
		assertEquals(proposalCombination.getColors(), 
		boardService.getBoard().getProposalCombination(firstIntent).getColors());
		
	}
	
	@Test
	public void getNotNullResultFromBoardServiceTest() {
		BoardService boardService = new BoardService();
		ProposalCombination proposalCombination = new ProposalCombination();
		proposalCombination.combination.add(Color.RED);
		proposalCombination.combination.add(Color.BLUE);
		proposalCombination.combination.add(Color.GREEN);
		proposalCombination.combination.add(Color.ORANGE);
		boardService.addProposal(proposalCombination);
		
		assertNotNull(boardService.getResult());
	}
	
	@Test
	public void getNotEmptyResultFromBoardServiceTest() {
		BoardService boardService = new BoardService();
		ProposalCombination proposalCombination = new ProposalCombination();
		proposalCombination.combination.add(Color.RED);
		proposalCombination.combination.add(Color.BLUE);
		proposalCombination.combination.add(Color.GREEN);
		proposalCombination.combination.add(Color.ORANGE);
		boardService.addProposal(proposalCombination);
		
		Result result = boardService.getResult();
		assertNotNull(result.getBlack());
		assertNotNull(result.getWhite());
	}
	
	@Test
	public void addProposalCombinationToBoardServiceAndGetResultTest() {
		BoardService boardService = new BoardService();
		ProposalCombination proposalCombination = new ProposalCombination();
		proposalCombination.combination.add(Color.RED);
		proposalCombination.combination.add(Color.BLUE);
		proposalCombination.combination.add(Color.GREEN);
		proposalCombination.combination.add(Color.ORANGE);
		int firstIntent = boardService.getBoard().getActualIntent();		
		assertNull(boardService.getBoard().getProposalCombination(firstIntent));
		
		Result result = boardService.addProposal(proposalCombination);
		
		assertNotNull(result);
		assertNotNull(result.getBlack());
		assertNotNull(result.getWhite());
	}
	
	@Test
	public void getNotNullResultListServiceTest() {
		BoardService boardService = new BoardService();
		assertNotNull(boardService.getResults());
		assertNotEquals(boardService.getResults().length, 0);
	}
	
	@Test
	public void getNotNullProposalListServiceTest() {
		BoardService boardService = new BoardService();
		assertNotNull(boardService.getProposalCombinations());
		assertNotEquals(boardService.getProposalCombinations().length, 0);
	}
	
	@Test
	public void getNotNullBoardNewGameServiceTest() {
		BoardService boardService = new BoardService();
		Board board = boardService.startNewGame();
		assertNotNull(board);
		assertEquals(board.getActualIntent(), 0);
	}
}
