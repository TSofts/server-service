package com.cars.application.api;

import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.cars.application.model.OrderModel;
import com.cars.application.model.ResponseModel;
import com.cars.application.model.RequestModel;
import com.cars.application.model.owner.OwnerModel;
import com.cars.application.model.owner.OwnerOrderParameter;
import com.cars.application.model.owner.OwnerParameter;
import com.cars.application.model.owner.OwnerRequestParameter;

@Path("/owner")
@Produces(MediaType.APPLICATION_JSON)
public interface IOwnerService {
	
	@Path("/requests")
	ResponseModel<RequestModel> getRequestList(OwnerRequestParameter ownerRequestParameter);
	
	@Path("/orders")
	ResponseModel<OrderModel> getOrderList(OwnerOrderParameter ownerOrderParameter);
	
	@Path("/owners")
	ResponseModel<OwnerModel> getOwnerList(OwnerParameter ownerParameter);

}
