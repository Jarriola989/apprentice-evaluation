import React, { Component } from 'react';
import '../App.css';

class Form extends Component{
    render(){
        return(
            <div className="form-box">
                
                    <input id="fullName" type="text" placeholder="FULL NAME" className="input-box"/>
                    <input id="fullName" type="text" placeholder="EMAIL" className="input-box"/>
                    <input id="fullName" type="text" placeholder="PROJECT REPO" className="input-box"/>
                    <input id="fullName" type="text" placeholder="PROJECT URL" className="input-box"/>
                    <div className="traits">
                        <label>USING BEST PRACTICES FOR OOP:</label>
                        <input id="bestPracticeOop" type="number" className="trait-box"/>
                    </div>
                    <div className="traits">
                        <label>MODULAR DEVELOPMENT:</label>
                        <input id="modularDev" type="number" className="trait-box"/>
                    </div>
                    <div className="traits">
                        <label>FULL-STACK WORKFLOW UNDERSTANDING:</label>
                        <input id="fullStack" type="number" className="trait-box"/>
                    </div>
                    <div className="traits">
                        <label>TESTING:</label>
                        <input id="testing" type="number" className="trait-box"/>
                    </div>
                    <div className="traits">
                        <label>DATABASE KNOWLEDGE:</label>
                        <input id="database" type="number" className="trait-box"/>
                    </div>
                    <div className="traits">
                        <label>DEBUGGING:</label>
                        <input id="debugging" type="number" className="trait-box"/>
                    </div>
                    <div className="traits">
                        <label>PROBLEM SOLVING SKILLS:</label>
                        <input id="problemSolving" type="number" className="trait-box"/>
                    </div>
                    <div className="traits">
                        <label>JAVASCRIPT:</label>
                        <input id="javascript" type="number" className="trait-box"/>
                    </div>
                    <div className="traits">
                        <label>HTML:</label>
                        <input id="html" type="number" className="trait-box"/>
                    </div>
                    <div className="traits">
                        <label>CSS:</label>
                        <input id="css" type="number" className="trait-box"/>
                    </div>
                    <div className="traits">
                        <label>WORKING ON A TEAM:</label>
                        <input id="teamwork" type="number" className="trait-box"/>
                    </div>
                    <div className="traits">
                        <label>SELF MOTIVATION:</label>
                        <input id="htselfMotivationnl" type="number" className="trait-box"/>
                    </div>
                    <div className="traits">
                        <label>COMMUNICATION SKILLS:</label>
                        <input id="communication" type="number" className="trait-box"/>
                    </div>
                    <div className="traits">
                        <label>YOUR OWN ENERGY LEVEL:</label>
                        <input id="energy" type="number" className="trait-box"/>
                    </div>
                    <div className="traits">
                        <label>INTELLIGENCE / APTITUDE:</label>
                        <input id="intelligenceAptitude" type="number" className="trait-box"/>
                    </div>
                    <button className="submit-btn">SUBMIT</button>
                
            </div>
        );
    }
}

export default Form;