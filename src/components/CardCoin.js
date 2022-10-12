import { Link } from 'react-router-dom'

export const CardCoin = ({ coin }) => {
  const isLowChange = coin.price_change_24h < 0
  const isLowChangePercentage = coin.market_cap_change_percentage_24h < 0

  return (
    <Link to={`/coin/${coin.id}`} className='hover:border-none'>
      <div
        className='w-96 font-mono text-sm min-h-72 rounded-3xl bg-[#A2B29F] p-3 
        flex flex-col gap-1 sh-crd hover:transform hover:scale-105 transition 
        duration-200 dark:bg-[#393E46] text-white'
      >
        <p
          className='dark:text-[#00ADB5] p-1 text-sm bg-[#798777] dark:bg-inherit text-white
          dark:border-2 dark:border-[#00ADB5] w-max rounded-2xl flex justify-center items-center'
        >
          {`rank #${coin.market_cap_rank}`}
        </p>
        <div className='w-full flex items-center gap-2'>
          <img src={coin.image} alt={coin.id} className='w-12 animate-pulse' />
          <h3 className='dark:text-[#00FFF5] '>
            {coin.symbol.toUpperCase()}-USD
          </h3>
        </div>
        <div className='flex justify-between px-1 w-full border-b-2 border-slate-200'>
          <h2 className='dark:text-gray-400'>Name</h2>
          <p className='dark:text-white'>{coin.name}</p>
        </div>
        <div className='flex justify-between px-1 w-full border-b-2 border-slate-200'>
          <h2 className='dark:text-gray-400'>Current Price</h2>
          <p className='dark:text-white'>
            ${coin.current_price.toLocaleString()}
          </p>
        </div>
        <div className='flex justify-between px-1 w-full border-b-2 border-slate-200'>
          <h2 className='dark:text-gray-400'>Change %</h2>
          <p
            className={
              isLowChangePercentage ? 'text-[#00FFF5] ' : '' + 'dark:text-white'
            }
          >
            {coin.market_cap_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
        <div className='flex justify-between px-1 w-full border-b-2 border-slate-200'>
          <h2 className='dark:text-gray-400'>Change </h2>
          <p
            className={isLowChange ? 'text-[#00FFF5] ' : '' + 'dark:text-white'}
          >
            + ${coin.price_change_24h.toFixed(4)}
          </p>
        </div>
        <div className='flex justify-between px-1 w-full border-b-2 border-slate-200'>
          <h2 className='dark:text-gray-400'>Market Cap</h2>
          <p className='dark:text-white'>${coin.market_cap.toLocaleString()}</p>
        </div>
        <div className='flex justify-between px-1 w-full border-b-2 border-slate-200'>
          <h2 className='dark:text-gray-400'>Volume In Currency </h2>
          <p className='dark:text-white'>
            ${coin.total_volume.toLocaleString()}
          </p>
        </div>
        <div className='flex justify-between px-1 w-full border-b-2 border-slate-200'>
          <h2 className='dark:text-gray-400'>Total Supply</h2>
          {coin.total_supply && (
            <p className='dark:text-white'>${coin.total_supply}</p>
          )}
        </div>
        <div className='flex justify-between items-center gap-2 px-2 w-full border-b-2 border-slate-200'>
          <h2 className='dark:text-gray-400'>Circulating Supply</h2>
          <p className='dark:text-white'>
            ${coin.circulating_supply.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  )
}
