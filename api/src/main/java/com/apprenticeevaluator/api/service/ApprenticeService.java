package com.apprenticeevaluator.api.service;

import com.apprenticeevaluator.api.model.Apprentice;
import com.apprenticeevaluator.api.repository.ApprenticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApprenticeService {
    @Autowired
    ApprenticeRepository apprenticeRepository;

    @Autowired
    private JavaMailSender javaMailSender;

//    @Autowired
//    public void NotificationService(JavaMailSender javaMailSender){
//        this.javaMailSender=javaMailSender;
//    }

    public void createApprentice(Apprentice apprentice){

        apprenticeRepository.save(apprentice);
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo("apprentice.do.not.reply@gmail.com",apprentice.getEmail());
        msg.setSubject("New Apprentice: " + apprentice.getFullName());
        msg.setText("Hello Tim,\n\nA new apprentice has registered.\n\n" +
                "Apprentice " + apprentice.getFullName() + " has the following profile:\n" +
                "\nEmail: " + apprentice.getEmail() +
                "\nProject Repo: " + apprentice.getProjectRepo() +
                "\nProject URL: " + apprentice.getProjectUrl() +
                "\n\nBelow is candidate's self rating:" +
                "\n\nUsing best practices for OOP: " + apprentice.getBestPracticeOop() +
                "\nModular development: " + apprentice.getModularDev() +
                "\nFull-stack workflow understanding: " + apprentice.getFullStack() +
                "\nTesting: " + apprentice.getTesting() +
                "\nDatabase knowledge: " + apprentice.getDatabase() +
                "\nDebugging: " + apprentice.getDebugging() +
                "\nProblem solving skills: " + apprentice.getProblemSolving() +
                "\nJavascript: " + apprentice.getJavascript() +
                "\nHTML: " + apprentice.getHtml() +
                "\nCSS: " + apprentice.getCss() +
                "\nWorking on a team: " + apprentice.getTeamwork() +
                "\nSelf motivation: " + apprentice.getSelfMotivation() +
                "\nCommunications skills: " + apprentice.getCommunication() +
                "\nYour own energy level: " + apprentice.getEnergy() +
                "\nIntelligence / Aptitude: " + apprentice.getIntelligenceAptitude() +
                "\n\nPlease consider this candidate. Have an amazing day!" +
                        "\n\n-Apprentice Evaluator©");
        javaMailSender.send(msg);
    }

    public List<Apprentice> getAllApprentices(){
        return apprenticeRepository.findAll();
    }

    public Optional<Apprentice> findApprenticeById(Integer id){
        return apprenticeRepository.findById(id);
    }
}
