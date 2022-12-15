import React from 'react'
import'./Home.css';
import Banner from './Banner';
import House from './House';




function Home() {
  return (
    <div className='Home'>
      <Banner />
      <h1>Rentals</h1>
      <div className='home_section'>
      
      <House 
      src="https://a0.muscache.com/im/pictures/3481f988-fb45-44d9-ac67-9e72652e4fd6.jpg?im_w=1200"
     title="Online Experiences"
     description="Unique activities we can do 
          together, led by a world of host." />
      <House src="https://a0.muscache.com/im/pictures/1b7e0c48-d3b0-4916-b7e3-a97d61774d11.jpg?im_w=1200"
     title="Online Experiences"
     description="Unique activities we can do 
          together, led by a world of host." />
      <House src="https://a0.muscache.com/im/pictures/2fe316f4-a2e2-4163-b750-88b070b1e3e0.jpg?im_w=1200"
     title="Online Experiences"
     description="Unique activities we can do 
          together, led by a world of host."  />

      </div>
      <div className='home_section'>
      <House 
      src="https://a0.muscache.com/im/pictures/3481f988-fb45-44d9-ac67-9e72652e4fd6.jpg?im_w=1200"
     title="Online Experiences"
     description="Unique activities we can do 
          together, led by a world of host." />
      <House src="https://a0.muscache.com/im/pictures/1b7e0c48-d3b0-4916-b7e3-a97d61774d11.jpg?im_w=1200"
     title="Online Experiences"
     description="Unique activities we can do 
          together, led by a world of host." />
      <House src="https://a0.muscache.com/im/pictures/2fe316f4-a2e2-4163-b750-88b070b1e3e0.jpg?im_w=1200"
     title="Online Experiences"
     description="Unique activities we can do 
          together, led by a world of host."  />



      </div>
      
     
     
      
      
     

    </div>
  )
}

export default Home