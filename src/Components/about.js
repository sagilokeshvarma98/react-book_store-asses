import React from 'react'

const About = ()=>{
    return(
      <div className='container'>
           <div className='row aboutDiv'>
           <h2 className='text text-success' style={{textAlign:'center'}}>Our Books</h2>
           <div className='col-sm-6'>
           <img src='http://localhost:8090/book20.jpg'/>
           </div>
           <div className='col-sm-6'>
           <img src='http://localhost:8090/book25.jpg'/>
           </div>
       </div>
      </div>
    )
}

export default About