import React from 'react'
import Titles1 from './Titles1'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardUI from './CardUI';
import Footer from './Footer';
import Header from './Header';
import im9 from './Screenshot 2024-06-12 100002.png'
import im1 from './pexels-ajaybhargavguduru-863988.jpg'
import im2 from './pexels-pixabay-209977.jpg'
import im3 from './pexels-pixabay-34514.jpg'
import im4 from './pexels-jopwell-1325654.jpg'
import im5 from './pexels-pixabay-159515.jpg'
import im6 from './pexels-pixabay-279004.jpg'
import im7 from './pexels-mike-468229-1171084.jpg'
import im8 from './pexels-pixabay-358042.jpg'
import im10 from './pexels-ajaybhargavguduru-863988.jpg'
import im12 from './Screenshot 2024-06-12 113841.png'
import im13 from './64a7a12528f46.png'
import Navbar1 from './Navbar1';
import Array from './Array';
import Object from './Object';
import Carousel1 from './Carousel1';
import Aboutus from './Aboutus';
import Arrayofobject from './Arrayofobject';
import Table from './Table'
import Simpleslider from './Simpleslider';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Aboutus1 from './Aboutus1';
import Contactus from './Contactus';
import Home from './Home.js'
import Navbar2 from './Navbar2.js';
import SimpleSlider1 from './Simpleslider1.js';
import Simpleslider1 from './Simpleslider1.js';
import Facilities from './Facilities.js';
import Coaching from './Coaching.js';
import Operation from './Operation.js';
import Image1 from './Image1.js';
import Form from './Form.js';
import Signin from './Signin.js';
import Effecthook from './Effecthook.jsx';
import Cardhook from './Cardhook.jsx';
import Webform from './Webform.js';
import CardImage from './CardImage.jsx';
import Navbarweb from './Navbarweb.js';
import Footerweb from './Footerweb.js';
import Gallaryweb from './Gallaryweb.js';
import Demo from './Demo.js';
import Wedding from './Wedding.js';
import Prewedding from './Prewedding.js';
import Anniversary from './Anniversary.js';
import Photogallery from './Photogallery.js';
import Aboutweb from './Aboutweb.js';
import Webabout from './Webabout.js';
import Webwork from './Webwork.js';
function App() {
  return (
    <>
{/* <Anniversary></Anniversary> */}


{/* <Prewedding></Prewedding> */}

{/* <Wedding></Wedding> */}



{/* <Demo></Demo> */}
<BrowserRouter>
<Navbarweb></Navbarweb>
<Routes>
<Route path="/Home" element={<Photogallery/>}/>
  <Route path="/BookNow" element={<Webform/>}/>
  
</Routes>
<Aboutweb></Aboutweb>
<Webwork></Webwork>
<br></br>
<Footerweb></Footerweb>
</BrowserRouter>
{/* <Photogallery></Photogallery> */}


{/* <Navbarweb></Navbarweb>
<Photogallery></Photogallery>
<br></br>
<br></br>
<br></br>
<br></br>
<Webabout></Webabout>
<Footerweb></Footerweb> */}
{/* <Aboutweb></Aboutweb> */}

{/* <Footerweb></Footerweb> */}
{/* <Gallaryweb></Gallaryweb> */}


    {/* <Webform></Webform> */}


      {/* <CardImage></CardImage> */}

    
    {/* <Cardhook></Cardhook> */}

<br></br>
    {/* <Effecthook></Effecthook> */}


    {/* <Signin></Signin> */}


    {/* <Form></Form> */}


    {/* <Operation></Operation>
    <br></br>
   <Image1></Image1> */}


    {/* <BrowserRouter>
    <Navbar2/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/About'element={<Aboutus1/>}/>
        <Route path='/Contact'element={<Contactus/>}/>
      </Routes>
    </BrowserRouter> */}


  {/* <BrowserRouter>
  <Navbar1 img={im9}/>
    <Routes>
      <Route path='/Home'element={<Simpleslider1/>}/>
      <Route path='/Sports'element={<Simpleslider/>}/>
      <Route path='/Facilities'element={<Facilities/>}/>
      <Route path='/Coaching'element={<Coaching/>}/>
      <Route path='/Aboutus1'element={<Aboutus1/>}/>
      <Route path='/Contactus'element={<Contactus/>}/>
      <Route path='/Register' element={<Form/>}/>
    </Routes>
  </BrowserRouter>
<br></br>
<br></br>
<br></br>
<Footer></Footer> */}


{/* <Simpleslider></Simpleslider> */}
<br></br>
  {/* <Simpleslider1></Simpleslider1> */}
  <br></br>


    {/* <Navbar1 img={im9}></Navbar1> */}
    {/* <br></br>
    <h3 className='font'>A-Z Sports</h3>
    <Simpleslider></Simpleslider>
    <br></br>
    <h1 className='title2'>ABOUT US</h1>
        <div>
          <Aboutus img={im12} heading='Vidhi Teckchndani' achieve='Gold Medalist at the Woko Indian Open International Kickboxing Tournament'title='Our education in any subject will
     reflect its timeless fundamentals, its current context, and applications. There is so much 
     scientific discovery taking place, at the intersection of fields, of biology, computing, medicine, the 
     social sciences and everywhere else. We will provide students and faculty with an environment to engage this world,
      to discover new truths, make new applications to create and share knowledge.'></Aboutus>
        <Aboutus title='Somaiya Vidyavihar fosters an ecosystem that excels in education, research, consultancy, and service. It is a place where knowledge is preserved, disseminated and new knowledge is created. It is well-known for its Science, Technology, Medicine, Engineering, Management, Social Sciences, Humanities, and Commerce programs, as well as for its studies in various Faiths and Cultures of India.'
      img={im13} heading='Apoorva Patil' achieve='export default App
Gold Medalist in Judo Commonwealth Games,Walsall,England from 25th September 2019'></Aboutus>
        </div> */}


    {/* <Arrayofobject></Arrayofobject> */}
    {/* <Table></Table> */}
    {/* <Array></Array>
    <Object></Object> */}
    {/* <div>
      <Navbar1 img={im9}></Navbar1>
      <br></br>
      <div>
     <Carousel1 img={im10} label="Champions are not born ,They are made right here."></Carousel1>
     </div>
      <br></br>
      <h1 className='title2'>ABOUT US</h1>
        <div>
          <Aboutus img={im12} heading='Vidhi Teckchndani' achieve='Gold Medalist at the Woko Indian Open International Kickboxing Tournament'title='Our education in any subject will
     reflect its timeless fundamentals, its current context, and applications. There is so much 
     scientific discovery taking place, at the intersection of fields, of biology, computing, medicine, the 
     social sciences and everywhere else. We will provide students and faculty with an environment to engage this world,
      to discover new truths, make new applications to create and share knowledge.'></Aboutus>
        <Aboutus title='Somaiya Vidyavihar fosters an ecosystem that excels in education, research, consultancy, and service. It is a place where knowledge is preserved, disseminated and new knowledge is created. It is well-known for its Science, Technology, Medicine, Engineering, Management, Social Sciences, Humanities, and Commerce programs, as well as for its studies in various Faiths and Cultures of India.'
      img={im13} heading='Apoorva Patil' achieve='export default App
Gold Medalist in Judo Commonwealth Games,Walsall,England from 25th September 2019'></Aboutus>
        </div>
      <br></br>
      <br></br>
      <h2 className='heading text-success'>A to Z Sports</h2>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'>
          <CardUI img={im1} title="Swimming" info="Practice like you’re not good enough to win. Race like you’re too good to lose."></CardUI>
          </div>
          <div className='col-3'>
          <CardUI img={im2} title="Badminton" info="Fly like a shuttlecock, and dream big like a badminton champ."></CardUI>
          </div>
          <div className='col-3'>
          <CardUI img={im3} title="Running" info="One run can change your day, many runs can change your life."></CardUI>
          </div>
          <div className='col-3'>
          <CardUI img={im4} title="Slum golf" info="Golf at times can be an endless pit of frustration."></CardUI>
          </div>
          <div className='col-3'>
          <CardUI img={im5} title="Rugby" info="Rugby is a game of respect, both for your opponents and for the sport itself."></CardUI>
          </div>
          <div className='col-3'>
          <CardUI img={im6} title="Baseball" info=" You can be any size and be successful...you are the best player."></CardUI>
          </div>
          <div className='col-3'>
          <CardUI img={im7} title="Football" info="The only place that success comes before work is in the dictionary."></CardUI>
          </div>
          <div className='col-3'>
          <CardUI img={im8} title="Basketball" info="Basketball doesn't build character, it reveals it"></CardUI>
          </div>
          </div>
        </div>
        <br></br>
     <Footer></Footer>
    </div> */}
    <br></br>

    </>
  );

}
export default App

