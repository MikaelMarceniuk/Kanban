import React from "react";
import { Header } from "../shared/components/header";
import { Navbar } from "../shared/components/header/navbar";
import { NavbarProvider } from "../contexts/myContexts";

const Web = () => {
  return (
    <NavbarProvider>
      <Header />
      <Navbar >
        <h1 className="text">poi</h1>
      </Navbar>
    </NavbarProvider>
  );
};

export default Web;
