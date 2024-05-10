import { Container, Content } from './style';

import Input from '../components/Input'
import Button from '../components/Button'
import { useState } from 'react';
import { Operacao } from './Operacao';

const App = ()=>{
  const [currentNumber, setCurrentNumber] = useState('');

  const handleNumber = (num, action) => {
    Operacao(num, action, setCurrentNumber);
  }

  const buttons =[
    {label: 'C', className: 'limpar', action: 'action'},
    {label: '+', className: 'soma', action: 'action'},
    {label: '/', className: 'divisao', action: 'action'},
    {label: '-', className: 'subtracao', action: 'action'},
    {label: 'X', className: 'multiplicacao', action: 'action'},
    {label: '=', className: 'total', action: 'action'},
    {label: ',', className: 'ponto', action: 'action'},
    {label: '0', className: 'zero', action: 'number'},
    {label: '1', className: 'primeiro', action: 'number'},
    {label: '2', className: 'segundo', action: 'number'},
    {label: '3', className: 'terceiro', action: 'number'},
    {label: '4', className: 'quarto', action: 'number'},
    {label: '5', className: 'quinto', action: 'number'},
    {label: '6', className: 'sexto', action: 'number'},
    {label: '7', className: 'setimo', action: 'number'},
    {label: '8', className: 'oitavo', action: 'number'},
    {label: '9', className: 'nono', action: 'number'}
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
            onclick={()=> handleNumber(botao.label, botao.action)} 
          />
        ))}
      </Content>
    </Container>
  );
}

export default App;
