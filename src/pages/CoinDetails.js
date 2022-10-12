import axios from 'axios'
import DOMPurify from 'dompurify'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Spinner } from '../components/Spinner'
import { CardCoinInfo } from '../components/CardCoinInfo'

export const CoinDetails = () => {
  const { coinId } = useParams()
  const URL_API = `https://api.coingecko.com/api/v3/coins/${coinId}`

  const [coin, setCoin] = useState()

  useEffect(() => {
    const timer = setTimeout(() => {
      axios.get(URL_API).then((res) => {
        setCoin(res.data)
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <article className='flex min-h-screen justify-center items-center p-4 pt-24'>
      {!coin ? (
        <Spinner />
      ) : (
        <section className='w-full font-mono pt-4'>
          <div className='w-full flex justify-center items-center flex-col gap-8'>
            <div className='flex gap-4 items-center'>
              <img
                src={coin.image.small}
                alt={coin.id}
                className='animate-bounce'
              />
              <h3 className='text-xl text-white dark:text-[#00FFF5] animate-bounce'>{coin.symbol.toUpperCase()}-USD</h3>
            </div>

            <div className='border-b-2 border-slate-300 flex flex-col gap-2 justify-center items-center'>
              <span
                className='text-lg p-2 rounded-3xl text-white bg-[#798777] sh-crd dark:border-2 
              dark:border-[#00ADB5] dark:bg-inherit'
              >
                {`rank #${coin.market_cap_rank}`}
              </span>
              <h2 className='text-2xl text-white dark:text-[#00FFF5]'>
                {coin.name}
              </h2>
            </div>

            <span
              className='bg-[#798777] text-white rounded-3xl p-2 sh-crd dark:border-2 dark:border-[#00ADB5] 
            dark:bg-inherit'
            >
              Prices Change Percentage
            </span>

            <div className='w-1/2 h-36 sh-crd bg-[#A2B29F] dark:bg-[#393E46] flex gap-4 justify-evenly items-center rounded-3xl'>
              <div className='flex flex-col items-center p-2 gap-2'>
                <h3 className='border-b-2 dark:text-gray-400 border-slate-300 text-xl'>24h</h3>
                <p className='text-white text-lg'>
                  {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                    2
                  )}
                  %
                </p>
              </div>

              <div className='flex flex-col items-center p-2 gap-2'>
                <h3 className='border-b-2 dark:text-gray-400 border-slate-300 text-xl'>7d</h3>
                <p className='text-white text-lg'>
                  {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                    2
                  )}
                  %
                </p>
              </div>

              <div className='flex flex-col items-center p-2 gap-2'>
                <h3 className='border-b-2 dark:text-gray-400 border-slate-300 text-xl'>14d</h3>
                <p className='text-white text-lg'>
                  {coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                    2
                  )}
                  %
                </p>
              </div>

              <div className='flex flex-col items-center p-2 gap-2'>
                <h3 className='border-b-2 dark:text-gray-400 border-slate-300 text-xl'>1m</h3>
                <p className='text-white text-lg'>
                  {coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                    2
                  )}
                  %
                </p>
              </div>

              <div className='flex flex-col items-center p-2 gap-2'>
                <h3 className='border-b-2 dark:text-gray-400 border-slate-300 text-xl'>6m</h3>
                <p className='text-white text-lg'>
                  {coin.market_data.price_change_percentage_200d_in_currency.usd.toFixed(
                    2
                  )}
                  %
                </p>
              </div>

              <div className='flex flex-col items-center p-2 gap-2'>
                <h3 className='border-b-2 dark:text-gray-400 border-slate-300 text-xl'>1y</h3>
                <p className='text-white text-lg'>
                  {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                    2
                  )}
                  %
                </p>
              </div>
            </div>

            <CardCoinInfo coin={coin} />

            <div className='py-4 w-3/4'>
              {coin.description.en && (
                <>
                  <h1 className='text-4xl text-[#6b7869] font-bold pb-4 dark:text-white'>Description.</h1>
                  <p
                    className='text-white dark:text-slate-400'
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(coin.description.en),
                    }}
                  ></p>
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}

{
  /* <a href={coin.links.homepage[0]}>Bitcoin</a> */
}
