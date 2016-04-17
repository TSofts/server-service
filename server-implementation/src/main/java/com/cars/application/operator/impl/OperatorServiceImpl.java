package com.cars.application.operator.impl;

import com.cars.application.api.IOperatorService;
import com.cars.application.model.ResponseModel;
import com.cars.application.model.operator.OperatorModel;
import com.cars.application.model.operator.OperatorParameter;
import com.cars.application.operator.dao.OperatorDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Favors on 4/17/2016.
 */
@Service
public class OperatorServiceImpl implements IOperatorService {

    @Autowired
    private OperatorDao operatorDao;

    public ResponseModel<OperatorModel> getOperatorList(OperatorParameter operatorParameter) {
        ResponseModel<OperatorModel> responseModel = new ResponseModel<OperatorModel>();
        responseModel.setData(operatorDao.getOperators());
        return responseModel;
    }

    public ResponseModel<Object> orderOperator(OperatorParameter operatorParameter) {
        return null;
    }
}
