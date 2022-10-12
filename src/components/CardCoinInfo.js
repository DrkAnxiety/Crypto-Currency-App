export const CardCoinInfo = ({ coin }) => {
  const isLowChangePercentage = coin.market_data.price_change_24h < 0

  return (
    <div className='w-1/2 flex flex-col gap-2 sh-crd bg-[#A2B29F] dark:bg-[#393E46] p-4 rounded-3xl'>
      <div className='flex justify-between items-center gap-2 px-1 w-full border-b-2 border-slate-200'>
        <h2 className='text-lg dark:text-gray-400'>Current Price</h2>
        <p className='text-white text-lg'>
          ${coin.market_data.current_price.usd.toLocaleString()}
        </p>
      </div>

      <div className='flex justify-between items-center gap-2 px-1 w-full border-b-2 border-slate-200'>
        <h2 className='text-lg dark:text-gray-400'>Low Price 24h</h2>
        <p className='text-white text-lg'>
          ${coin.market_data.low_24h.usd.toLocaleString()}
        </p>
      </div>

      <div className='flex justify-between items-center gap-2 px-1 w-full border-b-2 border-slate-200'>
        <h2 className='text-lg dark:text-gray-400'>High Price 24h</h2>
        <p className='text-white text-lg'>
          ${coin.market_data.high_24h.usd.toLocaleString()}
        </p>
      </div>

      <div className='flex justify-between items-center gap-2 px-1 w-full border-b-2 border-slate-200'>
        <h2 className='text-lg dark:text-gray-400'>Market Cap</h2>
        <p className='text-white text-lg'>
          ${coin.market_data.market_cap.usd.toLocaleString()}
        </p>
      </div>

      <div className='flex justify-between items-center gap-2 px-1 w-full border-b-2 border-slate-200'>
        <h2 className='text-lg dark:text-gray-400'>Market Cap 24h</h2>
        <p className='text-white text-lg'>
          ${coin.market_data.market_cap_change_24h.toLocaleString()}
        </p>
      </div>

      <div className='flex justify-between items-center gap-2 px-1 w-full border-b-2 border-slate-200'>
        <h2 className='text-lg dark:text-gray-400'>
          Market Cap Percentage 24h
        </h2>
        <p className='text-white text-lg'>
          {coin.market_data.market_cap_change_percentage_24h.toFixed(2)}%
        </p>
      </div>

      <div className='flex justify-between items-center gap-2 px-1 w-full border-b-2 border-slate-200'>
        <h2 className='text-lg dark:text-gray-400'>Price Change 24h</h2>
        <p
          className={
            isLowChangePercentage
              ? 'text-[#00FFF5] '
              : '' + 'text-white text-lg'
          }
        >
          ${coin.market_data.price_change_24h.toLocaleString()}
        </p>
      </div>

      <div className='flex justify-between items-center gap-2 px-1 w-full border-b-2 border-slate-200'>
        <h2 className='text-lg dark:text-gray-400'>
          Price Change Percentage 24h
        </h2>
        <p
          className={
            isLowChangePercentage
              ? 'text-[#00FFF5] '
              : '' + 'text-white text-lg'
          }
        >
          {coin.market_data.price_change_percentage_24h.toFixed(2)}%
        </p>
      </div>

      <div className='flex justify-between items-center gap-2 px-1 w-full border-b-2 border-slate-200'>
        <h2 className='text-lg dark:text-gray-400'>All Time High Price</h2>
        <p className='text-white text-lg'>
          ${coin.market_data.ath.usd.toLocaleString()}
        </p>
      </div>

      <div className='flex justify-between items-center gap-2 px-1 w-full border-b-2 border-slate-200'>
        <h2 className='text-lg dark:text-gray-400'>All Time Low Price</h2>
        <p className='text-white text-lg'>
          ${coin.market_data.atl.usd.toLocaleString()}
        </p>
      </div>

      <div className='flex justify-between items-center gap-2 px-1 w-full border-b-2 border-slate-200'>
        <h2 className='text-lg dark:text-gray-400'>Genesis Date</h2>
        <p className='text-white text-lg'>
          {coin.genesis_date ? coin.genesis_date : 'UNKNOWN'}
        </p>
      </div>
    </div>
  )
}
