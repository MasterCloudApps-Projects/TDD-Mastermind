package com.tfm.mastermind.back.models;

import java.util.List;
import java.util.Random;

import com.tfm.mastermind.back.utils.Color;

public class SecretCombination extends Combination{

	public SecretCombination() {
		Random random = new Random();
		do {
			int x = random.nextInt(Color.length());
			if (!this.combination.contains(Color.get(x))) {
				this.combination.add(Color.get(x));
			}
		} while (this.combination.size() < getMaxWidth());
	}
	
	public List<Color> getColors(){
		return this.combination;
	}
}
