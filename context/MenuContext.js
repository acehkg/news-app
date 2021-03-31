import { createContext, useState } from 'react';
import links from '../utils/links.json';

export const MenuContext = createContext();

const NavOpen = ({ children }) => {
  const [open, setOpen] = useState(false);

  const exposed = {
    open,
    setOpen,
    links,
  };

  return (
    <MenuContext.Provider value={exposed}>{children}</MenuContext.Provider>
  );
};
export default NavOpen;
