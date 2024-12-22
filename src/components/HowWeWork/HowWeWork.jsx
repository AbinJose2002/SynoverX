import './HowWeWork.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const GridItem = ({ number, title, description, isHovered }) => {
    return (
        <div className="grid-element" onMouseEnter={() => isHovered(true)} onMouseLeave={() => isHovered(false)}>
            <h1 className={`step1-num ${isHovered ? 'hovered' : ''} text-white`}>{number}</h1>
            <h1 className="step1-head text-white">{title}</h1>
            <p className="step1-para text-white pb-2">{description}</p>
            <span className={`step-learn-more ${isHovered ? 'hovered' : ''}`}>
                <a href="#" className='step-learn-more-link'>Learn More</a>
                <FontAwesomeIcon icon={faArrowRight} className='step-right-arrow' style={{ color: 'white' }} />
            </span>
        </div>
    );
};

export default function HowWeWork() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='row howwework pb-5 col-11 mx-auto'>
            <div className="col-12 d-flex align-items-center">
                <a href="#about" className='howwework-btn px-3 mx-auto'>How We Work</a>
            </div>
            <p className='howwework-para text-justify mx-auto py-5 col-lg-8 col-sm-10'>
                We strive to create extraordinary experiences, increase brand awareness, expand target audience reach, and optimize overall business results.
            </p>
            <div className="parent">
                <div className="div1 grid-element">
                    <iframe
                        src="https://www.youtube.com/embed/RIo28_boFJg"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <GridItem 
                    number="01" 
                    title="Smart Digital Marketing Strategy" 
                    description="Overall, we leverage technological intelligence and understanding of customer behavior to achieve marketing goals more efficiently."
                    isHovered={setIsHovered}
                />
                <GridItem 
                    number="02" 
                    title="Another Strategy" 
                    description="Overall, we leverage technological intelligence and understanding of customer behavior to achieve marketing goals more efficiently."
                    isHovered={setIsHovered}
                />
                <GridItem 
                    number="03" 
                    title="Yet Another Strategy" 
                    description="Description for yet another strategy."
                    isHovered={setIsHovered}
                />
                <GridItem 
                    number="04" 
                    title="Final Strategy" 
                    description="Description for the final strategy."
                    isHovered={setIsHovered}
                />
            </div>
        </div>
    );
}