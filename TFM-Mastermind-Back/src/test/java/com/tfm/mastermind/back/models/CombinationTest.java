package com.tfm.mastermind.back.models;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;

public class CombinationTest {

	@Test
	public void getCombinationListNotNullTest() {
		Combination combination = new Combination();
		assertNotNull(combination.getColors());
	}
	
	@Test
	public void getMaxWidthCorrectValueTest() {
		Combination combination = new Combination();
		assertEquals(combination.getMaxWidth(), 4);
	}
}
