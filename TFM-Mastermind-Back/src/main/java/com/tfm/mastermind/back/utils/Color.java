package com.tfm.mastermind.back.utils;

public enum Color {

	RED, 
	BLUE, 
	YELLOW, 
	GREEN, 
	ORANGE,
	PURPLE,
	NULL_COLOR;
	
	public static Color get(int index){
		return Color.values()[index];
	}
	
	public static Color getColor() {
		return Color.NULL_COLOR;
	}

	public static int length() {
		return Color.values().length-1;
	}
	
}
