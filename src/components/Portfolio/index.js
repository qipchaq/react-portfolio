import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import cryptoverse from '../../assets/images/cryptoverse.png'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    })

    return (
        <>
            <div className='container portfolio-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['M', 'y', '', 'w', 'o', 'r ', 'k']}
                            idx={15}
                        />
                    </h1>
                </div>
                <div className='portfolio__container'>
                    <figure class="portfolio__item">
                        <img src={cryptoverse} alt="sample38" />
                        <figcaption>
                            <h2>Cryptocurrency App <span>Cryptoverse</span></h2>
                            <p>Explore the World of Cryptocurrency</p>
                            <div class="portfolio__link">
                                <a href="https://react-app-cryptoverse.netlify.app/" target='_blank'>
                                    <FontAwesomeIcon icon={faLink} color='#fff' />
                                </a>
                                <a href="https://github.com/qipchaq/cryptoverse" target='_blank'>
                                    <FontAwesomeIcon icon={faGithubSquare} color='#fff' />
                                </a>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Portfolio