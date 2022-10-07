import { Header } from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { CoinDetails } from './pages/CoinDetails'
import { Footer } from './components/Footer'

function App() {

  const handleSearch = (coinName) => {
    console.log(coinName);
  }

  return (
    <BrowserRouter>
      <Header handleSearch={handleSearch}/>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='coin/:idCoin' element={<CoinDetails />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
