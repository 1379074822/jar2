package com.coffee.dubbo_example.config;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

/**
 * @description:
 * @author: Mr.Lian
 * @time: 2019/9/3 16:41
 */
//@Configuration
public class AutoStartProjectInDefaultBrowser implements CommandLineRunner {
    @Value("${server.port}")
    private String port;

    @Override
    public void run(String... args) throws Exception {
        try {
            Runtime.getRuntime().exec("cmd /c start http://localhost:" + port+"/show.html");
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
}


