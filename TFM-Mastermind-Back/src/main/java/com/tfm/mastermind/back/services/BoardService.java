package com.tfm.mastermind.back.services;

import org.springframework.stereotype.Service;

import com.tfm.mastermind.back.models.Board;
import com.tfm.mastermind.back.models.ProposalCombination;
import com.tfm.mastermind.back.models.Result;

@Service
public class BoardService {

	private Board board;
	
	public BoardService() {
		this.board = new Board();
	}
	
	public Board getBoard() {
		return this.board;
	}
	
	public Result addProposal(ProposalCombination proposalCombination) {
		this.board.addProposal(proposalCombination);
		return new Result(1, 2);
	}
	
	public Result getResult(){
		return new Result(1, 2);
	}
}