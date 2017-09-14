package com.kp.swasthik.rest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class KPRest {

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(path = "/rest/sayhello")
	public String sayHello(@RequestParam(name = "name") String name) {
		return "Hello " + name + " spring boot";
	}
}
