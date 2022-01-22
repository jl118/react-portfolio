import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from '../../utils/ScreenHeading/ScreenHeading';
import ScrollService from '../../utils/ScrollService';
import Animations from '../../utils/Animations';
import './Projects.css';

export default function Projects(props) {
    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options = {
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 10000,
        responsive: {
            0:{
                items:1,
            },
            768:{
                items:1,
            },
            1000:{
                items:3,
            },
        }
    }

    return (
        <div>
            <ScreenHeading
            title={'Projects'} 
            subHeading={'View My Work'}
            />
            <section className='project-section fade-in' id={props.id || ""}>
                <div className='container'>
                    <div className='row'>
                        <OwlCarousel className='owl-carousel' id='project-carousel' {...options}>
                            <div className='col-lg-12'>
                                <div className='project-item'>
                                    <div className='project-description'>
                                        <p>
                                            My Recipe Planner
                                        </p>
                                        <ul className='technologies list-unstyled'>
                                            <li>
                                                API, JavaScript, JQuery, HTML5 & CSS3
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='project-info'>
                                        <img
                                        src="img/recipe.png"
                                        alt='no internet connection'
                                        ></img>
                                        <a href={'https://philipbrowning.github.io/project1/'} target='_blank'><h5>Deployed Application</h5></a>
                                        <a href='https://github.com/PhilipBrowning/project1' target='_blank'><h6>GitHub Repo</h6></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='project-item'>
                                    <div className='project-description'>
                                        <p>
                                            Flipped Pages
                                        </p>
                                        <ul className='technologies list-unstyled'>
                                            <li>
                                                JavaScript, Express, MySQL, Node, HTML5, & CSS3
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='project-info'>
                                        <img
                                        src="img/flipped_pages_desktop.png"
                                        alt='no internet connection'
                                        ></img>
                                        <a href='https://obscure-beach-36412.herokuapp.com/' target='_blank'><h5>Deployed Application</h5></a>
                                        <a href='https://github.com/nealsmithg/flipped_pages' target='_blank'><h6>GitHub Repo</h6></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='project-item'>
                                    <div className='project-description'>
                                        <p>
                                            What the Forecast?
                                        </p>
                                        <ul className='technologies list-unstyled'>
                                            <li>
                                                API, JavaScript, Moment.js, Bootstrap, HTML5 & CSS3
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='project-info'>
                                        <img
                                        src="img/weather.png"
                                        alt='no internet connection'
                                        ></img>
                                        <a href='https://jl118.github.io/weather-dashboard/' target='_blank'><h5>Deployed Application</h5></a>
                                        <a href='https://github.com/jl118/weather-dashboard' target='_blank'><h6>GitHub Repo</h6></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='project-item'>
                                    <div className='project-description'>
                                        <p>
                                            Fitness Tracker
                                        </p>
                                        <ul className='technologies list-unstyled'>
                                            <li>
                                                MongoDB, Express, JavaScript, HTML5 & CSS3
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='project-info'>
                                        <img
                                        src="img/fitness-tracker.png"
                                        alt='no internet connection'
                                        ></img>
                                        <a href='https://safe-ravine-28870.herokuapp.com/' target='_blank'><h5>Deployed Application</h5></a>
                                        <a href='https://github.com/jl118/fitness-tracker' target='_blank'><h6>GitHub Repo</h6></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='project-item'>
                                    <div className='project-description'>
                                        <p>
                                            Day Planner
                                        </p>
                                        <ul className='technologies list-unstyled'>
                                            <li>
                                                JavaScript, Bootstrap, HTML5 & CSS3
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='project-info'>
                                        <img
                                        src="img/planner_desktop.png"
                                        alt='no internet connection'
                                        ></img>
                                        <a href='https://jl118.github.io/day-planner/' target='_blank'><h5>Deployed Application</h5></a>
                                        <a href='https://github.com/jl118/day-planner' target='_blank'><h6>GitHub Repo</h6></a>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
            <div className='footer-image'>
                <img src={require ('../../assets/Home/shape-bg.png')} alt='no internet connection' />
            </div>
        </div>
    );
}
