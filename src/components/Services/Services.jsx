import React from 'react';
import './Services.css';
import uiux from '../../assets/uiux.png';
import brand from '../../assets/brand.png';
import develop from '../../assets/develop.png';

export default function Services() {
    const handleMouseEnter = (e) => {
        const logo = e.currentTarget.querySelector('.service-item-logo');
        logo.style.backgroundColor = '#adf59a'
        const desc = e.currentTarget.querySelector('.service-item-desc');
        desc.style.color = 'black';
    }
    
    const handleMouseLeave = (e) => {
        const desc = e.currentTarget.querySelector('.service-item-desc');
        desc.style.color = 'white';
        const logo = e.currentTarget.querySelector('.service-item-logo');
        logo.style.backgroundColor = '#4f672a'; 
        logo.style.border = ""
    }

    return (
        <div className='col-11 mx-auto'>
            <div className="service-body ">
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
                            <div className="service-item-logo"><img src={uiux} alt="ui/ux"/></div>
                            <div className="service-item-desc">
                                <h3 className='pt-4 pb-1 service-item-head'>UI/ UX</h3>
                                <p className="py-2 service-item-para">UI/ UX in app is key to creating a great user experience. This will increase user loyality, strengthen the brand image, and provide a competitive advantage.</p>
                            </div>
                        </div>
                        <div className="service-item col-lg-4 col-sm-12" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="service-item-logo"><img src={brand} alt="" /></div>
                            <div className="service-item-desc">
                                <h3 className='pt-4 pb-1 service-item-head'>Branding</h3>
                                <p className="py-2 service-item-para">Branding can involves stratergies and efforts to build a consistent image, identity, and perception associated with a product, sevice, or company</p>
                            </div>
                        </div>
                        <div className="service-item col-lg-4 col-sm-12" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="service-item-logo"><img src={develop} alt="" /></div>
                            <div className="service-item-desc">
                                <h3 className='pt-4 pb-1 service-item-head'>Developer</h3>
                                <p className="py-2 service-item-para">Developers play an important role in creating technology solutions that make life easier, improve business processes, and drive innovations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}