import React from 'react'

const ConditionBasic = () => {

    console.log(Boolean(''))
    console.log(Boolean(' '))
    console.log(Boolean(0))
    console.log(Boolean(null))
    console.log(Boolean(NaN))
    console.log(Boolean(undefined))

    const user = null || "Guest"

    //ที่เหลือเป็นจริงหมด

  return (
    <div>ConditionBasic
        {user}
    </div>
  )
}

export default ConditionBasic