import React from 'react'

const ConditionBasic = () => {

    console.log(Boolean(''))
    console.log(Boolean(' '))
    console.log(Boolean(0))
    console.log(Boolean(null))
    console.log(Boolean(NaN))
    console.log(Boolean(undefined))


    // || หาค่าจริงค่าแรก 
    const user = null ||  undefined ||  "Guest"
    //ที่เหลือเป็นจริงหมด


    //conduition 
    if (user) {
      console.log("Hello ")
    }

  return (
    <div>ConditionBasic
        {user}
    </div>
  )
}

export default ConditionBasic 