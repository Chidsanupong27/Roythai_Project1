import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import List from './List'


import {getData} from "../api/todo"


const Todo = () => {
//code js
    const [data,setData] = useState([])
    const [ title,setTitle] = useState('')





    useEffect(()=>{
        //code 
        getData()
    },[])


    const handleGetData = async() => {
         getData()
        .then((res)=>{
            console.log(res.data.todos)
            setData(res.data.todos)
        }).catch((err)=>{
            console.log(err)
        })
        
    }

    const handleOnChange = (e) =>{
        setTitle(e.target.value)
    }

  return (
    <>
    <div>
        <input type="text" name='title' onChange={handleOnChange}/>
        <button>Add Data</button>
    </div>
        <div>
            {data.map((item,index)=>
                <List key={index} item={item} handleGetData={handleGetData}/>
            )}
        </div>
    </>
  )
}

export default Todo