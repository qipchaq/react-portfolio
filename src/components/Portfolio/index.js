import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { cryptoverse, traveladviser, zoo, realestate, openAi } from '../../assets/images/index'

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
                    <figure className="portfolio__item">
                        <img src={realestate} alt="portfolio" />
                        <figcaption>
                            <h2>Real Estate App <span>Realtor</span></h2>
                            <p>To explore Real Estate click the link below</p>
                            <div className="portfolio__link">
                                <a href="https://real-estate-swart.vercel.app/" target='_blank'>
                                    <FontAwesomeIcon icon={faLink} size="lg" color='#ffd700' />
                                </a>
                                <a href="https://github.com/qipchaq/real-estate" target='_blank'>
                                    <FontAwesomeIcon icon={faGithubSquare} size="lg" color='#ffd700' />
                                </a>
                            </div>
                        </figcaption>
                    </figure>

                    <figure className="portfolio__item">
                        <img src={openAi} alt="portfolio" />
                        <figcaption>
                            <h2>GPT-3 OpenAI Website <span>GPT-3</span></h2>
                            <p>To explore the World of OpenAI click the link below</p>
                            <div className="portfolio__link">
                                <a href="https://master--bejewelled-taiyaki-4065bf.netlify.app/" target='_blank'>
                                    <FontAwesomeIcon icon={faLink} size="lg" color='#ffd700' />
                                </a>
                                <a href="https://github.com/qipchaq/open-ai" target='_blank'>
                                    <FontAwesomeIcon icon={faGithubSquare} size="lg" color='#ffd700' />
                                </a>
                            </div>
                        </figcaption>
                    </figure>

                    <figure className="portfolio__item">
                        <img src={cryptoverse} alt="portfolio" />
                        <figcaption>
                            <h2>Cryptocurrency App <span>Cryptoverse</span></h2>
                            <p>To explore the World of Cryptocurrency click the link below</p>
                            <div className="portfolio__link">
                                <a href="https://react-app-cryptoverse.netlify.app/" target='_blank'>
                                    <FontAwesomeIcon icon={faLink} size="lg" color='#ffd700' />
                                </a>
                                <a href="https://github.com/qipchaq/cryptoverse" target='_blank'>
                                    <FontAwesomeIcon icon={faGithubSquare} size="lg" color='#ffd700' />
                                </a>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="portfolio__item">
                        <img src={traveladviser} alt="portfolio" />
                        <figcaption>
                            <h2>App <span>Travel Adviser</span></h2>
                            <p>To explore the World of Traveling click the link below</p>
                            <div className="portfolio__link">
                                <a href="https://frolicking-kelpie-8130e2.netlify.app/" target='_blank'>
                                    <FontAwesomeIcon icon={faLink} size="lg" color='#ffd700' />
                                </a>
                                <a href="https://github.com/qipchaq/travel-advisor" target='_blank'>
                                    <FontAwesomeIcon icon={faGithubSquare} size="lg" color='#ffd700' />
                                </a>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="portfolio__item">
                        <img src={zoo} alt="portfolio" />
                        <figcaption>
                            <h2>Website <span>Online Zoo</span></h2>
                            <p>To explore the Online Zoo click the link below</p>
                            <div className="portfolio__link">
                                <a href="https://online-zoopark.netlify.app/" target='_blank'>
                                    <FontAwesomeIcon icon={faLink} size="lg" color='#ffd700' />
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