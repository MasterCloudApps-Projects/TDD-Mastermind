package com.tfm.mastermind.back.services;

import org.springframework.stereotype.Service;

import com.tfm.mastermind.back.models.Board;

@Service
public class BoardService {

	private Board board;
	
	public BoardService() {
		this.board = new Board();
	}
	
	public Board getBoard() {
		return this.board;
	}
}