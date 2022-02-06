package com.tfm.mastermind.back.utils;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class ColorTest {

	@Test
	public void getNullColorTest() {
		Color color = Color.get();
		assertEquals(color, Color.NULL_COLOR);
	}
}
