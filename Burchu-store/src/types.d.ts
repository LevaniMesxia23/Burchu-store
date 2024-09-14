interface MyContextType {
  burgerClicked : boolean;
  setBurgerClicked: React.Dispatch<React.SetStateAction<boolean>>;
  isTablet: boolean;
  isDropdownOpen: boolean;
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}