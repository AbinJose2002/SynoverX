import { ListGroup } from 'react-bootstrap';
import { BlurText } from './BlurText';
import './Testimonials.css'
import { h1 } from 'framer-motion/client';

export default function Testimonials() {
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
        }
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
            {
                testimonial.map((item,key)=>(
                    <p>{item.message}</p>
                ))
            }
        </div>
    )
}
