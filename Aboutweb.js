import React from 'react';
// import './Aboutus.css';
import wd from './Screenshot 2024-07-01 204642.png'

const Aboutweb = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-6'>
                <img src={wd} style={{width:"780px",height:"600px"}}></img>
                </div>
                <div className='col-6 div2'>
                    <br></br>
                <h5><span><i class="fa-solid fa-camera"></i>  Visual Vibes</span></h5>
                <div className='font'>
                    <h4>SNAPPING,</h4>
                    <h4>JOURNALISM,</h4>
                    <h4>PORTRAITURE</h4>
                    <h2>The Unlimited Photography Experience</h2>
                    <button className='btn3'>Book Now</button>
                    <br></br>
                    <br></br>
                <span className='icon'><i class="fa-solid fa-globe"></i>  www.visualvibes.com</span>
                </div>  
                </div>

                <div className='container'>
                <div className='row formm'>
                    <form >
                    <div className='col-12'>
                    <h2>Feel Free To Ask Anything</h2>
                    <label for="inputEmail4" class="formlabel">Name</label><br></br>
                     <input type="text" class="formcontrol " id="inputEmail4"/>
                     </div>
                     <div className='col-12'>
                     <label for="inputEmail4" class="formlabel">Email</label><br></br>
                     <input type="text" class="formcontrol " id="inputEmail4"/>
                  </div>
                  <div className='col-12'>
                     <label for="inputEmail4" class="formlabel">Message</label><br></br>
                     <input type="text" class="formcontrol " id="inputEmail4"/>
                    </div>
                   
                </form>
                </div>
                </div>
                </div>

        </div>
        
    );
}

export default Aboutweb;