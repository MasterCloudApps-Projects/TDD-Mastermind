package com.tfm.mastermind.back.models;

import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;

public class SecretCombinationTest {

	@Test
	public void getSecretCombinationNullTest() {
		SecretCombination secretCombination = new SecretCombination();
		assertNull(secretCombination.getColors());
	}
}
