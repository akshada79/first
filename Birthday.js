import React from "react";
import './App.css'
import bd1 from './birthday1.jpg';
import bd2 from './birthday2.jpg';
import bd10 from './birthday10.jpg';
import bd4 from './birthday4.jpg';
import bd5 from './birthday5.jpg';
import bd6 from './birthday6.jpg';
import bd7 from './birthday7.jpg';
import bd8 from './birthday8.jpg';
import bd9 from './birthday9.jpg';
import bd11 from './birthday11.jpg';
import bd12 from './birthday12.jpg';
import bd13 from './birthday13.jpg';
function Birthday() {
  return (
    <div className='container-fluid bg-warning-subtle'><br></br>
      <h1 className="head1">BIRTHDAY</h1><hr></hr>
    <div className='row'>
    <div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"20px",marginLeft:"5px"}}>
  <img src={bd1} class="card-img-top" alt="..."/>
  </div>
  </div>
  <div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"20px",marginLeft:"5px"}}>
  <img src={bd7} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"20px",marginLeft:"5px"}}>
  <img src={bd6} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"20px",marginLeft:"5px"}}>
  <img src={bd4} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"200px",marginLeft:"5px"}}>
  <img src={bd2} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"200px",marginLeft:"5px"}}>
  <img src={bd10} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"200px",marginLeft:"5px"}}>
  <img src={bd12} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"200px",marginLeft:"5px"}}>
  <img src={bd13} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"200px",marginLeft:"5px"}}>
  <img src={bd9} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"200px",marginLeft:"5px"}}>
  <img src={bd11} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"200px",marginLeft:"5px"}}>
  <img src={bd5} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"380px",marginTop:"200px",marginLeft:"5px"}}>
  <img src={bd8} class="card-img-top" alt="..."/>
  </div>
</div>
</div>
</div>
  );
}

export default Birthday;
