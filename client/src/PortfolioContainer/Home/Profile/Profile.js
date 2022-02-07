import React from 'react';
import Typical from 'react-typical';
import ScrollService from "../../../utils/ScrollService";
import './Profile.css';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://github.com/jl118' target="_blank">
                                <i className='fa fa-github'></i>
                            </a>
                            <a href='https://twitter.com/jenniferliebelt' target="_blank">
                                <i className='fa fa-twitter'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/jennifer-liebelt/' target="_blank">
                                <i className='fa fa-linkedin'></i>
                            </a>
                        </div>
                    </div>
                
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hi! I'm <span className='highlighted-text'>Jennifer</span>!
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical 
                                loop={Infinity}
                                steps={[
                                    "Full-Stack Web Developer",
                                    2000,
                                    "Digital Artist 🎨",
                                    2000,
                                    "Mario Kart Champion 🏎",
                                    2000,
                                    "Terrible Singer 🎤",
                                    2000,
                                    "Caffeine Enthusiast ☕️",
                                    2000,
                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                I'm a MERN Stack Developer with a passion for creating intuitive and interactive apps. 
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'
                        onClick={() => ScrollService.scrollHandler.scrollToContact()}
                        >
                            {""}
                            Contact Me{" "}
                        </button>
                        <a href="jennifer_resume.pdf" download="Jennifer_Liebelt.pdf">
                            <button className='btn highlighted-btn'>
                                Resume 📥
                            </button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    );
}

