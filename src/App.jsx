import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Profile from './profile/image';
import Main from './landingPage/main';
import Products from './products/products';
import CarruselTool from './carrusel/carrusel';
import Footer from './footer/footPage';
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const users={
    nameUser: 'Keiner',
    lastName:'Rivas',
    age:20,

  }
  return (
    <>
      <Profile data={users}  />
      <Main />
      <Products/>
      <CarruselTool/>
      <Footer/>
    </>
  )
}

export default App
