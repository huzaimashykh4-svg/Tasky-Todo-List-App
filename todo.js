import React from 'react'
import Todolist from './todolist'

export default function todolist(props) {
  return (
    <div  className='headd'>

      <div className='backk'>
        <div    style={{display:"flex", alignItems:"center", justifyContent:"center",marginBottom:"20px",marginLeft:"44px"}} >
          <h1 className='todotext' >Tasky Todo-List</h1>
        </div>

        <div  style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
          <input  placeholder='Add List'  className="ttt"  value={props.searchs}  onChange={props.Change} />
          {props.update ?(
 <button   className='updatebtn'  onClick={props.updatesbtn} >Update</button>
          ):(

            <button  className='addbtn'  onClick={props.button}>Add</button>

          )
        
          }
         </div>


        <Todolist items={props.items}  deletes={props.deletes}    clearly={props.clearss}  updates={props.update} edit={props.edit} />

        </div>
      
    </div>

  )
}
