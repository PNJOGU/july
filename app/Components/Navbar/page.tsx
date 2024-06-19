'use client'
import React, {useState } from "react";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from 'react-icons/gr';
function Navbar() {
  const [menuIcon,setMenuIcon] = useState(false);
  const [openNav,setOpenNav] = useState(false);

  const handleMenuIcon = () => {
    setMenuIcon(!menuIcon);
    setOpenNav(!openNav)
  }

  const handleListClick = () => {
    setMenuIcon(false);
    setOpenNav(false);
  }
  return (
    <nav>
        <label className="colorBlue npn">NPN.DEV</label>
        <ul className="listgroup" style={{display:openNav ? 'flex' : ''}}>
          <li className="navlinks" onClick={handleListClick}><Link href={'/'}>Home</Link></li>
          <li className="navlinks" onClick={handleListClick}><Link href={'/About'}>About</Link></li>
          <li className="navlinks" onClick={handleListClick}><Link href={'/Projects'}>Projects</Link></li>
          <li className="navlinks" onClick={handleListClick}><Link href={'/Contact'}>Contact</Link></li>
        </ul>
        <div>
          {menuIcon ? (<GrClose className='hamburgers headertoggleicons' onClick={handleMenuIcon}/>) : (<GiHamburgerMenu  className='hamburgers headertoggleicons' onClick={handleMenuIcon}/>)}
        </div>
    </nav>
  )
}

export default Navbar