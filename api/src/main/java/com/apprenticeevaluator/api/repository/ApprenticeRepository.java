package com.apprenticeevaluator.api.repository;

import com.apprenticeevaluator.api.model.Apprentice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApprenticeRepository extends JpaRepository<Apprentice, Integer> {
}
