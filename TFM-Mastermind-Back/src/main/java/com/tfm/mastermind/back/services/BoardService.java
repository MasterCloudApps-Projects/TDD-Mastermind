package com.tfm.mastermind.back.services;

import org.springframework.stereotype.Service;

import com.tfm.mastermind.back.models.Board;
import com.tfm.mastermind.back.models.ProposalCombination;
import com.tfm.mastermind.back.utils.Color;

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
//		ProposalCombination combination = new ProposalCombination();
//		combination.combination.add(Color.getColor(proposalCombination[0]));
//		combination.combination.add(Color.getColor(proposalCombination[1]));
//		combination.combination.add(Color.getColor(proposalCombination[2]));
//		combination.combination.add(Color.getColor(proposalCombination[3]));
		this.board.addProposal(proposalCombination);
	}
}