import React, { useState } from 'react'
import './App.css';
import Todo from './component/todo'
import Lopup from './component/popup'



const App = () => {

  const [search , setsearch] = useState("");
  const [items , setitems] = useState([]);
  const [updates , setupdates] = useState("");
  const [updateindexx , setupdateindexx] = useState();


const onchange = (e)=>{

  setsearch(e.target.value)

}

const updatebtn = () => {

  let Newarr = [...items];

   Newarr[updateindexx] = search

  setitems(Newarr);

  setupdates("")

  setsearch("")

  alert("Updated Item")


}


const Button = () =>{
   
  
  if(search.trim() !== ""){


    setitems([...items , search]);

    setsearch("")
   

  }
  
}


const Clearall = () =>{

  setitems([])
  }

   const deletebtn = (elements) =>{

  const  arra =  items.filter((e)=> e !== elements)

  setitems(arra)
  
   }

   const editbtn = (val , index) =>{

    setupdates(val)
    setsearch(val)

    setupdateindexx(index)

   }




  return (
    <div>
      <Todo   button={Button}  Change={onchange} items={items} searchs={search} updatesbtn={updatebtn}  clearss={Clearall}   deletes={deletebtn} edit={editbtn}  update={updates} />
     <Lopup/>
   
    </div>
  )
}
export default App;