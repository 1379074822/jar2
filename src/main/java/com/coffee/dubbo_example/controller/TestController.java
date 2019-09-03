package com.coffee.dubbo_example.controller;

import com.coffee.dubbo_example.dao.ItemDao;
import com.coffee.dubbo_example.domain.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @description:
 * @author: Mr.Lian
 * @time: 2019/8/30 19:13
 */

@Controller
@RequestMapping("/test")
public class TestController {

    @Autowired
    private ItemDao itemDao;

    @RequestMapping("/test1")
    @ResponseBody
    public void test1(){
        System.out.println("111");
    }
    @RequestMapping("/test2")
    public String test2(){
        return "show1";
    }

    @RequestMapping("/mybaits")
    @ResponseBody
    public void test3(){
        List<Item> all = itemDao.findAll();
        System.out.println(all);
    }

}
