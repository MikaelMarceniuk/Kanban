import React, { createContext, useContext, useState } from "react";

type NavbarContextType = {
    toggleNavbar: () => void;
    isOpen: boolean;
};

export const NavbarContext = createContext({} as NavbarContextType);

type NavbarProviderProps = {
    children: React.ReactNode;
};

export const NavbarProvider = ({ children }: NavbarProviderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavbarContext.Provider value={{ toggleNavbar, isOpen }}>
            {children}
        </NavbarContext.Provider>
    );
};

export const useNavbar = () => useContext(NavbarContext);
