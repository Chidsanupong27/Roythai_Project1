import React from 'react'
import FormInput from './components/FormInput'
import ListBasic from './components/ListBasic'
import UseEffectBasic from './components/UseEffectBasic';

const App = () => {
   const users = [
    { id: 1, name: "Chidsanupong" },
    { id: 2, name: "DEV" },
    { id: 3, name: "Chawin" },
  ];
  return (
    <div>
      <FormInput/>
      <ListBasic kaika={users}/>
      <UseEffectBasic/>
    </div>
  )
}

export default App