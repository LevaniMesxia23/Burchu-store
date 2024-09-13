import { useState, createContext } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import Products from "./components/Products"

export const Mycontext = createContext<MyContextType | null>(null)
function App() {
  const [ burgerClicked, setBurgerClicked ] = useState(false)
  return (
    <>
    <Mycontext.Provider value={{burgerClicked, setBurgerClicked}}>
     <Header />
     <HomePage/>
     <Products />
     <Footer/>
    </Mycontext.Provider>
    </>
  )
}

export default App
