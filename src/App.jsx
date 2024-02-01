import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './components/pages/Homepage'
import { CartContextProvider } from './context/cartContext'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import Obras from './components/pages/Obras'
import Servicios from './components/pages/Servicios'
import Estudio from './components/pages/Estudio'
import Contact from './components/pages/Contact'






function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className='app-container'>
          <NavBar/>
          <Routes>
            <Route path= '/' element= {<Homepage/>} />
            <Route path= '/obras' element= {<Obras/>} />
            <Route path= '/product/:id' element= {<ItemDetailContainer/>} />
            <Route path= '/servicios' element= {<Servicios/>} />
            <Route path= '/estudio' element= {<Estudio/>} />
            <Route path= '/contacto' element= {<Contact/>} />


          </Routes>
        </div>
      <Footer/>
    </BrowserRouter>
  </CartContextProvider>
)}

export default App

