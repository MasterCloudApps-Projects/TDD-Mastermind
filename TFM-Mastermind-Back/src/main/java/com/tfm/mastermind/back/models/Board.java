package com.tfm.mastermind.back.models;

public class Board {

	private int actualIntent;
	private SecretCombination secretCombination;
	private ProposalCombination[] proposalCombinations;
	private Result[] results;
	
	public Board() {
		this.secretCombination = new SecretCombination();
		this.proposalCombinations = new ProposalCombination[10];
		this.results = new Result[10];
		this.actualIntent = 0;
	}
	
	public Result addProposal(ProposalCombination proposalCombinations) {
		this.proposalCombinations[actualIntent] = proposalCombinations;
		this.results[actualIntent] = new Result(1, 2);
		this.actualIntent++;
		return this.results[actualIntent-1];
	}
	
	public SecretCombination getSecretCombination() {
		return this.secretCombination;
	}
	
	public ProposalCombination getProposalCombination() {
		return this.proposalCombinations[actualIntent];
	}
	
	public ProposalCombination getProposalCombination(int i) {
		return this.proposalCombinations[i];
	}
	
	public int getActualIntent() {
		return this.actualIntent;
	}
	
	public Result getResult(){
		return this.results[actualIntent-1];
	}
}
