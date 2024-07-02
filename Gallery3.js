import React from 'react'
import Slider from "react-slick";
import CardUI1 from './CardUI1';
import imgg1 from './birthdayfront.jpg';
import imgg2 from './anniversaryfront.jpg';
import imgg3 from './weddingfront.jpg';
import imgg4 from './preweddingfront1.jpg';
import imgg5 from './babyshowerfront1.jpg';
import imgg7 from './collegefeast.jpg';
import './App.css'
import { Link } from 'react-router-dom'
function Gallery2() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
<div className="slider-container">
      <Slider {...settings}>
        <div><br></br><br></br>
          <h3>
          <CardUI1 img={imgg1} title="Birthday" way='/bday' event="Birthday" ></CardUI1>
          </h3>
        </div>
        <div><br></br><br></br>
          <h3>
          <CardUI1 img={imgg2} title="Anniversary" way='/anni'></CardUI1>
          </h3>
        </div>
        <div><br></br><br></br>
          <h3> 
          <CardUI1 img={imgg3} title="Wedding" way='/wedd'></CardUI1>
            </h3>
        </div>
        <div><br></br><br></br>
          <h3>
          <CardUI1 img={imgg4} title="Pre-wedding" way='/pwedd'></CardUI1>
          </h3>
        </div>
        <div><br></br><br></br>
          <h3>
          <CardUI1 img={imgg5} title="Baby shower" way='/bshower'></CardUI1>
          </h3>
        </div>
        <div><br></br><br></br>
          <h3>
          <CardUI1 img={imgg7} title="College feast" way='/clgf'></CardUI1>
          </h3>
        </div>
      </Slider>
      <br></br><br></br>
    </div>
  )
}

export default Gallery2