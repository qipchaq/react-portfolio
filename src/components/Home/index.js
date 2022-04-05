import './index.scss'
import LogoTitle from '../../assets/images/logo-a.png'
import { Link } from 'react-router-dom'

import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['d', 'i', 'l']
    const jobArray = ['f', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    Hi, <br />I'm
                    <img src={LogoTitle} alt='web-dev'></img>
                    <AnimatedLetters props={letterClass, nameArray, jobArray} />
                    <br />
                    Frontend web developer
                    <Link to='/contact' className='flat-button'>Contact Me</Link>
                </h1>
            </div>
        </div>
    )
}

export default Home