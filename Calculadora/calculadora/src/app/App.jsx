import { Container, Content } from './style';
import Input from '../components/Input'
import Button from '../components/Button'
import { useState } from 'react';

const App = ()=>{
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


  const buttons =[
    {label: 'C', className: 'limpar', action: handleSumNumber},
    {label: '+', className: 'soma', action: handleSumNumber},
    {label: '/', className: 'divisao', action: handleSumNumber},
    {label: '-', className: 'subtracao', action: handleSumNumber},
    {label: '*', className: 'multiplicacao', action: handleSumNumber},
    {label: '=', className: 'total', action: handleSumNumber},

    {label: ',', className: 'ponto', action: handleAddNumber},
    {label: '0', className: 'zero', action: handleAddNumber},
    {label: '1', className: 'primeiro', action: handleAddNumber},
    {label: '2', className: 'segundo',action: handleAddNumber},
    {label: '3', className: 'terceiro',action: handleAddNumber},
    {label: '4', className: 'quarto',action: handleAddNumber},
    {label: '5', className: 'quinto',action: handleAddNumber},
    {label: '6', className: 'sexto',action: handleAddNumber},
    {label: '7', className: 'setimo',action: handleAddNumber},
    {label: '8', className: 'oitavo',action: handleAddNumber},
    {label: '9', className: 'nono',action: handleAddNumber}
  ];
  
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        { buttons.map((botao, index) => (
          <Button
            key={index}
            label={botao.label}
            className={botao.className}
            onclick={()=> botao.action(botao.label)}
          />
        ))}
      </Content>
    </Container>
  );
}

export default App;
