package com.tfm.mastermind.back.models;

public class Result {

	private int white;
	private int black;
	
	public Result(int white, int black) {
		this.white = white;
		this.black = black;
	}
	
	public int getWhites() {
		return white;
	}

	public int getBlack() {
		return black;
	}
	
	public boolean isWinner() {
		return false;
	}
}
