package com.tfm.mastermind.back.utils;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class ColorTest {

	@Test
	public void getNullColorTest() {
		Color color = Color.get(Color.NULL_COLOR.ordinal());
		assertEquals(color, Color.NULL_COLOR);
	}
	
	@Test
	public void getEspecificColorTest() {
		Color color = Color.get(Color.GREEN.ordinal());
		assertEquals(color, Color.GREEN);
	}
	
	@Test
	public void getColorLenghtWrongValueTest() {
		assertEquals(Color.length(), Integer.MIN_VALUE);
	}
}
