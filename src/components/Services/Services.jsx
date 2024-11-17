import React from 'react';
import './Services.css';
import uiux from '../../assets/uiux.png';
import brand from '../../assets/brand.png';
import develop from '../../assets/develop.png';

export default function Services() {
    const handleMouseEnter = (e) => {
        const logo = e.currentTarget.querySelector('.service-item-logo');
        logo.style.backgroundColor = 'white'; 
        logo.style.border = "1px solid black"
    }
    
    const handleMouseLeave = (e) => {
        const logo = e.currentTarget.querySelector('.service-item-logo');
        logo.style.backgroundColor = ''; 
        logo.style.border = ""
    }

    return (
        <div>
            <div className="service-body">
                <a href="#services" className='service-btn'>OUR SERVICES</a>
                <div className="row">
                    <div className="col-lg-8 col-sm-12 py-4">
                        <h1 className='text-white service-head'>We Built Best <br />Service Experience</h1>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <p className="text-white service-para">We Believe That Creativity, collaboration and adaptability are the keys to the success in this fast-changing digital era.</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center row my-sm-3 my-lg-0 service-items">
                        <div className="service-item col-lg-4 col-sm-12" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="service-item-logo"><img src={uiux} alt="ui/ux" /></div>
                        </div>
                        <div className="service-item col-lg-4 col-sm-12" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="service-item-logo"><img src={brand} alt="" /></div>
                        </div>
                        <div className="service-item col-lg-4 col-sm-12" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="service-item-logo"><img src={develop} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}