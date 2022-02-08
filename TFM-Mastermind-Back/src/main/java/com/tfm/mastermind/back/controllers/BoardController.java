package com.tfm.mastermind.back.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tfm.mastermind.back.models.Board;
import com.tfm.mastermind.back.services.BoardService;

@Controller
@RequestMapping("/api/board")
public class BoardController {

	@Autowired
	private BoardService boardService;
	
	@GetMapping("/")
	public ResponseEntity<Board> getBoard() {
		return new ResponseEntity<>(this.boardService.getBoard(), HttpStatus.OK);
	}
}
