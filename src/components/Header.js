import { Form } from './Form'
import { SiBitcoinsv } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FiMoon } from 'react-icons/fi'
import { FiSun } from 'react-icons/fi'

export const Header = ({ handleSearch }) => {
  const [isDark, setIsDark] = useState(false)

  const handleDarkMode = () => {
    setIsDark(!isDark)

    if (isDark) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  return (
    <header
      className='z-10 font-mono fixed w-full flex flex-col md:flex-row bg-[#F8EDE3]
    justify-center items-center h-16 shadow-lg dark:bg-[#222831]'
    >
      <section className='flex justify-center items-center w-full h-full gap-4'>
        <Link to='/' className='hover:border-none'>
          <div className='flex gap-3'>
            <SiBitcoinsv className='text-4xl text-orange-400' />
            <h1 className='font-bold text-2xl dark:text-white'>
              Cryto{' '}
              <span className='text-[#798777] dark:text-[#00FFF5] '>
                Currency
              </span>
            </h1>
          </div>
        </Link>
        <div className='h-full flex justify-center items-center'>
          <Form handleSubmit={handleSearch} />
        </div>
        <div
          className='w-16 h-1/2 rounded-3xl flex flex-col justify-center p-0.5 bg-[#BDD2B6] 
          dark:bg-inherit dark:border-2 dark:border-[#00ADB5]'
          onClick={handleDarkMode}
        >
          {isDark ? (
            <FiMoon className='self-end w-1/2 h-full bg-slate-700 text-white p-1 rounded-full' />
          ) : (
            <FiSun className='self-start w-1/2 h-full bg-[#F8EDE3] text-yellow-500 p-1 rounded-full' />
          )}
        </div>
      </section>
    </header>
  )
}
