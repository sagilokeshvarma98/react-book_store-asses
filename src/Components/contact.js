import React from 'react'

const Contact = ()=>{
    return(
       <div>
           <h2 className='text text-danger' style={{textAlign:'center'}}>Contact Us</h2>
           <div className='container contactDiv' style={{margin:'50px'}}>
               <h5>Vist below mentioned address</h5>
               <ul style={{listStyle:'none'}}>
                   <li>HouseNo : 2/23</li>
                   <li>Bandari Layout</li>
                   <li>NIzampet , Hyderabad</li>
                   <li>500090</li>
               </ul>
               <ul style={{listStyle:'none'}}>
                   <li>Flat no : 203</li>
                   <li>Near Sai baba Temple</li>
                   <li>dammaiguda , Secunderabad</li>
                   <li>500083</li>
               </ul>
           </div>
       </div>
    )
}

export default Contact