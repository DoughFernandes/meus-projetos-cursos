import './respositories.css'

const Repositories = (name, description)=>{
  return (
    <section className='respositorios'>
        <h5>{name}</h5>
        <p>{description}</p>
    </section>
  )
}

export { Repositories };