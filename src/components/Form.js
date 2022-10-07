import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

export const Form = ({ handleSubmit }) => {
  const [coinName, setCoinName] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault()
    handleSubmit(coinName)
    setCoinName('')
  }

  return (
    <div className='flex bg-slate-700 w-96 h-8 rounded-2xl justify-center items-center gap-4'>
      <BsSearch className='text-white' />
      <form className='' onSubmit={handleOnSubmit}>
        <input
          className='w-80 bg-slate-700 outline-none border-none text-white'
          placeholder='Enter a coin here...'
          type='text'
          value={coinName}
          onChange={(e) => setCoinName(e.target.value)}
        />
      </form>
    </div>
  )
}
