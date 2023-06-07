import { styled } from "../../../../styles/themes/default";

export const StyledUl = styled("ul", {
  display: "flex",
  flexDirection: 'column',
  gap: '1rem',
  listStyle: 'none',
  padding: '0rem',
});

export const StyledLi = styled("li", {

    paddingLeft: '2rem',
    paddingRight: '2rem',
    marginLeft: '-2rem',
    height: '3rem',
    width: '17.25rem',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '0px 100px 100px 0px'
})
export const ContentContainer = styled("div", {
  marginLeft: "$isOpen 18.75rem 0",
});
