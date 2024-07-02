import logo from './logo.svg';
import './App.css';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header";
import Titles from './Titles';
import imgg1 from './birthdaytext.jpg';
import CardUI1 from './CardUI1';
import Array from './Array';
import Object from './Object';
import ArrayOfObject from './ArrayOfObject';
import Table from './Table';
import MultipleItems from './MultipleItems';
import CardUI2 from './CardUI2.js';
// import Home from './Home.js';
// import About from './About.js';
// import Contactus from './Contactus.js';
// import Birthday from './Birthday.js';
// import Wedding from './Wedding.js';
// import Engagement from './Engagement.js';
// import Prewedding1 from './Prewedding1.js';
// import Events from './Events.js';
// import Babyshower from './Babyshower.js';
// import Collegefeast from './Collegefeast.js';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import UseStateEx from './UseStateEx.js';
import Effecthook from './Effecthook.jsx';
import Footer3 from './Footer3.js';
import Cardhook from './Cardhook.jsx';
import Gallery from './Gallery.js';
import Gallery2 from './Gallery2.js';
import Gallery3 from './Gallery3.js';
import Birthday from './Birthday.js';
import Demo1 from './Demo1.js';
import Collegefeast from './Collegefeast.js';
import Babyshower from './Babyshower.js';
import Wedding from './Wedding.js';
import Prewedding from './Prewedding.js';
import Anniversary from './Anniversary.js';
function App() {
  return (
    <>
      {/* <Object></Object> */}
      {/* <Effecthook/>
    <Cardhook/> */}
      {/* <UseStateEx></UseStateEx> */}
      <BrowserRouter>
        <Header /><br></br><br></br><br></br>
        {/* <Gallery2></Gallery2> */}
        {/* <Demo1/> */}

        <Routes>
          <Route path='/gallery3' element={<Gallery3 />} />
          <Route path='/bday' element={ <Birthday />}/>
          <Route path='/anni' element={ <Anniversary />}/>
          <Route path='/wedd' element={ <Wedding />}/>
          <Route path='/pwedd' element={ <Prewedding />}/>
          <Route path='/bshower' element={ <Babyshower />}/>
          <Route path='/clgf' element={ <Collegefeast/>}/>
        </Routes>
      </BrowserRouter>
     
      {/* <Collegefeast />
      <Babyshower />
      <Wedding />
      <Prewedding />
      <Anniversary /> */}
      <Footer3 />
      {/* <div> */}
      {/* <Titles text="Welcome to sumago infotech"></Titles> */}
      {/* </div><br></br><br></br> */}
      {/* <div className='container-fluid'>
      <div className='row'>
      <div className='col-3'>
        <CardUI1 img={img1} title="My first card" info="ygfibojbgiugobiyg"></CardUI1>
      </div>
      <div className='col-3'>
      <CardUI1 img={img1} title="My first card" info="ygfibojbgiugobiyg"></CardUI1>
      </div>
      <div className='col-3'>
      <CardUI1 img={img1} title="My first card" info="ygfibojbgiugobiyg"></CardUI1>
      </div>
      <div className='col-3'>
      <CardUI1 img={img1} title="My first card" info="ygfibojbgiugobiyg"></CardUI1>
      </div>
      </div>
    </div><br></br><br></br> */}
      {/* <Array></Array> */}
      {/* <ArrayOfObject></ArrayOfObject>
  <br></br>
  <Table></Table>*/}
      {/* <MultipleItems></MultipleItems> */}
    </>

  );
}

export default App;
