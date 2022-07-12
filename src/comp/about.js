import React from "react";
import dp1 from "../imgs/download.jpg";
import dp from "../imgs/dp.png";
import { AiOutlineVideoCamera } from "react-icons/ai";
const About = () => {
  return (
    <>
      <>
        <section className="section" id="about">
          <div className="section-no "> 2. </div>

          <div className="section-subtitle">
            {" "}
            <span>//</span>Words About{" "}
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="my-dp ">
                  <div className="my-name">Umair.</div>
                  <img src={dp} className="img" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="main-about fl-wrap">
                  {/* <h5>Curabitur convallis fringilla diam</h5> */}
                  <h2>
                    Innovative solutions
                    <br />
                    to boost <span> your creative </span> projects
                  </h2>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                    Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                    suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.
                    Curabitur convallis fringilla diam sed aliquam. Sed tempor
                    iaculis massa faucibus feugiat. In fermentum facilisis
                    massa, a consequat purus viverra.
                  </p>
                  <div className="features-box-container fl-wrap">
                    <div className="row">
                      <div className="features-box col-md-6">
                        <div className="time-line-icon">
                          <i>
                            <AiOutlineVideoCamera />
                          </i>
                        </div>
                        <h3>Web Design</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas in pulvinar neque.{" "}
                        </p>
                      </div>
                      <div className="features-box col-md-6">
                        <div className="time-line-icon">
                          <i>
                            <AiOutlineVideoCamera />
                          </i>
                        </div>
                        <h3>Ui/Ux Design</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas in pulvinar neque.{" "}
                        </p>
                      </div>
                      <div className="features-box col-md-6">
                        <div className="time-line-icon">
                          <i>
                            <AiOutlineVideoCamera />
                          </i>
                        </div>
                        <h3>Branding</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas in pulvinar neque.{" "}
                        </p>
                      </div>
                      <div className="features-box col-md-6">
                        <div className="time-line-icon">
                          <i>
                            <AiOutlineVideoCamera />
                          </i>
                        </div>
                        <h3>Ecommerce</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas in pulvinar neque.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <a href="#about" className="about-btn btn">
                    my portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default About;
