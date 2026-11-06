package com.nexora;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NexoraSpringBootApplication {

    public static void main(String[] args) {
        SpringApplication.run(NexoraSpringBootApplication.class, args);
        System.out.println("=================================================");
        System.out.println("  NEXORA 3.0 Spring Boot Backend is RUNNING!     ");
        System.out.println("  Port: 8085                                     ");
        System.out.println("  Health: http://localhost:8085/api/health       ");
        System.out.println("  Portals: School, College, and Fresher Ready    ");
        System.out.println("=================================================");
    }
}

