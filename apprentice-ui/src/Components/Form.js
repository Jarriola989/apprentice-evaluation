import React, { Component } from 'react';
import '../App.css';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);      //email validation
const urlRegex = RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);   //url validation
const formValid = errorMessages => {
    let valid = true;
    Object.values(errorMessages).forEach(val => {
        if(val.length > 1){
            valid = false;
        }
    });
    return valid;
};


class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            fullName: "",
            email: "",
            projectRepo: "",
            projectUrl: "",
            bestPracticeOop: 0,
            modularDev: 0,
            fullStack: 0,
            testing: 0,
            database: 0,
            debugging: 0,
            problemSolving: 0,
            javascript: 0,
            html: 0,
            css: 0,
            teamwork: 0,
            selfMotivation: 0,
            communication: 0,
            energy: 0,
            intelligenceAptitude: 0,
            totalPoints: 50,
            errorMessages:{
                full_name: "",
                email: "",
                url: "",
                points: ""
            }
        };
    }
    
    handleChange = (e) => {
        var points = 50;
        this.setState({
            [e.target.id]: e.target.value,
        }, () => this.setState({
            totalPoints: points
                -this.state.bestPracticeOop
                -this.state.modularDev
                -this.state.fullStack
                -this.state.testing
                -this.state.database
                -this.state.debugging
                -this.state.problemSolving
                -this.state.javascript
                -this.state.html
                -this.state.css
                -this.state.teamwork
                -this.state.selfMotivation
                -this.state.communication
                -this.state.energy
                -this.state.intelligenceAptitude
        }, () => console.log(this.state)))
        
        const {id, value} = e.target;
        let errorMessages = this.state.errorMessages;

        switch(id){
            case 'fullName':
                errorMessages.full_name = value.length < 2 
                ? 'Enter your full name.' 
                : '';
                break;
            case 'email':
                errorMessages.email = emailRegex.test(value)
                ? ''
                : 'Enter a valid email.';
                break;
            case 'url':
                errorMessages.url = urlRegex.test(value)
                ? ''
                : 'Enter a valid url.';
                break;
            default:
                break;
        }
        this.setState({errorMessages: errorMessages})    
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const url = "http://localhost:8080/";
        const {fullName,
        email,
        projectRepo,
        projectUrl,
        bestPracticeOop,
        modularDev,
        fullStack,
        testing,
        database,
        debugging,
        problemSolving,
        javascript,
        html,
        css,
        teamwork,
        selfMotivation,
        communication,
        energy,
        intelligenceAptitude} = this.state;

        fetch(url,{
            method: 'post',
            body: JSON.stringify({
            fullName: fullName,
            email: email,
            projectRepo: projectRepo,
            projectUrl: projectUrl,
            bestPracticeOop: bestPracticeOop,
            modularDev: modularDev,
            fullStack: fullStack,
            testing: testing,
            database: database,
            debugging: debugging,
            problemSolving: problemSolving,
            javascript: javascript,
            html: html,
            css: css,
            teamwork: teamwork,
            selfMotivation: selfMotivation,
            communication: communication,
            energy: energy,
            intelligenceAptitude: intelligenceAptitude
            }),headers: { "Content-Type": "application/json; charset=UTF-8" }
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="form-box">
                
                    <input id="fullName" type="text" placeholder="FULL NAME" className="input-box" onChange={this.handleChange} />
                    <div className="error">{this.state.errorMessages.full_name}</div>

                    <input id="email" type="email" placeholder="EMAIL" className="input-box" onChange={this.handleChange} />
                    <div className="error">{this.state.errorMessages.email}</div>

                    <input id="projectRepo" type="text" placeholder="PROJECT REPO" className="input-box" onChange={this.handleChange} />
                    <input id="projectUrl" type="text" placeholder="PROJECT URL" className="input-box" onChange={this.handleChange} />
                    <div className="error">{this.state.errorMessages.url}</div>

                    <div className="traits">
                        <label>USING BEST PRACTICES FOR OOP:</label>
                        <input id="bestPracticeOop" type="number" className="trait-box" onChange={this.handleChange} />
                    </div>
                    <div className="traits">
                        <label>MODULAR DEVELOPMENT:</label>
                        <input id="modularDev" type="number" className="trait-box" onChange={this.handleChange} />
                    </div>
                    <div className="traits">
                        <label>FULL-STACK WORKFLOW UNDERSTANDING:</label>
                        <input id="fullStack" type="number" className="trait-box" onChange={this.handleChange} />
                    </div>
                    <div className="traits">
                        <label>TESTING:</label>
                        <input id="testing" type="number" className="trait-box" onChange={this.handleChange} />
                    </div>
                    <div className="traits">
                        <label>DATABASE KNOWLEDGE:</label>
                        <input id="database" type="number" className="trait-box" onChange={this.handleChange} />
                    </div>
                    <div className="traits">
                        <label>DEBUGGING:</label>
                        <input id="debugging" type="number" className="trait-box" onChange={this.handleChange} />
                    </div>
                    <div className="traits">
                        <label>PROBLEM SOLVING SKILLS:</label>
                        <input id="problemSolving" type="number" className="trait-box" onChange={this.handleChange} />
                    </div>
                    <div className="traits">
                        <label>JAVASCRIPT:</label>
                        <input id="javascript" type="number" className="trait-box" onChange={this.handleChange} />
                    </div>
                    <div className="traits">
                        <label>HTML:</label>
                        <input id="html" type="number" className="trait-box" onChange={this.handleChange} />
                    </div>
                    <div className="traits">
                        <label>CSS:</label>
                        <input id="css" type="number" className="trait-box" onChange={this.handleChange} />
                    </div>
                    <div className="traits">
                        <label>WORKING ON A TEAM:</label>
                        <input id="teamwork" type="number" className="trait-box" onChange={this.handleChange} />
                    </div>
                    <div className="traits">
                        <label>SELF MOTIVATION:</label>
                        <input id="selfMotivation" type="number" className="trait-box" onChange={this.handleChange} />
                    </div>
                    <div className="traits">
                        <label>COMMUNICATION SKILLS:</label>
                        <input id="communication" type="number" className="trait-box" onChange={this.handleChange} />
                    </div>
                    <div className="traits">
                        <label>YOUR OWN ENERGY LEVEL:</label>
                        <input id="energy" type="number" className="trait-box" onChange={this.handleChange} />
                    </div>
                    <div className="traits">
                        <label>INTELLIGENCE / APTITUDE:</label>
                        <input id="intelligenceAptitude" type="number" className="trait-box" onChange={this.handleChange} />
                    </div>
                    {this.state.totalPoints < 0
                    ? "You don't have any points left! (" + this.state.totalPoints +")" : "" }
                    {this.state.totalPoints > 0
                    ? "You have " + this.state.totalPoints + " points left."
                    : ""}
                    <button type="submit" className="submit-btn">SUBMIT</button>
                
            </form>
        );
    }
}

export default Form;