package com.cars.application.api;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/check")
@Produces(MediaType.APPLICATION_JSON)
public interface ICheckService {
	
	@GET
	@Path("/status")
	public String getStatus();

}
