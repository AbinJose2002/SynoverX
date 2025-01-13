import { ListGroup } from 'react-bootstrap';
import { BlurText } from './BlurText';
import './Testimonials.css'
import { h1 } from 'framer-motion/client';
import dummy from '../../assets/dummy.png'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Testimonials() {
    const [size, setSize] = useState(window.innerWidth > 768 ? 2 : 1);
    const testimonial = [
        {
            name: 'Arabella Sinclair',
            img: 'https://example.com/images/testimonial1.jpg',
            who: 'Product Designer',
            message: 'We are very impressed with this creative agency! Working with this creative agency is not only fun, but also yields great results. Thank you for your dedication and professionalism!',
            work: 'Landing Page',
            date: 'October 2023',
        },
        {
            name: 'John Doe',
            img: 'https://example.com/images/testimonial2.jpg',
            who: 'Marketing Manager',
            message: 'This agency exceeded our expectations. They were incredibly responsive, creative, and delivered a campaign that drove significant results for our business. Highly recommend!',
            work: 'Social Media Campaign',
            date: 'December 2023',
        },
        {
            name: 'Jane Smith',
            img: 'https://example.com/images/testimonial3.jpg',
            who: 'CEO',
            message: 'This team is a dream to work with! They are not only talented but also incredibly patient and understanding. They helped us achieve our business goals and exceeded our expectations.',
            work: 'Website Redesign',
            date: 'November 2024',
        },
        {
            name: 'Michael Chen',
            img: 'https://example.com/images/testimonial4.jpg',
            who: 'Developer',
            message: 'This agency is top-notch! They were able to take our complex project and turn it into a reality. Their communication was excellent, and they kept us involved every step of the way.',
            work: 'Custom Software Development',
            date: 'August 2024',
        },
        {
            name: 'Sarah Lee',
            img: 'https://example.com/images/testimonial5.jpg',
            who: 'Content Writer',
            message: 'I highly recommend this agency! They are incredibly creative and were able to capture the essence of our brand perfectly. They delivered high-quality content that resonated with our audience.',
            work: 'Content Marketing Strategy',
            date: 'July 2024',
        },
        {
            name: 'David Kim',
            img: 'https://example.com/images/testimonial6.jpg',
            who: 'Entrepreneur',
            message: 'Working with this agency was a game-changer for my business! They helped me develop a successful marketing campaign that increased brand awareness and generated leads.',
            work: 'Marketing Campaign Development',
            date: 'June 2024',
        },
        {
            name: 'Emily Garcia',
            img: 'https://example.com/images/testimonial7.jpg',
            who: 'Social Media Manager',
            message: 'This agency is a social media powerhouse! They helped us grow our social media following and engagement significantly. They are experts in their field and a pleasure to work with.',
            work: 'Social Media Management',
            date: 'May 2024',
        },
        {
            name: 'William Johnson',
            img: 'https://example.com/images/testimonial8.jpg',
            who: 'Graphic Designer',
            message: 'I am so grateful for this agency! They helped me create a beautiful and functional brand identity that perfectly represents my business. They are highly skilled and a valuable asset to any project.',
            work: 'Brand Identity Design',
            date: 'April 2024',
        },
    ];
    return (
        <div className='col-11 mx-auto py-5'>
            <div className="col-12 d-flex align-items-center">
                <a href="#about" className='howwework-btn px-3 mx-auto'>Testimonials</a>
            </div>
            {/* <h1 className="testimonial-head text-center mx-auto py-3 col-lg-8 col-sm-10">Hear From Our Clients</h1> */}
            <p className='howwework-para text-center mx-auto py-2 col-lg-8 col-sm-10'>
                This testimonial is a motivation for us to continue to improve quality and provide better satisfaction to every customer who entrusts us.
            </p>


            <Swiper
                style={{ height: 'auto' }}
                slidesPerView={size}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    testimonial.map((item, key) => (
                        <SwiperSlide className='testimonial-card' key={key}>
                            <span className='d-md-flex justify-content-around'>
                                <img src={dummy} alt="" />
                                <div>
                                    <h2>{item.name}</h2>
                                    <h6>{item.who}</h6>
                                </div>
                            </span>
                            <hr />
                            <p style={{ textAlign: 'justify' }}>{item.message}</p>
                            <hr />
                            <div className="d-md-flex justify-content-between">
                            <p>{item.date}</p>
                            <p>{item.work}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>


        </div>
    )
}
