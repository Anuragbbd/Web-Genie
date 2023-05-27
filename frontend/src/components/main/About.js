import React from 'react'

const About = () => {
  return (
    <div class="bg-image " style={{backgroundImage: `url('/about us page BG.jpg')` }}>
    <div className='container align-item center vh-100' >
      <div className=" mt-3">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/01/about-us-page-examples-1-61fd8f9784626-sej.jpg" alt="animated pic" class='w-100' style={{}}/>
              
            </div>
            <div className="col-md-6">
              <h1 className='text-center text-white'><b>About Us</b></h1>
              <p style={{ fontSize: '18px' }} className='text-white'>
                At the  <span style={{ fontSize: '35px', color: 'green' }} ><i><b>Web Genie</b></i></span>, we are passionate about revolutionizing the way coders create and share <span style={{color:'red'}}><i>virtual tours</i></span>. We understand that the process of generating virtual tours can often be complex and time-consuming, requiring technical knowledge and experience. That's why we have developed a groundbreaking platform that aims to change the game.
              </p>
              <p style={{ fontSize: '18px' }} className='text-white'>
                Our platform is designed to provide coders with an efficient and user-friendly interface, eliminating the need for prior expertise or technical skills. With our innovative voice assistant technology, creating and customizing virtual tours becomes as simple as speaking your commands. Whether you're a seasoned coder or a beginner, our platform empowers you to effortlessly bring your virtual tour ideas to life.
              </p>

              <p style={{ fontSize: '18px' }} className='text-white'>
                We believe in the power of accessibility and convenience. Our goal is to make the process of generating virtual tours easier, faster, and more efficient for every coder out there. By removing the barriers to entry, we strive to democratize the creation and sharing of virtual tours, enabling anyone with a creative vision to bring their ideas to reality.
              </p>

              <p style={{ fontSize: '18px' }} className='text-white'>
                Join us on this exciting journey as we transform the way virtual tours are created and shared. Experience the power of our Voice Assistant based Tour Generator and unlock new possibilities in the world of virtual exploration.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About;