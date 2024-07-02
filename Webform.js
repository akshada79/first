import React from 'react'
import wd from './web1.jpg'
function Webform() {
  return (
    <div>
      <br></br>
      <br></br>
      <div id='form' className='form1'>
        <br></br>
        <br></br>
        <br></br>
        <div className='container bg-transperent' style={{ border: "solid white 2px", borderRadius: "10px", Filter: "blur 2px" }}>
          <h1 className='text2  py-4 text-white' style={{ fontSize: "30px" }}>BOOKING FORM !</h1>
          <div className='container mt-3 py-4 bg-transperent text-white'>
            <form class="row g-3">
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">First Name</label>
                <input type="text" class="form-control " id="inputEmail4" />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="inputPassword4" />
              </div>
              <div class="col-6">
                <label for="inputAddress" class="form-label">Phone No</label>
                <input type="tel" class="form-control" id="inputAddress" />
              </div>
              <div class="col-6">
                <label for="inputAddress" class="form-label">Email ID</label>
                <input type="text" class="form-control" id="inputAddress" />
              </div>

              <div class="col-6">
                <label for="inputAddress2" class="form-label">Event Date</label>
                <input type="date" class="form-control" id="inputAddress2" />
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">Event Type</label>
                {/* <input type="text" class="form-control" id="inputCity"/> */}
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>Birthday</option>
                  <option>Wedding</option>
                  <option>PreWedding</option>
                  <option>Engagement</option>
                  <option>College Feast</option>
                  <option>Mandatory Shoot</option>
                  <option>Other Events</option>
                </select>

              </div>
              <div class="col-md-6">
                <label for="inputcity" class="form-label">Description</label>
                <input itemType="textarea" class="form-control" id="inputCity" />
              </div>
              <br></br>
              <br></br>
              <div class="col-12 m-1">
                <button type="submit" class="btn bg-white">Book Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Webform
