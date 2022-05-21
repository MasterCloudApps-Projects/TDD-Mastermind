package com.tfm.mastermind.back.models;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class ResultTest {

	@Test
	public void getWhiteValueAfterSetResultTest() {
		Result result = new Result(1);
		assertEquals(result.getWhites(), 1);		

		Result result2 = new Result(3);
		assertEquals(result2.getWhites(), 3);		
	}
}
