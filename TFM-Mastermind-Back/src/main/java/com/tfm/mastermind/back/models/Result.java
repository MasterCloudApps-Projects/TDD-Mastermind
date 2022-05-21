package com.tfm.mastermind.back.models;

public class Result {

	private int white;
	
	public Result(int white) {
		this.white = white;
	}
	
	public int getWhites() {
		return white;
	}

	public int getBlack() {
		return Integer.MIN_VALUE;
	}
}
