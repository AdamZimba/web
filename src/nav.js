import React from 'react'
import'./nav.css';






function nav() {
  return (
    <div className='nav'>
     
      <img 
         className='logo_icon'
         src="images/sample24.png"
         alt=""
         />
         <div className='nav_center'>
           <input type="text"/>
           <img 
           src="images/icons8-search-50.png"
           alt=""/>

         </div>

         <div className='nav_right'>
           <ul>   
             
           <button><a href='/'>HOME</a></button>      
           <button><a href='/'>PACKAGE</a></button>  
           <button><a href='/'>PROMOTION</a></button>  
           <button><a href='/'>ABOUT US</a></button>  
           
           
           
          
           </ul>


         </div>
      
      
     

    </div>
  )
}

export default nav