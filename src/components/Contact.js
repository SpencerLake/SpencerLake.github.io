import React from 'react'
import { SocialIcon } from 'react-social-icons'
import './App.css'

export default function Contact() {
    return(
        <div className='contact-page'>
            <div className='contact-links'>
                <SocialIcon target="_blank" url="https://github.com/SpencerLake" />
                <SocialIcon target="_blank" url="https://www.linkedin.com/in/spencer-lake" />
            </div>
        </div>
    )
}