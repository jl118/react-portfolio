import React, { useEffect } from 'react';
import ScreenHeading from '../../utils/ScreenHeading/ScreenHeading';
import ScrollService from '../../utils/ScrollService';
import Animations from '../../utils/Animations';
import './AboutMe.css';

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = {
        description: "I’m a Full-Stack Web Developer with a Bachelor’s Degree in Communication from UNC Chapel Hill positioned to provide unique perspectives on how end users interact with websites and software platforms by leveraging my background in media technology and digital production.",
        highlights:{
            bullets:[
                "Mobile Responsive Development",
                "Interactive Front End Design",
                "MERN Stack",
                "REST API",
                "SQL and NoSQL Database Management",
            ],
            heading: "A Few of my Strengths:"
        }
    }

    const renderHighlight = () => {
        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }

    return (
        <div className='about-me-container screen-container fade-in' id={props.id || ""}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Film to Web Development'} />
                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                        <div className='about-me-highlights'>
                            <div className='highlight-heading'>
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className='about-me-options'>
                            <button className='btn primary-btn'
                            onClick={() => ScrollService.scrollHandler.scrollToContact()}
                            > Contact Me </button>
                            <a href="jennifer_resume.pdf" download="Jennifer_Liebelt.pdf">
                                <button className='btn highlighted-btn'>
                                    Resume 📥
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
