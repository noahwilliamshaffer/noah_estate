import {FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <header className = 'bg-slate-300 shadow-md' >
        <div className = 'flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className = ' font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className = 'text-slate-500'> Shaffer </span>
            <span className = 'text-slate-700'> Estate </span>    
        </h1>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type = "Text" Placeholder = "Search..." className = 'bg-transparent focus:outline-none w-24 sm:w-64' />
        <FaSearch className='text-slate-600'/>
        </form>

        </div>

        
    </header>
  )
}

export default Header
