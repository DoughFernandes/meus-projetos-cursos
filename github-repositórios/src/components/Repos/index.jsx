import ItemContainer from '../Repos/style'

const Repos = ({repo, remover})=>{
    const handleRemove = ()=>{
        remover(repo.id);
    }

    return(
        <ItemContainer key={repo.id}>
            <h2>{repo.name}</h2>
            <small>{repo.full_name}</small>
            <p>{repo.description}</p>
            <a target="_blank" rel="noreferrer" href={repo.html_url} >Ver mais</a>
            <button onClick={handleRemove} type='button'>Remover</button>
        </ItemContainer>
    )
};

export default Repos;