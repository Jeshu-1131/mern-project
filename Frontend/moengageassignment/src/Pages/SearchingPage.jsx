import React,{useState} from 'react';
import responsecodesdata from '../assets/responcecodes.json';
import './Searchingpage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Searching = () => {
  const[searchItem,setSearchItem]=useState('');
  const[listtosave,setListtosave]=useState([]);

  const handleSearch=e=>{
    setSearchItem(e.target.value);
  }
 

  const filteredData=responsecodesdata.filter(item=>item.status_code.toString().includes(searchItem))
  console.log(filteredData);

  const saveList=async()=>{
    setListtosave(filteredData);
    let res = await axios.post("http://localhost:5000/api/auth/listdata",filteredData)
    console.log(res);
  }
console.log(listtosave,'gjk');
  const displayData=searchItem?filteredData:responsecodesdata;
  return (
    <div>
      <h1>Home Page</h1>
<div>
<input style={{width:'20%',height:'40%',marginLeft:'10%'}} type='text' placeholder='🔍Search...' value={searchItem} onChange={handleSearch} />
<Link style={{float:'right',marginRight:'15%',textDecoration:'none',border:'1px solid',fontWeight:'bold'}} to='/savedlist'>Saved List Data</Link>
</div>
     <ul className='response-codes'>
      {
        displayData.map(item=>(
          <div key={item.status_code} className='response-code-card'>
            <img className='response-code-image' src={item.image.jpg} alt="" />
            <li className='response-code-title'>{item.title}</li>
            <p className='response-code-status'>{item.status_code}</p>
          </div>
        ))
      }
     </ul>
     <button style={{cursor:'pointer',float:"right",marginRight:"8%",padding:"1%",background:'blue',border:'blue',borderRadius:'5%',color:'white'}}  onClick={saveList} >Save the List</button>
    </div>
  );
};

export default Searching;