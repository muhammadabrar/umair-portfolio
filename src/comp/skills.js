import React, { useEffect, useState } from 'react';
import skills_img from "../imgs/skills.PNG";

import {AiOutlineVideoCamera} from 'react-icons/ai';

const Skills = () => {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }
    useEffect(() => {
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }, []);
  
    const isMobile = width >= 900;
    return (
        <section className='section section-skills'>
        <div className="section-no right-pos bottom-pos" > 3.  </div>

                       <div className='skill-img'>
                           <div className='container'>
                               <div className='skills-title'>
                                   <h1>My <span>Film Making</span> and <br/> Photography skills</h1>
                               </div>
                           </div>
                       </div>
                    <div className='skills'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <div className='skill-card'>
                                <h1 className='skill-no'>01.</h1>

                                        <h2>Film Making Skills</h2>
                                        <p>Lorem Ipsum generators on the Internet king this the first true generator</p>
                                    </div>
                                </div>
                                <div className='col-md-8'>
                                        <div className='row'>
                                        <div className="features-box col-md-4">
                                                    <div className="time-line-icon">
                                                        <i><AiOutlineVideoCamera/></i>
                                                    </div>
                                                    <h3>Web Design</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.   </p>
                                                </div>
                                                <div className="features-box col-md-4">
                                                    <div className="time-line-icon">
                                                        <i><AiOutlineVideoCamera/></i>
                                                    </div>
                                                    <h3>Web Design</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.   </p>
                                                </div>
                                                <div className="features-box col-md-4">
                                                    <div className="time-line-icon">
                                                        <i><AiOutlineVideoCamera/></i>
                                                    </div>
                                                    <h3>Web Design</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.   </p>
                                                </div>

                                        </div>
                                </div>

                            </div>
                            {isMobile ? <div className='row'>
                                <div className='col-md-8'>
                                <>
                                        <>
                                           
                                            <div class="custom-skillbar-title"><span>Photoshop</span></div>
                                            <div class="skill-bar-percent">95%</div>
                                            <div class="skillbar-bg" data-percent="95%">
                                                <div class="custom-skillbar" style={{width: "95%"}}></div>
                                            </div>
                                           
                                            <div class="custom-skillbar-title"><span>Jquery</span></div>
                                            <div class="skill-bar-percent">65%</div>
                                            <div class="skillbar-bg" data-percent="65%">
                                                <div class="custom-skillbar" style={{width: "75%"}}></div>
                                            </div>
                                          
                                            <div class="custom-skillbar-title"><span>HTML5</span></div>
                                            <div class="skill-bar-percent">75%</div>
                                            <div class="skillbar-bg" data-percent="75%">
                                                <div class="custom-skillbar" style={{width: "85%"}}></div>
                                            </div>
                                            <div class="custom-skillbar-title"><span>PHP</span></div>
                                            <div class="skill-bar-percent">71%</div>
                                            <div class="skillbar-bg" data-percent="71%">
                                                <div class="custom-skillbar" style={{width: "65%"}}></div>
                                            </div>
                                        </>
                                    </>
                                </div>
                                <div className='col-md-4'>
                                    <div className='skill-card right'>
                                    <h1 className='skill-no'>02.</h1>

                                        <h2>Film Making Skills</h2>
                                        <p>Lorem Ipsum generators on the Internet king this the first true generator</p>
                                    </div>
                                </div>
                                
                            </div>:
                            
                            <div className='row'>
                               
                                <div className='col-md-4'>
                                    <div className='skill-card right'>
                                    <h1 className='skill-no'>02.</h1>

                                        <h2>Film Making Skills</h2>
                                        <p>Lorem Ipsum generators on the Internet king this the first true generator</p>
                                    </div>
                                </div>
                                <div className='col-md-8'>
                                <>
                                        <>
                                           
                                            <div class="custom-skillbar-title"><span>Photoshop</span></div>
                                            <div class="skill-bar-percent">95%</div>
                                            <div class="skillbar-bg" data-percent="95%">
                                                <div class="custom-skillbar" style={{width: "95%"}}></div>
                                            </div>
                                           
                                            <div class="custom-skillbar-title"><span>Jquery</span></div>
                                            <div class="skill-bar-percent">65%</div>
                                            <div class="skillbar-bg" data-percent="65%">
                                                <div class="custom-skillbar" style={{width: "75%"}}></div>
                                            </div>
                                          
                                            <div class="custom-skillbar-title"><span>HTML5</span></div>
                                            <div class="skill-bar-percent">75%</div>
                                            <div class="skillbar-bg" data-percent="75%">
                                                <div class="custom-skillbar" style={{width: "85%"}}></div>
                                            </div>
                                            <div class="custom-skillbar-title"><span>PHP</span></div>
                                            <div class="skill-bar-percent">71%</div>
                                            <div class="skillbar-bg" data-percent="71%">
                                                <div class="custom-skillbar" style={{width: "65%"}}></div>
                                            </div>
                                        </>
                                    </>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
           
        </section>

    );
}

export default Skills;
