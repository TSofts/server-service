package com.cars.application.model.operator;

import java.util.List;

public class OperatorModel {

	private List<String> skills;

	private List<Integer> cat_type;

	private Long rating;

	public List<String> getSkills() {
		return skills;
	}

	public void setSkills(List<String> skills) {
		this.skills = skills;
	}

	public List<Integer> getCat_type() {
		return cat_type;
	}

	public void setCat_type(List<Integer> cat_type) {
		this.cat_type = cat_type;
	}

	public Long getRating() {
		return rating;
	}

	public void setRating(Long rating) {
		this.rating = rating;
	}
}
