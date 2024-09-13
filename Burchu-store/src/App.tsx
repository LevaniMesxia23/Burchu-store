import { useState, createContext } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import Products from "./components/Products"
import { useMediaQuery } from '@custom-react-hooks/all';

export const Mycontext = createContext<MyContextType | null>(null)
function App() {
  const isTablet = useMediaQuery('(min-width: 768px)');
  const [ burgerClicked, setBurgerClicked ] = useState(false)
  return (
    <>
    <Mycontext.Provider value={{burgerClicked, setBurgerClicked, isTablet}}>
     <Header />
     <HomePage/>
     <Products />
     <Footer/>
    </Mycontext.Provider>
    </>
  )
}

export default App
