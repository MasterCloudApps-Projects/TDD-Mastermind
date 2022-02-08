package com.tfm.mastermind.back.services;

import com.tfm.mastermind.back.models.Board;

public class BoardService {

	private Board board;
	
	public BoardService() {
		this.board = new Board();
	}
	
	public Board getBoard() {
		return this.board;
	}
}