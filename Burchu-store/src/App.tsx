import { useState, createContext } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { useMediaQuery } from "@custom-react-hooks/all";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import i18n from "./i18n";

export const Mycontext = createContext<MyContextType | null>(null);
function App() {
  const isTablet = useMediaQuery("(min-width: 768px)");
  const [burgerClicked, setBurgerClicked] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };
  return (
    <>
      <Mycontext.Provider
        value={{
          burgerClicked,
          setBurgerClicked,
          isDropdownOpen,
          setDropdownOpen,
          changeLanguage,
          isTablet,
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </BrowserRouter>
      </Mycontext.Provider>
    </>
  );
}

export default App;
