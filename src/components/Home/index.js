import './index.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import LogoTitle from '../../assets/images/logo-a.svg'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['d', 'i', 'l']
    const jobArray = ['f', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    })

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        {/* <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt='web-dev'></img> */}
                        {/* <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    /> */}
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={18}
                        />
                    </h1>
                    <Link to='/contact' className='flat-button'>Contact Me</Link>
                </div>
                <Logo />
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Home