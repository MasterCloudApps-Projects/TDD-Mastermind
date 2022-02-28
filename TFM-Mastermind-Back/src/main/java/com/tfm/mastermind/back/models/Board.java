package com.tfm.mastermind.back.models;

public class Board {

	private SecretCombination secretCombination;
	private ProposalCombination[] proposalCombinations;
	
	public Board() {
		this.secretCombination = new SecretCombination();
	}
	
	public SecretCombination getSecretCombination() {
		return this.secretCombination;
	}
	
	public ProposalCombination getProposalCombination() {
		return null;
	}
	
	public int getActualIntent() {
		return Integer.MIN_VALUE;
	}
}
