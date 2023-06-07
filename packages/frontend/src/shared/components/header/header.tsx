import { StyledHeader, StyledUl, StyledNav, StyledLi, LogoContainer } from "./styles";
import { Text } from "../text";
import { Logo } from "../Logo";
import { Button } from "../button";
import { useContext } from "react";
import {NavbarContext} from "../../../contexts/myContexts"; 

export const Header = () => {
  const { toggleNavbar, isOpen } = useContext(NavbarContext);

  return (
    <StyledHeader>
      <StyledNav>
        <LogoContainer onClick={toggleNavbar} isOpen={isOpen}>
        <Logo />
        </LogoContainer>
        <StyledUl>
          <StyledLi>
            <Text variant="headingXL">Platform Launch</Text>
          </StyledLi>
          <StyledLi>
            <Button variant="default" color="primary">
              + Add New Task
            </Button>
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
};
