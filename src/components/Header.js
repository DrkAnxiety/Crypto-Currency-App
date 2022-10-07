import { Form } from './Form'
import { SiBitcoinsv } from 'react-icons/si'
import { Link } from 'react-router-dom'

export const Header = ({ handleSearch }) => {
  return (
    <header className='font-mono flex flex-col md:flex-row justify-center items-center h-14 shadow-lg'>
      <section className='flex justify-center items-center w-full h-full gap-4'>
        <Link to='/'>
          <div className='flex gap-3'>
            <SiBitcoinsv className='text-2xl text-orange-400' />
            <h1 className='font-bold text-xl'>
              Cryto <span className='text-purple-500'>Currency</span>
            </h1>
          </div>
        </Link>
        <div className='h-full flex justify-center items-center'>
          <Form handleSubmit={handleSearch} />
        </div>
      </section>
    </header>
  )
}
