import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import group1 from '../../assets/group(1).jpg'

export default function About() {
    return (
        <div className='row about col-12  py-5'>
            <div className="about-left col-lg-6 col-sm-12 flex-column">
                <img src={group1} alt="" className='group-img1' />
                <img src={group1} alt='' className='group-img2' />
            </div>
            <div className="about-right col-lg-6 col-sm-12 py-3">
                <a href="#about" className='about-btn '>About Us</a>
                <h1 className='pt-4 about-head'>Why you should choose SynoverX</h1>
                <p className='about-para'>We proudly introduce ourselves as a digital creative agency committed to realizing our clients' vision and mission through creative, innovative, and technology-based solutions in the digital world.</p>
                <span className="learn-more">
                <a href="" className='learn-more-link'>Learn More</a>
                <FontAwesomeIcon icon={faArrowRight} className='right-arrow'/>
                </span>
            </div> 
        </div>
    )
}
