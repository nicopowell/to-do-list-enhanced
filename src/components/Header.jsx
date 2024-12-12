import '../styles/header.css'

const Header = () => {
  return (
    <header>
      <h1>To-Do List</h1>
      <div>
        <button className='btn btn-red'>Login</button>
        <button className='btn btn-red'>Register</button>
      </div>
    </header>
  )
}

export default Header