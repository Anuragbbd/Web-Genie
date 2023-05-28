import React from 'react'

const About = () => {
  return (
    <div class="bg-image" 
       style={{backgroundImage: `url('/about-us BG.jpg')`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
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
              Welcome to  <span style={{ fontSize: '35px', color: 'green' }} ><i><b>Web Genie</b></i></span>,  your ultimate web enhancement solution! We specialize in creating cutting-edge plugins that empower website owners to provide an interactive and user-friendly experience for their visitors.
              </p>
              <p style={{ fontSize: '18px' }} className='text-white'>
              At Web Genie, we understand the importance of seamless navigation and user engagement. Our mission is to simplify the process of integrating advanced features into websites, allowing businesses to enhance their online presence effortlessly.
              </p>

              <p style={{ fontSize: '18px' }} className='text-white'>
              Our feature-rich plugin enables you to effortlessly add a voice-activated search bar to your website. With our speech recognition technology, your visitors can simply speak their queries, making searching for information a breeze. Say goodbye to traditional search boxes and welcome the future of web browsing.
              </p>

              <p style={{ fontSize: '18px' }} className='text-white'>
              In addition to our voice-activated search functionality, our plugin also offers a unique website tour feature. It allows website owners to guide their visitors through the various sections and features of their site, providing an immersive and informative experience. Showcasing your website's highlights has never been easier.
              </p>

              <p style={{ fontSize: '18px' }} className='text-white'>
              We believe in the power of collaboration and customization. Our plugin is designed to seamlessly integrate into your existing website code, regardless of the platform or programming language you use. We offer flexible customization options, allowing you to tailor the appearance and behavior of the search bar and website tour to match your brand identity.
              </p>

              <p style={{ fontSize: '18px' }} className='text-white'>
              Thank you for choosing Web Genie as your web enhancement partner. Discover the possibilities and take your website to new heights with our voice-activated search bar and immersive website tour. To learn more about our plugin and how it can benefit your website, visit our website or contact our team. We look forward to being a part of your online success journey!
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