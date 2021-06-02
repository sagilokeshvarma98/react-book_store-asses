import React,{useEffect,useState} from 'react'
import Request from 'axios'
import './styles.css'
const Books = ()=>{
    async function getBooksData(){
    
            let response = await Request.get("http://localhost:4500/bookTitle")
            booksdata = response.data.map((x)=>(
            <div className='content'>
                <div className="imgDiv">
                    <img src={x.image} alt=""/>
                </div>
                <div className='content'>
                    <h6>Book Name : {x.name}</h6>
                    <h6>Author : {x.author}</h6>
                    <h6>Price : {x.price}</h6>
                </div>
            </div>
            ))
            setData(booksdata)
    }
    let [booksdata,setData] = useState("")
    useEffect(getBooksData,[])
    return(
        <div className='container'>
            {booksdata}
        </div>
        
    )
}

export default Books