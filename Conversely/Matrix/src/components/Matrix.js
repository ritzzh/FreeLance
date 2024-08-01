import React, { useEffect, useState } from 'react'
import '../styles/Matrix.css'
import Cell from './Cell'

function Matrix() {

    let [matrix,setMatrix]= useState([0,0,0,0,0,0,0,0,0])
    let [queue,setQueue]= useState([])
    let seq = [0,1,2,3,4,5,6,7,8]
    const [click, setClick] = useState(false)

    const handleReset = () =>{
        setMatrix([0,0,0,0,0,0,0,0,0])
        setQueue([])
        setClick(false)
    }
    
    useEffect(() => {
        if (click && queue.length > 0) {

            const interval = setInterval(() => {
                setQueue(prevQueue => {
                    if (prevQueue.length > 0) {
                        const newMatrix = [...matrix]
                        const index = prevQueue[0]
                        newMatrix[index] = 2
                        setMatrix(newMatrix)
                        return prevQueue.slice(1)
                    } else {
                        clearInterval(interval)
                        return prevQueue
                    }
                })
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [click, queue, matrix])
    

  return (
    <div className="outer">
        <div className="matrix">
        {
            seq.map(index=>{
                return(
                    <Cell key={index}
                    index={index}
                    value = {matrix[index]}
                    setMatrix={setMatrix}
                    setClick={setClick}
                    setQueue= {setQueue
                    }>
                    </Cell>
                )
            })
        }
        </div>
        <div className="reset">
            <button onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

export default Matrix