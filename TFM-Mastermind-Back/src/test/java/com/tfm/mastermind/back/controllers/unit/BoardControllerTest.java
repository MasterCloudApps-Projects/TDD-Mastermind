package com.tfm.mastermind.back.controllers.unit;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.tfm.mastermind.back.controllers.BoardController;
import com.tfm.mastermind.back.models.Board;
import com.tfm.mastermind.back.models.ProposalCombination;
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
		
		Board board = this.boardController.getBoard().getBody();
		
		ProposalCombination proposal = this.boardController.getProposalCombination();
		assertEquals(board.getProposalCombination(0), proposal);
		
	}
}
