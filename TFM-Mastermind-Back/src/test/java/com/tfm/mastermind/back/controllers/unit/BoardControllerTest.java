package com.tfm.mastermind.back.controllers.unit;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.tfm.mastermind.back.controllers.BoardController;
import com.tfm.mastermind.back.models.Board;


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
		
		Board board = this.boardController.getBoard().getBody();
		int firstIntent = board.getActualIntent();		
		assertNull(board.getProposalCombination(firstIntent));
		
		this.boardController.addProposalCombination();
		
		assertNotNull(board.getProposalCombination(firstIntent));
		
		
	}
}
