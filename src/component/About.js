import React from "react";
import img from "./IMG.jpg";
import { useState } from "react";


export default function About(props) {
  return (
    <>
    
      <section  id ="about" className={`py-3 py-md-5 text-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'light':'dark'}`} >

        {/* Image Section */}
        <div className="container mb-4 mb-md-5">
          <div className="row justify-content-md-center">
            <div className="col-5 col-md-3 col-xl-2">
              <img
                className="img-fluid rounded shadow"
                loading="lazy"
                src={img}
                alt="About"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container overflow-hidden">
          <div className="row gy-2 gy-md-0 justify-content-xxl-center">

            {/* Left Content */}
            <div className="col-12 order-md-1 col-md-8 col-xxl-6">
              <div className="text-center text-md-start">
                <h2 className="display-4 fw-bold lh-1">Manish Chaurasiya</h2>
                <p className="text-secondary fs-4 mb-2"> MERN Developer</p>

                <hr className="w-25 mx-auto ms-md-0 mb-4 text-secondary" />

                <p>
                  I am a MERN Stack Developer passionate about building scalable,
                   efficient, and user-focused web applications. I specialize in 
                   developing full-stack solutions using MongoDB, Express.js, React, 
                   and Node.js to create fast, responsive, and modern digital experiences.
                </p>

                <p>
                  I believe the best web applications are built by deeply 
                  understanding user requirements and business goals. I
                   begin every project by analyzing the problem, planning the
                    system architecture, and designing efficient database structures
                     to ensure scalable and reliable solutions.
                </p>
              </div>
            </div>

            {/* Right Stats */}
            <div className="col-12 order-md-0 col-md-4 col-xxl-4">
              <div className="text-center text-md-start me-md-3 me-xl-5">

                <p className="mb-4">
                  <span className="d-block display-6 lh-1">Learner</span>
                  <span className="fs-4 text-secondary">
                    
                  </span>
                </p>

                <div className="d-grid">
                  <button className="btn btn-primary btn-lg" type="button">
                    Hire Me
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </section>
    </>
  );
}
