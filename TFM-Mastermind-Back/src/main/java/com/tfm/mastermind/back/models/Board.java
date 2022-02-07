package com.tfm.mastermind.back.models;

public class Board {

	private SecretCombination secretCombination;
	
	public Board() {
		this.secretCombination = new SecretCombination();
	}
	
	public SecretCombination getSecretCombination() {
		return this.secretCombination;
	}
}
