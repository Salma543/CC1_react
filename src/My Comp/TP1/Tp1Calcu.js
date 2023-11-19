import React, { useState } from "react";
import './Calcultrise.css';

export default function Tp1Calcu() { 
  const [expression, setExpression] = useState("");
  
  const handleNumberClick = (value) => {
    setExpression(expression + value);
  }

  const handleOperatorClick = (operator) => {
    setExpression(expression + operator);
  }

  const handleDelete = () => {
    setExpression(expression.slice(0, -1));
  }

  const handleClear = () => {
    setExpression("");
  }

  const handleEvaluate = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression("Erreur");
    }
  }

  return (
 
    <div className="calcultrise">
       <h1>Calculatrice</h1>
      <div className="inputs">
        <input
          className="in"
          type="text"
          value={expression}
          onChange={(event) => setExpression(event.target.value)}
        />
      </div>
      <div className="buttons">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <button
            key={number}
            className="btn"
            onClick={() => handleNumberClick(number)}
          >
            {number}
          </button>
        ))}
        {["+", "-", "*", "/", "(", ")", "."].map((operator) => (
          <button 
            key={operator}
            className="btnO"
            onClick={() => handleOperatorClick(operator)}
          >
            {operator}
          </button>
        ))}   
        <button className="btnO" onClick={handleEvaluate}>=</button>
        <button className="btns" onClick={handleDelete}>Supprimer</button>
        <button className="btns" onClick={handleClear}>C</button>
      </div>
    </div>
  )
}
