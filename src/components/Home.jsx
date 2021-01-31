import React from "react"
import {NavLink} from 'react-router-dom'
import  "./Home.css"
// import web from "./vaishali.jpg" 
// const web = require('./vaishali.jpg');

export default function Home()
{

    return (
    <>
        <section id="header" className="home d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                     <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                         {/* <img src={web}  className="img-fluid animated" alt="homeimage"/> */}
                         <div className="mt-3">
                                    <strong style={{fontSize:"35px", color:"red"   }}>Define Yourself😎 Or Others Will Define You🤠</strong>
                                </div>
                                <div className="mt-3">
                                    <strong style={{fontSize:"40px", color:"#5824a6"   }}>Let's Know About Me😍</strong>
                                </div>
                                <div className="mt-3">
                                    <NavLink to="/about" className="btn-get-started">
                                        Get Started
                                    </NavLink>
                                </div>
                               
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                   {/* <img src={web}  className="img-fluid animated" alt="homeimage"/> */}
                                </div> 
                        </div>                          
                    </div>
                </div>
            </div>
        </div>

    </section>
    </>
    );
}   