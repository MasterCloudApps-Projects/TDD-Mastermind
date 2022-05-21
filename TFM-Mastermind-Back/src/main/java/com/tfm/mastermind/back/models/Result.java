package com.tfm.mastermind.back.models;

public class Result {

	private int white;
	private int black;
	
	public Result(int white) {
		this.white = white;
		this.black = 0;
	}
	
	public int getWhites() {
		return white;
	}

	public int getBlack() {
		return black;
	}
}
