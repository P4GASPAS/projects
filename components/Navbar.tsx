'use client'
import { useState } from "react"
import Link from "next/link"

const Navbar = () => {

  const [showItems, setShowItems] = useState(false)

  const handleButton = () => {
    setShowItems(!showItems)
  }

  const handleClick = () => {window.open('https://github.com/P4GASPAS', '_blank');}

  return (

    <nav className="bg-white absolute z-10 w-full">
      <div className="flex justify-between px-4 py-4 items-center md:hidden">
        <Link href={''}>
          <h1 className="text-lg font-semibold">Developer</h1>
        </Link>
        <button type="button" className="cursor-pointer md:hidden" onClick={handleButton}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </button>
      </div>
      <div className={showItems ? "md:hidden flex justify-center text-center animate-navShow" : "hidden"}>
        <div>
          <ul>
            <li className="my-2"><a href="">About</a></li>
            <li className="my-2"><a href="">Contact</a></li>
            <li className="my-2"><a href="">Service</a></li>
          </ul>
          <button className="px-6 py-0.5 my-2 rounded-xl shadow bg-gray-800 text-white">CV</button>
        </div>
      </div>
      <div className="hidden md:flex md:justify-around md:px-8 py-4 items-center">
      <Link href={''}>
        <h1 className="text-lg font-semibold">Developer</h1>
      </Link>
          <ul className="flex gap-8">
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Service</a></li>
          </ul>
          <button className="px-6 py-0.5 rounded-xl shadow bg-gray-800 text-white text-sm" onClick={handleClick}>Github</button>
      </div>
    </nav>

  )
}

export default Navbar