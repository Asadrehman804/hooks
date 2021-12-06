import React from "react";
import { NavLink } from "react-router-dom";

const Common = (prop) => {
    return (
      <>
        <section id="header" className="d-flex align-items-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-10 mx-auto"> 
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
                    <h1>{prop.name}<br /> <strong className="brand-name">RedSite</strong></h1>
                    <h2 className="my-3">
                      We are the team of talented developer making websites </h2>
                    <div className="mt-5">
                      <NavLink to={prop.visit} className="btn1">{prop.btname}</NavLink>
                    </div>
                  </div>  
                <div className="col-lg-6 oder-1 order-lg-2 header-img" >
                  <img src="https://picsum.photos/seed/picsum/500/400" className="img-fluid " alt="home-img" />
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
      </>
  
    )
  };
  export default Common;