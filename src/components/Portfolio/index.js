import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import cryptoverse from '../../assets/images/cryptoverse.png'
import traveladviser from '../../assets/images/travel-adviser.png'
import wildlife from '../../assets/images/wildlife.png'
import zoo from '../../assets/images/zoo.png'
import piano from '../../assets/images/piano.png'
import casino from '../../assets/images/casino.png'

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
                        <img src={cryptoverse} alt="portfolio" />
                        <figcaption>
                            <h2>Cryptocurrency App <span>Cryptoverse</span></h2>
                            <p>To explore the World of Cryptocurrency click the link below</p>
                            <div className="portfolio__link">
                                <a href="https://react-app-cryptoverse.netlify.app/" target='_blank'>
                                    <FontAwesomeIcon icon={faLink} color='#fff' />
                                </a>
                                <a href="https://github.com/qipchaq/cryptoverse" target='_blank'>
                                    <FontAwesomeIcon icon={faGithubSquare} color='#fff' />
                                </a>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="portfolio__item">
                        <img src={traveladviser} alt="portfolio" />
                        <figcaption>
                            <h2>App <span>Travel Adviser</span></h2>
                            <p>To explore the World click the link below</p>
                            <div className="portfolio__link">
                                <a href="https://react-app-cryptoverse.netlify.app/" target='_blank'>
                                    <FontAwesomeIcon icon={faLink} color='#fff' />
                                </a>
                                <a href="https://github.com/qipchaq/cryptoverse" target='_blank'>
                                    <FontAwesomeIcon icon={faGithubSquare} color='#fff' />
                                </a>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="portfolio__item">
                        <img src={wildlife} alt="portfolio" />
                        <figcaption>
                            <h2>Website <span>Wildlife</span></h2>
                            <p>To explore the Wildlife click the link below</p>
                            <div className="portfolio__link">
                                <a href="https://lifewild.netlify.app/" target='_blank'>
                                    <FontAwesomeIcon icon={faLink} color='#fff' />
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
                                    <FontAwesomeIcon icon={faLink} color='#fff' />
                                </a>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="portfolio__item">
                        <img src={piano} alt="portfolio" />
                        <figcaption>
                            <h2>App <span>Virtual Piano</span></h2>
                            <p>To explore the Virtual Piano click the link below</p>
                            <div className="portfolio__link">
                                <a href="https://virtual-pianino.netlify.app/" target='_blank'>
                                    <FontAwesomeIcon icon={faLink} color='#fff' />
                                </a>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="portfolio__item">
                        <img src={casino} alt="portfolio" />
                        <figcaption>
                            <h2>Website <span>Online Casino</span></h2>
                            <p>To explore the Online Casino click the link below</p>
                            <div className="portfolio__link">
                                <a href="https://625b17440fc57242df1a5dda--eloquent-melba-113d42.netlify.app/" target='_blank'>
                                    <FontAwesomeIcon icon={faLink} color='#fff' />
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