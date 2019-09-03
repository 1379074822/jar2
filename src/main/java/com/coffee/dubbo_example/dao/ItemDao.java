package com.coffee.dubbo_example.dao;

import com.coffee.dubbo_example.domain.Item;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @description:
 * @author: Mr.Lian
 * @time: 2019/8/31 8:21
 */

@Mapper
@Repository
public interface ItemDao {

    public List<Item> findAll();
}
