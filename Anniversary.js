import React from "react";
import './App.css'
import ann1 from './anniversary1.jpg';
import ann2 from './anniversary2.jpg';
import ann3 from './anniversary3.jpg';
import ann4 from './anniversary4.jpg';
import ann5 from './anniversary5.jpg';
import ann6 from './anniversary6.jpg';
import ann7 from './anniversary7.jpg';
import ann8 from './anniversary8.jpg';
import ann9 from './anniversary9.jpg';
import ann10 from './anniversary10.jpg';
import ann11 from './anniversary11.jpg';
import ann12 from './anniversary12.jpg';
import ann13 from './anniversary13.jpg';
import ann14 from './anniversary14.jpg';
function Anniversary() {
  return (
    <div className='container-fluid bg-warning-subtle'><br></br>
      <h1 className="head1">ANNIVERSARY</h1><hr></hr>
    <div className='row'>
    <div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"20px",marginLeft:"5px"}}>
  <img src={ann1} class="card-img-top" alt="..."/>
  </div>
  </div>
  <div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"20px",marginLeft:"5px"}}>
  <img src={ann2} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"20px",marginLeft:"5px"}}>
  <img src={ann3} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"20px",marginLeft:"5px"}}>
  <img src={ann12} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"200px",marginLeft:"5px"}}>
  <img src={ann8} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"200px",marginLeft:"5px"}}>
  <img src={ann6} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"200px",marginLeft:"5px"}}>
  <img src={ann7} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"200px",marginLeft:"5px"}}>
  <img src={ann5} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"-79px",marginLeft:"5px"}}>
  <img src={ann9} class="card-img-top" alt="..."/>
  </div>
  </div>
  <div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"-79px",marginLeft:"5px"}}>
  <img src={ann10} class="card-img-top" alt="..."/>
  </div>
  </div>
  <div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"-79px",marginLeft:"5px"}}>
  <img src={ann11} class="card-img-top" alt="..."/>
  </div>
  </div>
  <div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"-79px",marginLeft:"5px"}}>
  <img src={ann14} class="card-img-top" alt="..."/>
  </div>
  </div>
</div>
</div>
  );
}

export default Anniversary;