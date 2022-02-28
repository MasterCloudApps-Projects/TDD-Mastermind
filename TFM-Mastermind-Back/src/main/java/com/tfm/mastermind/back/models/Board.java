package com.tfm.mastermind.back.models;

public class Board {

	private int actualIntent;
	private SecretCombination secretCombination;
	private ProposalCombination[] proposalCombinations;
	
	public Board() {
		this.secretCombination = new SecretCombination();
		this.actualIntent = 0;
	}
	
	public SecretCombination getSecretCombination() {
		return this.secretCombination;
	}
	
	public ProposalCombination getProposalCombination() {
		return null;
	}
	
	public int getActualIntent() {
		return this.actualIntent;
	}
}
