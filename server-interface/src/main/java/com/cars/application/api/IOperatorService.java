package com.cars.application.api;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.cars.application.model.ResponseModel;
import com.cars.application.model.operator.OperatorModel;
import com.cars.application.model.operator.OperatorParameter;

@Path("/operators")
@Produces(MediaType.APPLICATION_JSON)
public interface IOperatorService {
	

	@POST
	@Path("/all")
	ResponseModel<OperatorModel> getOperatorList(OperatorParameter operatorParameter);
	
	@POST
	@Path("/operators/order")
	ResponseModel<Object> orderOperator(OperatorParameter operatorParameter);

}
