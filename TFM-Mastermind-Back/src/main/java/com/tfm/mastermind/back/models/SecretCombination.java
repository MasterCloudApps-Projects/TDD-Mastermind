package com.tfm.mastermind.back.models;

import java.util.List;

import com.tfm.mastermind.back.utils.Color;

public class SecretCombination extends Combination{

	public List<Color> getColors(){
		return this.combination;
	}
}
