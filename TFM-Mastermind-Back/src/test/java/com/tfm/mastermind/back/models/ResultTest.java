package com.tfm.mastermind.back.models;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class ResultTest {

	@Test
	public void getWhiteValueTest() {
		Result result = new Result();
		assertEquals(result.getWhites(), 0);		
	}
}
