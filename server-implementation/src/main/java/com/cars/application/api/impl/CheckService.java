package com.cars.application.api.impl;

import org.springframework.stereotype.Component;

import com.cars.application.api.ICheckService;

@Component
public class CheckService implements ICheckService {

	public String getStatus() {
		// TODO Auto-generated method stub
		return "SUCCESS";
	}

}
