import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from "./pages/Home"
import Category from './pages/Category'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Login from './pages/Login'
// import Footer from './components/Footer'
import bannermen from './assets/bannermens.png'
import bannerwomen from './assets/bannerwomens.png'
import bannerkids from './assets/bannerkids.png'
function App() {


  return (
    <main className='bg-amber-200 text-black p-2'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Category category={"men"} banner={bannermen} />} />
          <Route path="/women" element={<Category category={"women"} banner={bannerwomen}/>} />
          <Route path="/kids" element={<Category category={"kid"} banner={bannerkids} />} />
          <Route path="/product" element={<Product />} >
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login/>}/>

        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </main>
  )
}

export default App
