import React, { useEffect, useRef } from "react";
import "../styles/DrawBoard.css";

function DrawBoard() {
    const canvasRef = useRef()
    let context = null

    useEffect(() => {
      const canvasVal = canvasRef.current
        context = canvasVal.getContext('2d')
        context.fillStyle = 'grey'
        context.fillRect(10,10,101,10)
    }, [])
    
  return (
    <div className="invite-page">
        <div className="undoredo">
            <button>Undo</button>
            <button>Redo</button>
        </div>

      <div className="invite">
        <canvas width="400" height="600" ref={canvasRef}>
          An alternative text describing what your canvas displays.
        </canvas>
      </div>

      <div className="controls">
        <select name="font" id="">
            <option value="arial">arial</option>
        </select>
        <button>+</button>
      </div>
    </div>
  );
}

export default DrawBoard;
