package com.cars.application.account.dao;

import com.cars.application.model.account.AccountModel;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Favors on 4/17/2016.
 */
@Repository
public interface AccountDao {

    List<AccountModel> getAccounts();
}
