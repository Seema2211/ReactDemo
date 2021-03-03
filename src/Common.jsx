import React from 'react'
import { NavLink } from 'react-router-dom';


const Common = (prop) => {
    return (
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 max-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column " >
                            <h1>
                                {prop.name} <strong className="brand-name">Technology</strong>
                            </h1>
                            <h2 className="my-3">
                                We are the team of developer making websites
                            </h2>
                            <div className="mt-3">
                                <NavLink to={prop.visit} className="btn-get-started">{prop.btnname}</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={prop.imgsrc} className="img-fluid animated" alt="home img"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Common;
