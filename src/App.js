import React, { useState } from "react";
import "./style.css";

const App=()=>{
  const[num1, setNum1]= useState("");
  const[num2, setNum2]= useState("");
  const[result, setResult]= useState("");

  function implementAdd(){
    const finaladdResult= parseInt(num1) + parseInt(num2);
    setResult(finaladdResult);
    setNum1("");
    setNum2("");
  }

  function implementSub(){
    const finalsubResult= parseInt(num1) - parseInt(num2);
    setResult(finalsubResult);
    setNum1("");
    setNum2("");
  }

  function implementMul(){
    const finalmulResult= parseInt(num1) * parseInt(num2);
    setResult(finalmulResult);
    setNum1("");
    setNum2("");

  }

  function implementDiv(){
    const finaldivResult= parseInt(num1) / parseInt(num2);
    setResult(finaldivResult);
    setNum1("");
    setNum2("");

  }
  return(
    <div className="app">
      <div className="calculator">
        <h3 className="heading">React Calculator</h3>
        <input type="text" placeholder="Num1" value={num1} onChange={(e)=>setNum1(e.target.value)}></input><br/>
        <input type="text" placeholder="Num2" value={num2} onChange={(e)=>setNum2(e.target.value)}></input><br/>
        <button onClick={implementAdd}>+</button>
        <button onClick={implementSub}>-</button>
        <button onClick={implementMul}>*</button>
        <button onClick={implementDiv}>/</button>

        {
          result && (
            <div className="result">
              <span>Result - </span>{result}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App;