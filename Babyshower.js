import React from "react";
import './App.css'
import bs1 from './babyshower1.jpg';
import bs2 from './babyshower2.jpg';
import bs3 from './babyshower3.jpg';
import bs4 from './babyshower4.jpg';
import bs5 from './babyshower5.jpg';
import bs6 from './babyshower6.jpg';
import bs7 from './babyshower7.jpg';
import bs8 from './babyshower8.jpg';
import bs9 from './babyshower9.jpg';
import bs10 from './babyshower10.jpg';
import bs11 from './babyshower11.jpg';
import bs12 from './babyshower12.jpg';
function Babyshower() {
  return (
    <div className='container-fluid bg-warning-subtle'><br></br>
      <h1 className="head1">BABY SHOWER</h1><hr></hr>
    <div className='row'>
    <div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"20px",marginLeft:"5px"}}>
  <img src={bs1} class="card-img-top" alt="..."/>
  </div>
  </div>
  <div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"20px",marginLeft:"5px"}}>
  <img src={bs2} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"20px",marginLeft:"5px"}}>
  <img src={bs3} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"20px",marginLeft:"5px"}}>
  <img src={bs10} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"200px",marginLeft:"5px"}}>
  <img src={bs5} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"200px",marginLeft:"5px"}}>
  <img src={bs6} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"200px",marginLeft:"5px"}}>
  <img src={bs7} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"200px",marginLeft:"5px"}}>
  <img src={bs8} class="card-img-top" alt="..."/>
  </div>
</div>
<div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"-79px",marginLeft:"5px"}}>
  <img src={bs9} class="card-img-top" alt="..."/>
  </div>
  </div>
  <div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"-79px",marginLeft:"5px"}}>
  <img src={bs4} class="card-img-top" alt="..."/>
  </div>
  </div>
  <div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"-79px",marginLeft:"5px"}}>
  <img src={bs11} class="card-img-top" alt="..."/>
  </div>
  </div>
  <div className='col-3'>
    <div class="card" className="cardesign" style={{width:"343px",height:"400px",marginTop:"-79px",marginLeft:"5px"}}>
  <img src={bs12} class="card-img-top" alt="..."/>
  </div>
  </div>
</div>
</div>
  );
}

export default Babyshower;
