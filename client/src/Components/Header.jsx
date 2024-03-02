import {FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <header className='bg-slate-300 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-slate-500'>Shaffer</span>
          <span className='text-slate-700'>Estate</span>
        </h1>
        <form className='bg-slate-100 rounded-lg flex items-center'>
          <input type="text" placeholder="Search..." className='bg-transparent focus:outline-none w-full px-4 py-1 sm:py-2' />
          <FaSearch className='text-slate-600 text-lg sm:text-2xl p-2'/>
        </form>
      </div>
    </header>
  );
}

export default Header
