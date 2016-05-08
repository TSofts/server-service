package com.cars.application.model;

public class ParameterModel<T> {

	private int page;

	private int count;

	private T params;

	public T getParams() {
		return params;
	}

	public void setParams(T params) {
		this.params = params;
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}
	
	
}
