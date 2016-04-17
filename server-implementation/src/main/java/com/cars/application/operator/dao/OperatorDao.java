package com.cars.application.operator.dao;

import com.cars.application.model.operator.OperatorModel;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Favors on 4/17/2016.
 */
@Repository
public interface OperatorDao {

    List<OperatorModel> getOperators();
}
