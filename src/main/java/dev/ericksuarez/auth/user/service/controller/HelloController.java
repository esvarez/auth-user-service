package dev.ericksuarez.auth.user.service.controller;

import dev.ericksuarez.auth.user.service.service.Xyz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @Autowired
    private Xyz xyz;

    @GetMapping("/")
    public String index(){
        return "Index page";
    }

    @GetMapping("/hello")
    public String hello(){
        //return "hello";
        return xyz.satHello();
    }
}
