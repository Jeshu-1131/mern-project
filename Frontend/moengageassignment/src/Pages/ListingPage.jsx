import React, { useEffect, useState } from 'react';
import "./Searchingpage.css";

const SavedList=()=>{
    const[data,setData]=useState([]);

    const handleDelete=async()=>{
        try{
            await fetch('http://localhost:5000/api/auth/deleteitem',{
                method:'DELETE',
            })
            setData([]);
        }catch(err){
            console.log('Error in deleting the Data',err);
        }
    }
    useEffect(()=>{
        fetch("http://localhost:5000/api/auth/getlist").then(res=>res.json()).then(data=>setData(data));
    },[])
    console.log(data)
    return(
        <div>
            <ul className='response-codes'>
            {
                data.map(item=>(
                    <div  key={item.status_code} className='response-code-card'>
                        <img onClick={()=>alert(`response code is ${item.status_code}`)} className='response-code-image' src={item.image.jpg} alt="" />
            <li className='response-code-title'>{item.title}</li>
            <p className='response-code-status'>{item.status_code}</p>
                    </div>
                ))
            }
        </ul>
        <button style={{marginLeft:'10%',marginRight:"5%",borderRadius:'4px',fontWeight:'bold'}}>Edit</button>
        <button style={{borderRadius:'4px',fontWeight:'bold'}} onClick={handleDelete}>Clear the List</button>
        </div>
    )
}

export default SavedList;