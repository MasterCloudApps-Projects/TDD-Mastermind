package com.tfm.mastermind.back.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.tfm.mastermind.back.models.Board;
import com.tfm.mastermind.back.models.ProposalCombination;
import com.tfm.mastermind.back.services.BoardService;

@RestController
@RequestMapping("/api/board")
public class BoardController {

	@Autowired
	private BoardService boardService;
	
	@GetMapping("/")
	public ResponseEntity<Board> getBoard() {
		return new ResponseEntity<>(this.boardService.getBoard(), HttpStatus.OK);
	}
	
	@PutMapping("/")
	@ResponseStatus(HttpStatus.OK)
	public ProposalCombination addProposalCombination(@RequestBody ProposalCombination proposalCombination) {
		this.boardService.addProposal(proposalCombination);
		return this.boardService.getBoard().getProposalCombination(this.boardService.getBoard().getActualIntent()-1);
	}
	
	public ProposalCombination getProposalCombination(int intent) {
		return this.boardService.getBoard().getProposalCombination(intent);
	}
	
	public int getActualIntent() {
		return Integer.MIN_VALUE;
	}
}
