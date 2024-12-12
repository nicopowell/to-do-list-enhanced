import '../styles/header.css'

const Header = () => {
  return (
    <header>
      <h1>To-Do List</h1>
      <div className='menu-mobile'>
        <button className='btn btn-red'>Logout</button>
      </div>
    </header>
  )
}

export default Header