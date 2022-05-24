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
	
	public Result getResult(ProposalCombination proposalCombination) {
		int blacks = 0;
		for (int i = 0; i < this.combination.size(); i++) {
			if (proposalCombination.combination.get(i) == this.combination.get(i)) {
				blacks++;
			}
		}
		int whites = 0;
		for (Color color : this.combination) {
			if (proposalCombination.combination.contains(color)) {
				whites++;
			}
		}
		return new Result(whites - blacks, blacks);
	}
}
