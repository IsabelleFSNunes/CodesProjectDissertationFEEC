import React, { useContext, useState, createContext } from 'react';

const MenuContext = createContext<boolean>(false);
const MenuUpdateContext = createContext<() => void>(() => {});

export function useMenu() {
  return useContext(MenuContext);
}

export function useMenuUpdate() {
  return useContext(MenuUpdateContext);
}

interface MenuProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

export function MenuProvider({ children }: MenuProviderProps) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(prevOpen => !prevOpen);
  }

  return (
    <MenuContext.Provider value={openMenu}>
      <MenuUpdateContext.Provider value={toggleMenu}>
        {children}
      </MenuUpdateContext.Provider>
    </MenuContext.Provider>
  )
}

export default MenuProvider;