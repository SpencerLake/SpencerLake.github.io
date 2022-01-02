import React from 'react'
import './App.css'
import profilePic from '../propic.jpg'

export default function About() {
    return (
        <div className='page'>
            <h2 className='section-title'>ABOUT ME</h2>
            <div className='photo-holder'>
                <img src={profilePic} alt='Profile Portrait' className='profile-picture'></img>
            </div>
            <div className='biography'>
                <p className='descript-text'>For the duration on my working career I've been a 
                    Jack-Of-All-Trades, ranging from salesman to caregiver to laborer.
                     Recently I stumbled upon the world of coding and instantly
                      fell in love! I am a Web Developer and graduated from
                       DevMountain.</p>
            </div>
            <h2 className='secondary-title'>HARD SKILLS</h2>
            <div className='skills-holder-hard'>
                <ul className='skill-list-hard'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>NodeJs</li>
                    <li>Express</li>
                </ul>
                <ul className='skill-list-hard'>
                    <li>Axios</li>
                    <li>NoSQL</li>
                    <li>SQL</li>
                    <li>Github</li>
                    <li>Firebase</li>
                    <li>Horoku</li>
                </ul>
            </div>
            <h2 className='secondary-title'>SOFT SKILLS</h2>
            <div className='skills-holder-soft'>
                <ul className='skill-list-soft'>
                    <li>Communication</li>
                    <li>Teamwork</li>
                    <li>Self-Driven</li>
                    <li>Wlling to learn</li>
                </ul>
            </div>
        </div>
    )
}