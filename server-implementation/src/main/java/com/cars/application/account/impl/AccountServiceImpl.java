package com.cars.application.account.impl;

import com.cars.application.account.dao.AccountDao;
import com.cars.application.api.IAccountService;
import com.cars.application.model.account.AccountModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Favors on 4/17/2016.
 */
@Service
public class AccountServiceImpl implements IAccountService {

    @Autowired
    private AccountDao accountDao;


    public List<AccountModel> getAccounts() {
        return accountDao.getAccounts();
    }
}
