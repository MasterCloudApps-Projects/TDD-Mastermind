package com.tfm.mastermind.back.models;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class ResultTest {

	@Test
	public void getWrongWhiteValueTest() {
		Result result = new Result();
		assertEquals(result.getWhites(), Integer.MIN_VALUE);		
	}
}
