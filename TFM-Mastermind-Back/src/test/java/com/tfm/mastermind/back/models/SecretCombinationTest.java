package com.tfm.mastermind.back.models;

import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;

public class SecretCombinationTest {

	@Test
	public void getSecretCombinationNotNullTest() {
		SecretCombination secretCombination = new SecretCombination();
		assertNotNull(secretCombination.getColors());
	}
	
	@Test
	public void getRandomSecretCombinationTest() {
		SecretCombination secretCombination = new SecretCombination();
		SecretCombination secretCombination2 = new SecretCombination();
		assertNotEquals(secretCombination.getColors().toString(), secretCombination2.getColors().toString());
	}
}
