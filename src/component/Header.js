import React, { useState } from 'react'
import logo from '../images/logo.svg';
import menu from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'

export default function Header() {
  const [isNavOpen , setIsNavOpen] = useState(true)
  return (
    <>
      <header className='absolute z-10 p-8 flex w-full items-center justify-center'>
        <div>
            <img src={logo} alt=''/>
        </div>
        <nav className='bg-white absolute top-0 left-0 w-full py-8 shadow-lg'>
          <ul className='flex items-center justify-center flex-wrap gap-4'> 
            <li><button className='border-b-2 border-transparent hover:border-neutral-900 transition-all duration-200'>Home</button></li>
            <li><button className='border-b-2 border-transparent hover:border-neutral-900 transition-all duration-200'>Shop</button></li>
            <li><button className='border-b-2 border-transparent hover:border-neutral-900 transition-all duration-200'>About</button></li>
            <li><button className='border-b-2 border-transparent hover:border-neutral-900 transition-all duration-200'>Contact</button></li>
          </ul>

        </nav>
        <div className='absolute left-8 top-8 z-20'>
           {isNavOpen ? <button>
            <img src={close} alt=''/>
           </button> : <button>
                <img src={menu} alt=''/>
            </button>}
        </div>
      </header>
    </>
  )
}
