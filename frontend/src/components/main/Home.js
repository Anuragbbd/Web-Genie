import React from 'react'

const Home = () => {
  return (
    <div className='home-page bg-image'
      style={{ backgroundImage: `url('/img/home page BG.jpg')` }}>
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>

      <h1 className="text-center tex-dark display-1 fw-bold p-4" style={{ color: "purple" }}>
        Home Page
      </h1>



    </div>
  )
}

export default Home;