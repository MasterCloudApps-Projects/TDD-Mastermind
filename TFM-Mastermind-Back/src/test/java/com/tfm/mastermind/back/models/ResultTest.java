package com.tfm.mastermind.back.models;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

public class ResultTest {

	@Test
	public void getWhiteValueAfterSetResultTest() {
		Result result = new Result(1, 0);
		assertEquals(result.getWhites(), 1);		

		Result result2 = new Result(3, 0);
		assertEquals(result2.getWhites(), 3);		
	}
	
	@Test
	public void getBlackValueAfterSetResultTest() {
		Result result = new Result(1, 1);
		assertEquals(result.getBlack(), 1);		

		Result result2 = new Result(1, 3);
		assertEquals(result2.getBlack(), 3);		
	}
	
	@Test
	public void checkWinnerAndGetFalseTest() {
		Result result = new Result(1, 1);
		assertFalse(result.isWinner());		
	}

	@Test
	public void checkWinnerAndGetCorrectValueTest() {
		Result result = new Result(1, 1);
		assertFalse(result.isWinner());		

		Result result2 = new Result(1, 4);
		assertTrue(result2.isWinner());		
	}
}
