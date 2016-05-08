package com.cars.application.api;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.cars.application.model.ParameterModel;
import com.cars.application.model.ResponseModel;
import com.cars.application.model.operator.OperatorModel;

import java.util.List;

@Path("/operators")
@Produces(MediaType.APPLICATION_JSON)
public interface IOperatorService {
	

	@POST
	@Path("/all")
	ResponseModel<List<OperatorModel>> getOperatorList(ParameterModel<OperatorModel> operatorParameter);


	@POST
	@Path("/post")
	ResponseModel<Object> postOperator(ParameterModel<OperatorModel> operatorParameter);

}
