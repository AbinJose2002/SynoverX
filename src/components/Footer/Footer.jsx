import React from 'react'
import './Footer.css'
import logo from '../../assets/Synovate.png'

export default function Footer() {
    return (
        <div className='footer' style={{backgroundColor: '#3e3f3f', width: '100%', height: '100%'}}>
            <footer className=" rounded shadow-sm p-4 ">
                <div className="container-xl px-4 py-md-5">
                    <div className="d-sm-flex align-items-center justify-content-between">
                        <a href='/' className="d-flex align-items-center text-decoration-none"> 
                            {/* <img src={logo} style={{height: '2rem'}} alt="Flowbite Logo" /> */}
                            <span className="ms-3 fs-3 fw-semibold" style={{color:'white'}}>SynoverX</span>
                        </a>
                        <ul className="nav list-unstyled d-flex flex-wrap mb-0">
                            <li className="nav-item me-4 me-md-5">
                                <a href="#" className="nav-link text-decoration-none" style={{color:'white'}}>About</a>
                            </li>
                            <li className="nav-item me-4 me-md-5">
                                <a href="#" className="nav-link text-decoration-none" style={{color:'white'}}>Privacy Policy</a>
                            </li>
                            <li className="nav-item me-4 me-md-5">
                                <a href="#" className="nav-link text-decoration-none" style={{color:'white'}}>Licensing</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link text-decoration-none" style={{color:'white'}}>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-4 my-md-5 border-top" />
                    <div className="text-center text-md-start">
                        <span className="text small">© 2023 <a href="https://flowbite.com/" className="text-reset text-decoration-none">Flowbite™</a>. All Rights Reserved.</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}
