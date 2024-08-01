import React from 'react'
import '../styles/Matrix.css'

function Cell({index,setMatrix,value,setQueue,setClick}) {
    const handleClick = ()=>{
        setMatrix(prevMatrix => {
            const newMatrix = [...prevMatrix]
            newMatrix[index] = 1
            return newMatrix
        })
        setQueue(prevQueuesetQueue => {
            const newQueuesetQueue = [...prevQueuesetQueue]
            newQueuesetQueue.push(index)
            return newQueuesetQueue
        })
        if(index===8) setClick(true)
        
    }
  return (
    <button className={value===0?'black':value===1?'green':'orange'}
        onClick={handleClick}
    >
    </button>
  )
}

export default Cell