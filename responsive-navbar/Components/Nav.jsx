import React from 'react'

const Nav = () => {
  return (
    <nav className='fixed z-1 flex justify-between bg-blue-400/60 shadow shadow-blue-500 w-full  p-5'>
      <h1>Logo</h1>
      <ul className='navPart2 flex gap-4'>
        <li>About</li>
        <li>Career</li>
        <li>Services</li>
        <li>Placements</li>
        <li>Contact Us</li>
      </ul>
     </nav>
  )
}

export default Nav