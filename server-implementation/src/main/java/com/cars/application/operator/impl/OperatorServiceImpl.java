package com.cars.application.operator.impl;

import com.cars.application.api.IOperatorService;
import com.cars.application.model.ParameterModel;
import com.cars.application.model.ResponseModel;
import com.cars.application.model.operator.OperatorModel;
import com.cars.application.operator.dao.OperatorDao;
import com.cars.util.constant.ResultCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Favors on 4/17/2016.
 */
@Service
public class OperatorServiceImpl implements IOperatorService {

    @Autowired
    private OperatorDao operatorDao;

    @Override
    public ResponseModel<List<OperatorModel>> getOperatorList(ParameterModel<OperatorModel> operatorParameter) {
        ResponseModel<List<OperatorModel>> responseModel = new ResponseModel<>(ResultCode.SUCCESS);
        responseModel.setData(operatorDao.getOperators());
        return responseModel;
    }

    @Override
    public ResponseModel<java.lang.Object> postOperator(ParameterModel<OperatorModel> operatorParameter) {
        OperatorModel operator = operatorParameter.getParams();
        operatorDao.postOperator(operator);
        return new ResponseModel<java.lang.Object>(ResultCode.SUCCESS);
    }
}
