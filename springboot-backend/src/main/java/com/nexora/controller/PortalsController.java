package com.nexora.controller;

import com.nexora.service.PortalDataService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/portals")
public class PortalsController {

    private final PortalDataService portalDataService;

    public PortalsController(PortalDataService portalDataService) {
        this.portalDataService = portalDataService;
    }

    @GetMapping("/student")
    public ResponseEntity<Map<String, Object>> getStudentPortal() {
        return ResponseEntity.ok(portalDataService.getStudentPortalData());
    }

    @GetMapping("/college")
    public ResponseEntity<Map<String, Object>> getCollegePortal() {
        return ResponseEntity.ok(portalDataService.getCollegePortalData());
    }

    @GetMapping("/fresher")
    public ResponseEntity<Map<String, Object>> getFresherPortal() {
        return ResponseEntity.ok(portalDataService.getFresherPortalData());
    }
}

