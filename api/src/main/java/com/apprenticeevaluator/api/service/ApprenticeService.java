package com.apprenticeevaluator.api.service;

import com.apprenticeevaluator.api.model.Apprentice;
import com.apprenticeevaluator.api.repository.ApprenticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApprenticeService {
    @Autowired
    ApprenticeRepository apprenticeRepository;

    public void createApprentice(Apprentice apprentice){
        apprenticeRepository.save(apprentice);
    }

    public List<Apprentice> getAllApprentices(){
        return apprenticeRepository.findAll();
    }

    public Optional<Apprentice> findApprenticeById(Integer id){
        return apprenticeRepository.findById(id);
    }
}
