import background from '../../assets/svg/logo-git.svg'
import './App.css'

import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { Repositories } from "../../components/Respositories";
import { useState } from 'react';

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();
    setCurrentUser(newUser);

    if(newUser.name){
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({avatar_url, name, bio, login});
      
      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();
      console.log(newRepos)

      if(newRepos.length){
        return setRepos(newRepos);
      }else{
        alert('Nenhum repositório encontrado');
      }
    }
    console.logo(repos)
  }

  return (
   <div>
      <Header />
      <section className="conteudo">

        <figure className="ContainerImg">
          <img src={background} alt="logo git" className="background" />
        </figure>

        <aside className="info">
          <div>
            <input
              className='input'
              value={user}
              name='user'
              type="text"
              placeholder='@Nome'
              onChange={event => setUser(event.target.value)}
            />
            <button
              className='button'
              type='button'
              onClick={handleGetData}
            > Buscar
            </button>

              {currentUser?.name ? (
                <>
                  <Profile
                    key={currentUser.name}
                    avatar={currentUser.avatar_url}
                    name={currentUser.name}
                    bio={currentUser.bio}
                    login={currentUser.login}
                  />
                </>
              ): null}

              {repos?.length ? (
                <>
                  {repos.map((repo) => (
                      <Repositories
                        key={repo.id}
                        name={repo.name}
                        description={repo.description}
                      />
                  ))}
                </>
              ):null}

          </div>
        </aside>
      </section>
   </div>
  );
}

export default App;
