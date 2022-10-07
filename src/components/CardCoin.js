import { Link } from 'react-router-dom'

export const CardCoin = ({ coin }) => {
  const isLow = coin.price_change_24h < 0

  return (
    <Link to={`/coin/${coin.id}`}>
      <div className='w-80 font-mono text-sm min-h-72 rounded-3xl bg-slate-400 text-white p-3 flex flex-col gap-1 shadow-xl'>
        <p className='p-1 text-sm bg-purple-400 w-max rounded-2xl flex justify-center items-center'>
          {`rank #${coin.market_cap_rank}`}
        </p>
        <div className='w-full flex items-center gap-2'>
          <img src={coin.image} alt={coin.id} className='w-12' />
          <h3>{coin.symbol.toUpperCase()}-USD</h3>
        </div>
        <div className='flex justify-between px-1 w-full border-b-2 border-slate-200'>
          <h2 className='text-black'>Name</h2>
          <p>{coin.name}</p>
        </div>
        <div className='flex justify-between px-1 w-full border-b-2 border-slate-200'>
          <h2 className='text-black'>Current Price</h2>
          <p>${coin.current_price.toLocaleString()}</p>
        </div>
        <div className='flex justify-between px-1 w-full border-b-2 border-slate-200'>
          <h2 className='text-black'>Change %</h2>
          <p>{coin.market_cap_change_percentage_24h.toFixed(2)}%</p>
        </div>
        <div className='flex justify-between px-1 w-full border-b-2 border-slate-200'>
          <h2 className='text-black'>Change </h2>
          <p className={isLow ? 'text-red-500' : 'text-white'}>
            {coin.price_change_24h.toFixed(4)}
          </p>
        </div>
        <div className='flex justify-between px-1 w-full border-b-2 border-slate-200'>
          <h2 className='text-black'>Market Cap</h2>
          <p>${coin.market_cap.toLocaleString()}</p>
        </div>
        <div className='flex justify-between px-1 w-full border-b-2 border-slate-200'>
          <h2 className='text-black'>Volume In Currency </h2>
          <p>${coin.total_volume.toLocaleString()}</p>
        </div>
        <div className='flex justify-between px-1 w-full border-b-2 border-slate-200'>
          <h2 className='text-black'>Total Supply</h2>
          <p>${coin.total_supply}</p>
        </div>
        <div className='flex justify-between items-center px-1 w-full border-b-2 border-slate-200'>
          <h2 className='text-black'>Circulating Supply</h2>
          <p>${coin.circulating_supply.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  )
}
