import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <ul>
            <li>Fareeha Siddiqui</li>
            <li><Link href="/">home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar