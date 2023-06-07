import { useNavbar } from "../../../../contexts/myContexts";
import { Text } from "../../text";
import { StyledUl, StyledLi } from "./styles";

const navbarStyle: React.CSSProperties = {
  width: "19.71rem",
  position: "absolute",
  height: "calc(100vh - 6.23rem)",
  backgroundColor: "#20212C",
  borderRight: "2px solid #3E3F4E",
  padding: "0rem 2.12rem",
};

export const Navbar = ({ children }) => {
  const { isOpen } = useNavbar();

  const mergedStyle: React.CSSProperties = {
    ...navbarStyle,
    display: isOpen ? "block" : "none",
  };

  const contentContainerStyle: React.CSSProperties = {
    marginLeft: isOpen ? "21.55rem" : "0",
  };

  return (
    <>
      <div style={mergedStyle}>
        <Text variant="headingS">ALL BOARDS (8)</Text>
        <StyledUl>
          <StyledLi className="active">
            <Text variant="headingM">Platform Launch</Text>
          </StyledLi>
          <StyledLi>
            <Text variant="headingM">Marketing Plan</Text>
          </StyledLi>
          <StyledLi>
            <Text variant="headingM">Roadmap</Text>
          </StyledLi>
          <StyledLi>
            <Text variant="headingM">+ Create New Board</Text>
          </StyledLi>
        </StyledUl>
      </div>
      <div style={contentContainerStyle}>{children}</div>
    </>
  );
};
