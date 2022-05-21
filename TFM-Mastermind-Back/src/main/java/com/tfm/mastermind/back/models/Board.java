package com.tfm.mastermind.back.models;

import java.util.HashMap;
import java.util.Map;

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
		this.actualIntent++;
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
	
	public Map<String, Integer> getResult(){
		return new HashMap<>();
	}
}
