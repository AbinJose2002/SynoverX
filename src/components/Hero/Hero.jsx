import React from "react";
import "./Hero.css";
import group from '../../assets/group.jpg'

export default function Hero() {
    return (
        <div>
            <div className="row col-12 pt-5">
                <div className="col-lg-7 col-sm-12">
                    <h1 className="hero-head">
                        Color Digitally With Imagination Palette
                    </h1>
                </div>
                <div className="col-lg-5 col-sm-12 d-flex justify-content-center align-items-center">
                    <p className="hero-para">
                        We are digital magicians, turning ideas into compelling designs,
                        driving change and creating real impact.
                    </p>
                </div>
            </div>
            <div className="row col-12 mx-auto ">
                <div className="col-lg-2 col-sm-12 d-flex flex-column justify-content-center gap-2">
                    <div className="hero-sub-div my-1 py-2 px-4"><h2>5<span>+</span></h2><h6>Happy Clients</h6></div>
                    <div className="hero-sub-div my-1 py-2 px-4"><h2>5<span>+</span></h2><h6>Happy Projects</h6></div>
                    <div className="hero-sub-div my-1 py-2 px-4"><h2>5<span>+</span></h2><h6>Happy Faces</h6></div>
                </div>
                <div className="col-lg-10 col-sm-12 d-flex justify-content-center align-items-center" style={{ position: "relative" }}>
                    {/* <svg viewBox="0 0 300 300">
                        <circle cx="150" cy="150" r="100" fill="rgb(36, 169, 36)" />
                        <path id="circlePath" fill="none" d="M 150,100 A 50,50 0 1,1 150,200 A 50,50 0 1,1 150,100" />
                        <text font-size="16" fill="black">
                            <textPath href="#circlePath" startOffset="0%">
                                Get In Touch. Get In Touch. Get In Touch. Get In Touch. Get In Touch. Get In Touch.
                                <animate attributeName="startOffset" from="0%" to="100%" dur="10s" repeatCount="indefinite" />
                            </textPath>
                        </text>
                    </svg> */}

                    <img src={group} className="group-img" alt="Group" />
                    {/* <div className="rotate-div"></div> */}
                </div>
            </div>
        </div>
    );
}