package com.tfm.mastermind.back.models;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;

public class SecretCombinationTest {

	@Test
	public void getSecretCombinationNotNullTest() {
		SecretCombination secretCombination = new SecretCombination();
		assertNotNull(secretCombination.getColors());
	}
}
