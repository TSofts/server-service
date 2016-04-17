package com.cars.util.mybatis.handler;

import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;
import org.apache.log4j.Logger;

import java.sql.*;
import java.util.Arrays;
import java.util.List;

/**
 * Created by shawn on 15-5-13.
 */
public class StringArrayTypeHandler extends BaseTypeHandler<List<String>> {

    private static Logger logger = Logger.getLogger(StringArrayTypeHandler.class);

    @Override
    public List<String> getNullableResult(ResultSet rs, String columnName)
            throws SQLException {
        return getStringArray(rs.getString(columnName));
    }

    @Override
    public List<String> getNullableResult(ResultSet rs, int columnIndex)
            throws SQLException {
        return this.getStringArray(rs.getString(columnIndex));
    }

    @Override
    public List<String> getNullableResult(CallableStatement cs, int columnIndex)
            throws SQLException {
        return this.getStringArray(cs.getString(columnIndex));
    }

    @Override
    public void setNonNullParameter(PreparedStatement ps, int i,
                                    List<String> parameter, JdbcType jdbcType) throws SQLException {

    }

    private List<String> getStringArray(String columnValue) {
        if (columnValue == null)
            return null;
        return Arrays.asList(columnValue.substring(1,columnValue.length()-1).split(","));
    }


}