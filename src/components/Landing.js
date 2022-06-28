import React, {useRef, useState} from 'react'
import './App.css'

export default function Landing() {

    const landingScreen = useRef()
    const [style, setStyle] = useState("landing")

    const fadeAway = setTimeout(() => {setStyle("landingFade")}, 2000)


    return (
        <div className='landing' id={style}>
            <div className='greenlanding'>
                <h1 className='tantitle'>Spencer</h1>
            </div>
            <div className='tanlanding'>
                <h1 className='greentitle'>Lake</h1>
            </div>
        </div>
    )
}