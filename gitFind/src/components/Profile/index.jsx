import './profile.css'

const Profile = ({ avatar, name, bio, login }) => {
  return (
    <section className='profile'>
        <figure>
            <img src={avatar} alt={name} className='photo' />
        </figure>
        <div className='description'>
            <h4>{name}</h4>
            <small>@{login}</small>
            <p>{bio}</p>
        </div>
    </section>
  )
}
export { Profile };
