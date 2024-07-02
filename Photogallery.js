import React from 'react';
import Slider from "react-slick";
import ph1 from './web8 (2).jpg'
import ph2 from './web5.jpg'
import ph3 from './web4.jpg'
import ph4 from './web6.jpg'
import ph5 from './web7.jpg'
import ph6 from './web8.jpg'
import vs from './VISUAL VIBES (1).png'
import Wedding from './Wedding';

// import './Photogallery.css';

const Photogallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="slider-container">
  
          <Slider {...settings}>
            <div>
              <img src={vs} style={{width:"1490px",height:"730px",marginTop:"67px"}}></img>
             
            </div>
            <div>
            <img src={ph2} style={{width:"1490px",height:"730px",marginTop:"67px"}}></img>
            </div>
            <div>
            <img src={ph5} style={{width:"1490px",height:"730px",marginTop:"67px"}}></img>
            </div>
            <div>
            <img src={ph4} style={{width:"1490px",height:"730px",marginTop:"67px"}}></img>
            </div>
            <div>
            <img src={ph6} style={{width:"1490px",height:"730px",marginTop:"67px"}}></img>
            </div>
            <div>
            <img src={ph1} style={{width:"1490px",height:"730px",marginTop:"67px"}}></img>
            </div>
          </Slider>
          
        </div>
        
        
      );
    }
    

export default Photogallery;