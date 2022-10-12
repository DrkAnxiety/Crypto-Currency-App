import { useEffect, useState } from 'react'
import axios from 'axios'
import { CardCoin } from './CardCoin'

export const ListCoins = () => {
  const URL_API =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false'

  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios.get(URL_API).then((res) => {
      setCoins(res.data)
    })
  }, [])

  return (
    <article className='flex justify-center items-center p-12'>
      <section className='w-full flex justify-evenly items-center flex-wrap gap-6'>
        {coins.map((coin) => (
          <CardCoin coin={coin} key={coin.id} />
        ))}
      </section>
    </article>
  )
}
