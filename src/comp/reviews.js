import React from 'react';
import img3 from "../imgs/3.jpg";
import img4 from "../imgs/4.jpg";
import img5 from "../imgs/5.jpg";
import {AiFillStar} from 'react-icons/ai';
import {FaQuoteRight} from 'react-icons/fa';


const Reviews = () => {
    return (
        <section className='section review-section'>
           
        <div className="section-no  " > 5.  </div>
        <div className="section-subtitle">
            {" "}
            CLIENTS Words{" "}<span>//</span>
          </div>
                       <>
                           <div className='container'>
                               <div className='review-title '>
                                   <h1>My  CLIENTS AND<span>TESTIMONIALS</span></h1>
                                  <p>Reviews</p>
                               </div>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className='review-card'>
                                            <div className='reviewer-img'>
                                            <img src={img3} />

                                            </div>
                                            <div className='stars'>
                                                <AiFillStar/>
                                                <AiFillStar/>
                                                <AiFillStar/>
                                                <AiFillStar/>
                                                <AiFillStar/>

                                            </div>
                                            <h2 className='reviewer-name'>Name</h2>
                                            <p className='reviewer-review'>"In ut odio libero, at vulputate urna. Nulla tristique mi a ma
                                                ssa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida.
                                            In ut odio libero, at vulputate urna. Nulla tristique mi a mass
                                            a convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida."
                                            </p>
                                            <div className='qoute-sign'><FaQuoteRight/></div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='review-card'>
                                            <div className='reviewer-img'>
                                            <img src={img3} />

                                            </div>
                                            <div className='stars'>
                                                <AiFillStar/>
                                                <AiFillStar/>
                                                <AiFillStar/>
                                                <AiFillStar/>
                                                <AiFillStar/>

                                            </div>
                                            <h2 className='reviewer-name'>Name</h2>
                                            <p className='reviewer-review'>"In ut odio libero, at vulputate urna. Nulla tristique mi a ma
                                                ssa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida.
                                            In ut odio libero, at vulputate urna. Nulla tristique mi a mass
                                            a convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida."
                                            </p>
                                            <div className='qoute-sign'><FaQuoteRight/></div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='review-card'>
                                            <div className='reviewer-img'>
                                            <img src={img3} />

                                            </div>
                                            <div className='stars'>
                                                <AiFillStar/>
                                                <AiFillStar/>
                                                <AiFillStar/>
                                                <AiFillStar/>
                                                <AiFillStar/>

                                            </div>
                                            <h2 className='reviewer-name'>Name</h2>
                                            <p className='reviewer-review'>"In ut odio libero, at vulputate urna. Nulla tristique mi a ma
                                                ssa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida.
                                            In ut odio libero, at vulputate urna. Nulla tristique mi a mass
                                            a convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida."
                                            </p>
                                            <div className='qoute-sign'><FaQuoteRight/></div>
                                        </div>
                                    </div>
                                </div>
                           </div>

                           
                       </>
                   
                     
        </section>
    );
}

export default Reviews;
