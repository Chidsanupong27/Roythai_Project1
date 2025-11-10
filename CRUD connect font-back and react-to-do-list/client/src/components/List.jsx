import axios from 'axios'
import React from 'react'
import { removeData } from '../api/todo'


const List = ({item,handleGetData}) => {
   
    const handleDelete = async (id) =>{
        removeData(id)
      .then((res)=>{
            console.log(res)
            handleGetData()
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }

  return (
    <div>{item.title}
    <button onClick={()=>handleDelete(item.id)}>Delete</button>
    </div>
  )
}

export default List