import { Container, Content } from './style';

import Input from '../components/Input'
import Button from '../components/Button'

const App = ()=>{

  const buttons =[
    {label: 'C', className: 'limpar'},
    {label: '+', className: 'soma'},
    {label: '/', className: 'divisao'},
    {label: '-', className: 'subtracao'},
    {label: '=', className: 'total'},
    {label: ',', className: 'ponto'},
    {label: '0', className: 'zero'},
    {label: '1', className: 'primeiro'},
    {label: '2', className: 'segundo'},
    {label: '3', className: 'terceiro'},
    {label: '4', className: 'quarto'},
    {label: '5', className: 'quinto'},
    {label: '6', className: 'sexto'},
    {label: '7', className: 'setimo'},
    {label: '8', className: 'oitavo'},
    {label: '9', className: 'nono'},
    {label: 'Del', className: 'apagar'}
  ];
  
  return (
    <Container>
      <Content>
        <Input />
        {buttons.map(botao => (
          <Button key={botao.label} label={botao.label} className={botao.className} />
        ))}
      </Content>
    </Container>
  );
}

export default App;
