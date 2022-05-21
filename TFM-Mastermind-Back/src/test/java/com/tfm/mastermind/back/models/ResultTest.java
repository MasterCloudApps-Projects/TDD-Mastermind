package com.tfm.mastermind.back.models;

import static org.junit.jupiter.api.Assertions.assertEquals;

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
}
