import Container from './style'
import Input from '../components/Input';
import Button from '../components/Button';
import Repos from '../components/Repos';
import { useState } from 'react';
import api from '../service/Api';

import logo from '../assets/img/github-mark-white.png';


const App = ()=>{
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('');

  const handleSearchRepo = async()=>{
    const ValidateInput = /^[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/;

    if(!ValidateInput.test(currentRepo)){
      alert('❌ Erro ao Pesquisar. Por favor, verifique se o nome do usuário e do repositório estão corretos. Lembre-se de que ambos devem ser digitados corretamente, sem espaços extras, caracteres especiais ou erros de digitação. Exemplo: "usuario/repositorio".');

      return;
    }

    try {
      const {data} = await api.get(`/repos/${currentRepo}`);

      if(data.status === 200){
        if(data.id){
          const isExist = repos.find(repo=> repo.id === data.id);
    
          if(!isExist){
            setRepos(prev=>[...prev, data]);
            setCurrentRepo('');
          }
          return;
        }
      }
      alert('Esse repositório já está salvo!')
    } catch (error) {
      alert('Repositório não encontrado, verifique se o repositório digita está correto');
    }
  };

  const handleRemoveRepo = (id)=>{
    setRepos(prev=> prev.filter(repo=> repo.id!== id));
  };
  

  return (
    <Container>
      <img src={logo} alt="logo" width={62} height={52}/>
      <Input value={currentRepo} onChange={(e)=> setCurrentRepo(e.target.value)} />
      <Button onclick={handleSearchRepo} />
      <ul>
        {repos.map(repo=> 
          <Repos
            repo={repo}
            remover={handleRemoveRepo}
          />
        )}
      </ul>
      <footer>
        <span>&copy; Copyright 2024-2025 Douglas Fernandes </span>
      </footer>
    </Container>
  );
}

export default App;