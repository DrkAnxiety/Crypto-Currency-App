import { SiBitcoinsv } from 'react-icons/si'

export const Footer = () => {
  return (
    <footer className='w-full h-72 p-12'>
      <section
        className='w-full h-full border-t-2 border-slate-300 flex flex-col 
      justify-center items-center gap-4'
      >
        <div className='flex flex-col items-center'>
          <SiBitcoinsv className='text-4xl text-orange-400' />
          <h1 className='font-bold text-2xl dark:text-white'>
            Cryto{' '}
            <span className='text-[#798777] dark:text-[#00FFF5] '>
              Currency
            </span>
          </h1>
        </div>
        <div className='dark:text-white'>CopyRight &copy; Todos los derechos reservados</div>
      </section>
    </footer>
  )
}
