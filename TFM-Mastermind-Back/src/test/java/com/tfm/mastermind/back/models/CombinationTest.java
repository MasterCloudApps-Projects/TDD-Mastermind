package com.tfm.mastermind.back.models;

import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;

public class CombinationTest {

	@Test
	public void getCombinationListNullTest() {
		Combination combination = new Combination();
		assertNull(combination.getColors());
	}
}
