package com.tfm.mastermind.back.models;

import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;

public class ProposalCombinationTest {

	@Test
	public void getProposalCombinationNullTest() {
		ProposalCombination secretCombination = new ProposalCombination();
		assertNull(secretCombination.getColors());
	}
}
