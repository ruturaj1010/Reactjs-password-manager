import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around items-center px-3 h-14 bg-blue-950 text-gray-300 w-screen'>
      <div className='logo font-bold cursor-none'>PWManager</div>
      <ul>
        <li className='flex gap-10 items-center w-60'>
          <a href="#" className='text-lg hover:font-semibold'>Home</a>
          <a href="#" className='text-lg hover:font-semibold'>About</a>
          <a href="#" className='text-lg hover:font-semibold'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar