import React from 'react'
import './App.css'
import profilePic from '../propic.jpg'

export default function About() {
    return (
        <div className='page' id='about'>
            <h2 className='section-title'>ABOUT ME</h2>
            <div className='photo-holder'>
                <img src={profilePic} alt='Profile Portrait' className='profile-picture'></img>
            </div>
            <div className='biography'>
                <p className='descript-text'>I am currently working for Benefit Coordinators Corporation as their
                Technical Solutions Specialist. I manage most of the automation along with 
                creating data pipelines for the rest of the company. It has been incredibly 
                fulfilling and a good confidence boost proving to myself I was able to 
                learn an entirely new tech stack and contribute to my team in a multitude 
                of ways!</p>
            </div>
            <h2 className='secondary-title'>HARD SKILLS</h2>
            <div className='skills-holder-hard'>
                <ul className='skill-list-hard'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>NoSQL</li>
                    <li>SQL</li>
                </ul>
                <ul className='skill-list-hard'>
                    <li>Python</li>
                    <li>MS VBA</li>
                    <li>MS Access</li>
                    <li>MS Excel</li>
                    <li>MS SQL Studio</li>
                </ul>
            </div>
            <h2 className='secondary-title'>SOFT SKILLS</h2>
            <div className='skills-holder-soft'>
                <ul className='skill-list-soft'>
                    <li>Communication</li>
                    <li>Problem Solving</li>
                    <li>Time Managment</li>
                    <li>Adaptable</li>
                </ul>
                <ul className='skill-list-soft'>
                    <li></li>
                    <li>Teamwork</li>
                    <li>Self Driven</li>
                    <li>Willing to learn</li>
                </ul>
            </div>
        </div>
    )
}