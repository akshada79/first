import React from "react";
import './App.css'
import clg1 from './college1.jpg';
import clg2 from './college2.jpg';
import clg3 from './college3.jpg';
import clg13 from './college13.jpg';
import clg10 from './college10.jpg';
import clg6 from './college6.jpg';
import clg7 from './college7.jpg';
import clg8 from './college8.jpg';
import clg11 from './college11.jpg';
import clg14 from './college14.jpg';
import clg15 from './college15.jpg';
import clg16 from './college16.jpg';
function Collegefeast() {
  return (
    <div className='container-fluid bg-warning-subtle'><br></br>
      <h1 className="head1">cOLLEGE FEAST</h1><hr></hr>
    <div className='row'>
    <div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"20px",marginLeft:"5px"}}>
  <img src={clg1} class="card-img-top" alt="..."/>
  </div>
  </div>
  <div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"20px",marginLeft:"5px"}}>
  <img src={clg3} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"20px",marginLeft:"5px"}}>
  <img src={clg8} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"20px",marginLeft:"5px"}}>
  <img src={clg16} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"200px",marginLeft:"5px"}}>
  <img src={clg6} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"200px",marginLeft:"5px"}}>
  <img src={clg2} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"200px",marginLeft:"5px"}}>
  <img src={clg7} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"200px",marginLeft:"5px"}}>
  <img src={clg10} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"-79px",marginLeft:"5px"}}>
  <img src={clg11} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"-79px",marginLeft:"5px"}}>
  <img src={clg13} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"-79px",marginLeft:"5px"}}>
  <img src={clg14} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"-79px",marginLeft:"5px"}}>
  <img src={clg15} class="card-img-top" alt="..."/>
  </div>
</div>
</div>
</div>
  );
}

export default Collegefeast;

