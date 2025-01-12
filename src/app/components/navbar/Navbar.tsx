import React from 'react'
import Logo from '../Logo'
import Search from './Search'
import UserMenu from './UserMenu'


const Navbar = () => {
  return (
    <div className=' flex py-2 px-6 justify-between max-h-[20vh]'>
      <Logo/>
      <Search/>
      <UserMenu/>
    </div>
  )
}

export default Navbar
