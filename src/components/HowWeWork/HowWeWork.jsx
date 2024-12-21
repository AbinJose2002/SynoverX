import './HowWeWork.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function HowWeWork() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='row howwework py-md-5 py-sm-0'>
            <div className="col-12 d-flex align-items-center">
                <a href="#about" className='howwework-btn px-3 mx-auto'>How We Work</a>
            </div>
            <p className='howwework-para text-justify mx-auto py-5 col-lg-8 col-sm-10'>
                We strive to create extraordinary experiences, increase brand awareness, expand target audience reach, and optimize overall business results.
            </p>
            <div className="grid col-10 mx-auto">
                <div className="grid-element grid-element1">
                    <iframe
                        src="https://www.youtube.com/embed/RIo28_boFJg"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="grid-element grid-element2">
                    <h1 className={`step1-num ${isHovered ? 'hovered' : ''}`}>01</h1>
                    <h1 className="step1-head text-white">Smart Digital Marketing Strategy</h1>
                    <p className="step1-para text-white pb-2">
                        Overall, we leverage technological intelligence and understanding of customer behavior to achieve marketing goals more efficiently.
                    </p>
                    <span
                        className="step-learn-more"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <a href="#" className={`step-learn-more-link ${isHovered ? 'hovered' : ''}`}>Learn More</a>
                        <FontAwesomeIcon icon={faArrowRight} className='step-right-arrow' />
                    </span>
                </div>
                <div className="grid-element grid-element3">aaa</div>
                <div className="grid-element grid-element4">aaa</div>
                <div className="grid-element grid-element5">aaa</div>
            </div>
        </div>
    );
}