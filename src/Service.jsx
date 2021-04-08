import React from "react";
import Sdata from "../src/Sdata"
import Card from "../src/Card"
import Navbar from "../src/Navbar"

const Service = () => {
    return (
        <>
        <Navbar/>
        <div className ="my-5">
            <h1 className="text-center"> Our Services</h1>
            </div>
            <div className = "container-Fluid mb-5">
          <div className = 'row'>
              <div className = "col-10 mx-auto">
                  <div className="row gy-4">
                      {
                          Sdata.map((val) => {
                              return <Card
                              imgsrc = {val.imgsrc}
                              title = {val.title}
                              text = {val.text}
                              texts = {val.texts}
                              />
                              
                              })
                          }
                      </div>
              </div>
          </div>
      </div>

        </>
    );

};

export default Service;