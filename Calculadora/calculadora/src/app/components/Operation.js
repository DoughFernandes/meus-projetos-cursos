import { useState } from "react";

export const Operation = ()=> {
    const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [action, setAction] = useState(' ');
  
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0'? '' : prev}${num}`);
  }

  const handleSumNumber = (num) => {
    if(num === 'C'){
      setCurrentNumber('0');
      setFirstNumber('0');
    }
    if(num === '+' || num === '-' || num === '/' || num === '*' || num === ''){
      setFirstNumber(currentNumber);
      setAction(num);
      setCurrentNumber('0');
    } 
    if(num === '='){
      // eslint-disable-next-line no-eval
      const resultado = eval(`${firstNumber} ${action} ${currentNumber}`);
      
      setFirstNumber(resultado);
      setCurrentNumber(resultado);
    }
  }
}