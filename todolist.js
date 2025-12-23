import React from 'react'

import { MdDelete } from "react-icons/md";

import { MdModeEditOutline } from "react-icons/md";



export default function todolist(props) {

const {items} = props;


  return (
    <>
    <div>

<div  style={{display:"flex" , flexDirection:"column" , alignItems:"center"}}>
           
      <div>

  {items.map((elements , index)=>  


<div  className='boxhead'  key={index}>

  <div className='boxsec'>  
    <h6>{elements}</h6>
  </div>

  <div  className='btnbox'>

    <button className='editbtn' 
       onClick={()=> props.edit(elements,index)} ><MdModeEditOutline/></button><button className='deletebtn'  onClick={() => props.deletes(elements)}  ><MdDelete/></button>

  </div>


</div>


)}
      </div>
    </div> 

      {props.items.length > 0 ? (

<div style={{display:"flex", alignItems:"center", justifyContent:"center", marginLeft:"30px" , marginTop:"10px"}}><button  onClick={props.clearly} disabled={props.items.length === 0} className='btnss' >Clear All Lists</button></div>

      ):(null)
    
    }
    </div>
    </> 

  )
}
