package com.cars.application.model.operator;

import java.util.List;

public class OperatorModel {

	private String name;

	private Long id;

	private List<String> skills;

	private Long rating;

	private List<String> car;

	private String show;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getShow() {
		return show;
	}

	public void setShow(String show) {
		this.show = show;
	}

	public List<String> getCar() {
		return car;
	}

	public void setCar(List<String> car) {
		this.car = car;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<String> getSkills() {
		return skills;
	}

	public void setSkills(List<String> skills) {
		this.skills = skills;
	}


	public Long getRating() {
		return rating;
	}

	public void setRating(Long rating) {
		this.rating = rating;
	}
}
