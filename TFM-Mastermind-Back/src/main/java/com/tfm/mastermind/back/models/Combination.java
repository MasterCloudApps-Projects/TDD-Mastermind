package com.tfm.mastermind.back.models;

import java.util.ArrayList;
import java.util.List;

import com.tfm.mastermind.back.utils.Color;


public class Combination {

	public List<Color> combination;
	
	public Combination() {
		this.combination = new ArrayList<Color>();
	}
	
	public List<Color> getColors(){
		return this.combination;
	}
	
}
