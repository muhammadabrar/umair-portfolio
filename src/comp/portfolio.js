import React, { useEffect } from "react";
import img1 from "../imgs/p1.PNG";
import img2 from "../imgs/2.jpg";
import img3 from "../imgs/6.jpg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { activeNav } from "../store/nav";
import Footer from "./footer";

const Portfolio = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(activeNav("portfolio"))

  }, []);
  return (
    <>
    <div className="portfolio">
      
      <div
        className="portfolio-item"
        id="p1"
        style={{
          backgroundImage: ` linear-gradient(rgba(2, 2, 2, 0.8), rgba(0, 0, 0, 0.5)), url("${img1}")  `,
        }}
      >
        <div className="section-no right-pos bottom-pos"> 1. </div>

        <div className="portfolio-img">
          <img src={img1} />
        </div>
        <Link to="/" className="portfolio-title">
          <div>
            <h2 className="title">Music videos</h2>
            <p className='role'>
            DOP | Film
            </p>
          </div>

          <button className="watch-btn btn">watch</button>
        </Link>
      </div>
      <div
        className="portfolio-item"
        id="p1"
        style={{
          backgroundImage: ` linear-gradient(rgba(2, 2, 2, 0.8), rgba(0, 0, 0, 0.5)), url("${img1}")  `,
        }}
      >
        <div className="section-no right-pos bottom-pos"> 1. </div>

        <div className="portfolio-img">
          <img src={img1} />
        </div>
        <Link to="/" className="portfolio-title">
          <div>
            <h2 className="title">Music videos</h2>
            <p className='role'>
            DOP | Film
            </p>
          </div>

          <button className="watch-btn btn">watch</button>
        </Link>
      </div>
    </div>
      <Footer/>
      </>
  );
};

export default Portfolio;
