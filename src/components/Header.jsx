import { useState } from 'react'
import '../styles/header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

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