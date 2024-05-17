import './respositories.css'

const Repositories = ({id, name, description})=>{
  return (
    <section key={id} className='respositorios'>
        <h5>{name}</h5>
        <p>{description}</p>
    </section>
  )
}

export { Repositories };