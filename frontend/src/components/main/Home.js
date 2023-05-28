import React from 'react'

const Home = () => {
  return (
    <div className='home-page bg-image'
      style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/img/home page BG.jpg')` }}>
      

      <h1 className="text-center tex-dark display-1 fw-bold p-4" style={{ color: "purple" }}>
        Home Page
      </h1>



    </div>
  )
}

export default Home;