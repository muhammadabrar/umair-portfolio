import React from 'react';
import skills_img from "../imgs/skills.PNG";
// import img1 from "../imgs/1.jpg";
import img2 from "../imgs/2.jpg";
import img3 from "../imgs/3.jpg";
import img4 from "../imgs/4.jpg";
import img5 from "../imgs/5.jpg";
import img6 from "../imgs/6.jpg";
import img7 from "../imgs/7.jpg";
import img8 from "../imgs/8.jpg";
import img9 from "../imgs/9.jpg";



const HPortfolio = () => {
    return (
        <section className='section section-HPortfolio'>
             <marquee className='bg-imgs'>
                            <img src={skills_img} className="img"/>
                            {/* <img src={img1} className="img"/> */}
                            <img src={img2} className="img"/>
                            <img src={img3} className="img"/>
                            <img src={img4} className="img"/>
                            <img src={img5} className="img"/>
                            <img src={img6} className="img"/>
                            <img src={img7} className="img"/>
                            <img src={img8} className="img"/>
                            <img src={img9} className="img"/>


                    </marquee>
        <div className="section-no right-pos " > 4.  </div>

                       <>
                           <div className='container'>
                               <div className='HPortfolio-title'>
                                   <h1>My Features <span>Projects</span></h1>
                                   <p>Lorem Ipsum generators on the Internet king this the first true generator</p>
                                   <a href="#about" className="portfolio-btn btn">
                                        my portfolio
                                    </a>
                               </div>
                           </div>
                           
                       </>
                   
                     
        </section>
    );
}

export default HPortfolio;
