package com.tfm.mastermind.back.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.tfm.mastermind.back.models.Board;
import com.tfm.mastermind.back.models.ProposalCombination;

@Service
public class BoardService {

	private Board board;
	
	public BoardService() {
		this.board = new Board();
	}
	
	public Board getBoard() {
		return this.board;
	}
	
	public void addProposal(ProposalCombination proposalCombination) {
		this.board.addProposal(proposalCombination);
	}
	
	public Map<String, Integer> getResult(){
		Map<String, Integer> result =  new HashMap<>();
		result.put("black", 2);
		result.put("white", 2);
		return result;
	}
}