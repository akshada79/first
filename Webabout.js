import React from 'react'
import ab3 from './web4.jpg'
function Webabout() {
  return (
    <div>
      <div className="Webabout">
        <div className='container-fluid'>
            <div className="row">
              <div className='col-6'>
                <p className="intro">
                 Welcome to Visual Vibes, where we specialize in capturing the magic of life's most memorable events. From the joyous celebrations of birthdays and weddings to the vibrant energy of college fests and the tender moments of baby showers, we are dedicated to preserving your special occasions with creativity and care.
                </p>
                <h2 className="heading">Why hire us?</h2>
                <div className="para">
                    <p>
                        <strong>Diverse Event Expertise</strong><br />
                        Specializing in weddings, birthdays, baby showers, and college fests, we adapt to any occasion to capture its unique essence.
                    </p>
                    <p>
                        <strong>High-Quality Imagery</strong><br />
                        Using top-notch equipment and techniques, we deliver crisp, vibrant photos that tell your story beautifully.
                    </p>
                    <p>
                        <strong>Personalized Approach</strong><br />
                        We tailor our services to meet your specific needs and preferences, ensuring your photos reflect your style and event atmosphere.
                    </p>
                    </div>
                    </div>
                    <div className='col-6'>
                        <img src={ab3} style={{width:"700px",height:"600px"}}></img>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Webabout

