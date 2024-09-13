import { useState, createContext } from "react"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import { useMediaQuery } from '@custom-react-hooks/all';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsPage from "./pages/ProductsPage"

export const Mycontext = createContext<MyContextType | null>(null)
function App() {
  const isTablet = useMediaQuery('(min-width: 768px)');
  const [ burgerClicked, setBurgerClicked ] = useState(false)
  return (
    <>
    <Mycontext.Provider value={{burgerClicked, setBurgerClicked, isTablet}}>
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
      </Routes>
    </BrowserRouter>
    </Mycontext.Provider>
    </>
  )
}

export default App
