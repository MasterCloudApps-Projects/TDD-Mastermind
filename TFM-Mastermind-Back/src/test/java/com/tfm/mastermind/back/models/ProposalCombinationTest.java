package com.tfm.mastermind.back.models;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;

public class ProposalCombinationTest {

	@Test
	public void getProposalCombinationNotNullTest() {
		ProposalCombination secretCombination = new ProposalCombination();
		assertNotNull(secretCombination.getColors());
	}
}
