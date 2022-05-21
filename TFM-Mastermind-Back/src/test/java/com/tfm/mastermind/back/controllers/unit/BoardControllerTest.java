package com.tfm.mastermind.back.controllers.unit;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.json.JSONException;
import org.json.JSONObject;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.tfm.mastermind.back.controllers.BoardController;
import com.tfm.mastermind.back.models.Board;
import com.tfm.mastermind.back.models.ProposalCombination;
import com.tfm.mastermind.back.models.Result;
import com.tfm.mastermind.back.utils.Color;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class BoardControllerTest {
	
	@Autowired
	private BoardController boardController;
	
	@Test
	public void getBoardNotNullFromControllerTest() {
		assertNotNull(this.boardController.getBoard());
	}
	
	@Test
	public void addProposalCombinationControllerTest() {
		ProposalCombination proposalCombination = new ProposalCombination();
		proposalCombination.combination.add(Color.RED);
		proposalCombination.combination.add(Color.BLUE);
		proposalCombination.combination.add(Color.GREEN);
		proposalCombination.combination.add(Color.ORANGE);
		
		Board board = this.boardController.getBoard().getBody();
		int firstIntent = board.getActualIntent();		
		assertNull(board.getProposalCombination(firstIntent));
		
		this.boardController.addProposalCombination(proposalCombination);
		
		assertNotNull(board.getProposalCombination(firstIntent));
		assertEquals(proposalCombination.getColors(), 
		board.getProposalCombination(firstIntent).getColors());
		
		
	}
	
	@Test
	public void getProposalCombinationControllerTest() {
		ProposalCombination proposalCombination = new ProposalCombination();
		proposalCombination.combination.add(Color.RED);
		proposalCombination.combination.add(Color.BLUE);
		proposalCombination.combination.add(Color.GREEN);
		proposalCombination.combination.add(Color.ORANGE);
		
		Board board = this.boardController.getBoard().getBody();
		int firstIntent = board.getActualIntent();		
		
		ProposalCombination proposal = this.boardController.getProposalCombination(firstIntent);
		assertEquals(board.getProposalCombination(firstIntent), proposal);
		
		this.boardController.addProposalCombination(proposalCombination);
		
		proposal = this.boardController.getProposalCombination(firstIntent);
		assertEquals(board.getProposalCombination(firstIntent), proposal);
		
		ProposalCombination proposalCombination2 = new ProposalCombination();
		proposalCombination2.combination.add(Color.RED);
		proposalCombination2.combination.add(Color.BLUE);
		proposalCombination2.combination.add(Color.GREEN);
		proposalCombination2.combination.add(Color.ORANGE);
		
		Board board2 = this.boardController.getBoard().getBody();
		int actualIntent = board2.getActualIntent();		
		
		ProposalCombination proposal2 = this.boardController.getProposalCombination(actualIntent);
		assertEquals(board2.getProposalCombination(actualIntent), proposal2);
		
		this.boardController.addProposalCombination(proposalCombination2);
		
		proposal2 = this.boardController.getProposalCombination(actualIntent);
		assertEquals(board2.getProposalCombination(actualIntent), proposal2);
	}
	
	@Test
	public void getActualIntentControllerTest() {
		assertEquals(this.boardController.getActualIntent(), this.boardController.getBoard().getBody().getActualIntent());
	}
	
	@Test
	public void getNotNullResultControllerTest() {
		assertNotNull(this.boardController.getResult());
	}
	
	@Test
	public void getNotEmptyResultControllerTest() {
		JSONObject result = new JSONObject(this.boardController.getResult());
		assertTrue(result.has("black"));
		assertTrue(result.has("white"));
	}
	
	@Test
	public void addProposalCombinationAndGetResultControllerTest() throws JSONException {
		ProposalCombination proposalCombination = new ProposalCombination();
		proposalCombination.combination.add(Color.RED);
		proposalCombination.combination.add(Color.BLUE);
		proposalCombination.combination.add(Color.GREEN);
		proposalCombination.combination.add(Color.ORANGE);
		
		Board board = this.boardController.getBoard().getBody();
		int firstIntent = board.getActualIntent();		
		assertNull(board.getProposalCombination(firstIntent));
		
		Result result = this.boardController.addProposalCombination(proposalCombination);
		
		assertNotNull(result);
		assertNotNull(result.getBlack());
		assertNotNull(result.getWhites());
		
	}
}
