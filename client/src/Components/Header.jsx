import React from 'react'

function Header() {
  return (
    <header>
        <h1 className = ' font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className = 'text-slate-500'> Shaffer </span>
            <span className = 'text-slate-700'> Estate </span>    
        </h1>
        <form>
            <input type = "Text" Placeholder = "Search..." />
        </form>
        
    </header>
  )
}

export default Header
