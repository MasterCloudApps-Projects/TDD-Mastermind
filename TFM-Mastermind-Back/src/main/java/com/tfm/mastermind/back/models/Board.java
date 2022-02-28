package com.tfm.mastermind.back.models;

public class Board {

	private int actualIntent;
	private SecretCombination secretCombination;
	private ProposalCombination[] proposalCombinations;
	
	public Board() {
		this.secretCombination = new SecretCombination();
		this.proposalCombinations = new ProposalCombination[10];
		this.actualIntent = 0;
	}
	
	public void addProposal(ProposalCombination proposalCombinations) {
		this.proposalCombinations[actualIntent] = proposalCombinations;
	}
	
	public SecretCombination getSecretCombination() {
		return this.secretCombination;
	}
	
	public ProposalCombination getProposalCombination() {
		return this.proposalCombinations[actualIntent];
	}
	
	public int getActualIntent() {
		return this.actualIntent;
	}
}
