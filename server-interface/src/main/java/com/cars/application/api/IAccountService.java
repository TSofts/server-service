package com.cars.application.api;

import com.cars.application.model.account.AccountModel;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/account")
@Produces(MediaType.APPLICATION_JSON)
public interface IAccountService {
	
	@GET
	@Path("/all")
	List<AccountModel> getAccounts();

}
