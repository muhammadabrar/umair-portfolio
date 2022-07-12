import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Hero = () => {
  const [IsMenu, setIsMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  var dots = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39]
    const [cDot, setcDot] = useState(0);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
   
  }, []);
  useEffect(() => {

    setInterval(function () {
      dotshandle();
  }, 2000);
  }, [cDot]);
 function dotshandle() {
  var b = dots.length,
  c, d;
  d = Math.floor(Math.random() * b--);
  // console.log(d);

setcDot(d)
 }
  const isMobile = width >= 900;
  return (
    <div className="Hero">
      <div className="section-no right-pos bottom-pos" > 1.  </div>

      <div class="half-bg-dec " >
        {dots.map((dot, i)=> <div className={`half-bg-dec-item ${cDot == dot &&  "half-bg-dec-vis"}`}></div>)}
       
       

      </div>
      <div className="welcome">

        <h1>Hey there,</h1>
        <h2>Welcome to my world</h2>
        <h3>
          I'm <span className="text-color">Umair Imtiaz</span>
        </h3>
        <p className="nech">a D.O.P | Film-maker | Video-Editor</p>
        <a href="#about" className="hero-btn btn ">
          Let's Start
        </a>
        <a href="#about" className="hero-btn btn ">
          my portfolio
        </a>
      </div>
      <div className="nav-bottom">
        <>
          <div className="scroll-down-wrap">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
            <span>Scroll Down</span>
          </div>
          
        </>

        <>
       
                                        </>
        
      </div>
    </div>
  );
};

export default Hero;
