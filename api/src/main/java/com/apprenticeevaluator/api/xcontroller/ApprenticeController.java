package com.apprenticeevaluator.api.xcontroller;

import com.apprenticeevaluator.api.model.Apprentice;
import com.apprenticeevaluator.api.service.ApprenticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/apprentices")
public class ApprenticeController {
    ApprenticeService apprenticeService;

    @Autowired
    public ApprenticeController(ApprenticeService apprenticeService){
        this.apprenticeService = apprenticeService;
    }

    @PostMapping
    public void createApprentice(@RequestBody Apprentice apprentice){
        apprenticeService.createApprentice(apprentice);
    }

    @GetMapping
    public List<Apprentice> getAllApprentices(){
        return apprenticeService.getAllApprentices();
    }

    @GetMapping("/{id}")
    public Optional<Apprentice> findApprenticeById(@PathVariable Integer id){
        return apprenticeService.findApprenticeById(id);
    }
}
