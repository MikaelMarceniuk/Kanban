import { styled, css } from "../../../styles/themes/default";

export const StyledHeader = styled("header", {
  alignItems: "center",
  backgroundColor: "$darkGrey",
  paddingTop: "1rem",
  height: "6.23rem",
});

export const StyledNav = styled("nav", {
  padding: "0rem",
  alignItems: "center",
  display: "flex",
  flex: "1",
  gap: "8.5rem",
});

export const StyledUl = styled("ul", {
  alignItems: "center",
  justifyContent: "space-between",
  display: "flex",
  width: "80%",
  marginLeft: "19rem",
  padding: "0rem 2.12rem",
});

export const StyledLi = styled("li", {
  alignItems: "center",
  display: "flex",
});

const linesDarkColor = css({ color: "$veryDarkGrey" });
const backgroundWhite = css({ backgroundColor: "$bakgroundWhiteButton" });

export const LogoContainer = styled("div", {
  padding: "0rem 2.12rem",
  cursor: "pointer",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  width: "19.7rem",
  height: "6.2rem",
  borderRight: `2px solid #3E3F4E`,
  variants: {
    isOpen: {
      true: {
        backgroundColor: "$veryDarkGrey",
      },
      false: {},
    },
  },
});
