package com.tfm.mastermind.back.models;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;

import com.tfm.mastermind.back.utils.Color;

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
	
	@Test
	public void getResultCheckAddedProposalToSecretCombinationTest() {
		SecretCombination secretCombination = new SecretCombination();
		ProposalCombination proposalCombination = new ProposalCombination();
		proposalCombination.combination.add(Color.RED);
		proposalCombination.combination.add(Color.BLUE);
		proposalCombination.combination.add(Color.GREEN);
		proposalCombination.combination.add(Color.ORANGE);
		Result result = secretCombination.getResult(proposalCombination);
		
		assertNotNull(result);
		assertNotNull(result.getBlack());
		assertNotNull(result.getWhite());
	}
	
	@Test
	public void addProposalAndCheckResultFuncionalityTest() {
		SecretCombination secretCombination = new SecretCombination();
		ProposalCombination proposalCombination = new ProposalCombination();
		proposalCombination.combination.add(Color.RED);
		proposalCombination.combination.add(Color.BLUE);
		proposalCombination.combination.add(Color.GREEN);
		proposalCombination.combination.add(Color.ORANGE);
		Result result = secretCombination.getResult(proposalCombination);
		
		assertNotNull(result);
		assertNotEquals(result.getBlack(), 4);
		
		proposalCombination.combination = secretCombination.combination;
		Result result2 = secretCombination.getResult(proposalCombination);
		
		assertNotEquals(result, result2);
		assertEquals(result2.getBlack(), 4);
	}
}
