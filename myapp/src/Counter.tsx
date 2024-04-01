import  { useState } from 'react'

export const Counter = () => {

  const [data,setData] = useState<number>(0)

  const handleCounter = ()=>{

    setData(data+1);
  }
  return (
    <div>{data}
    <button onClick={handleCounter}>Button</button>
    
    </div>
  )
}
