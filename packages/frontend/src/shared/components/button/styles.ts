import { styled } from "../../../styles/themes/default";
import { transparentize } from "polished";

export const StyledButton = styled("button", {
  all: "unset",
  outline: "none",
  border: "none",
  height: "38px",
  padding: "0px 51px",
  borderRadius: "24px",
  cursor: "pointer",
  userSelect: "none",

  "&:disabled": {
    cursor: "not-allowed",
  },

  /** Estilizações de todas as variações do botão
   * https://stitches.dev/docs/variants */
  variants: {
    color: {
      primary: {
        "&.variant--default": {
          color: "$white",
          backgroundColor: "$mainPurple ",

          "&:hover:not(:disabled)": {
            backgroundColor: "$mainPurpleHover",
          },
        },
      },
      secondary: {
        "&.variant--default": {
          color: "$mainPurple",
          backgroundColor: "$bakgroundWhiteButtonHover",

          "&:hover:not(:disabled)": {
            color: "$mainPurple",
            backgroundColor: "$bakgroundWhiteButton",
          },
        },
      },
      destructive: {
        "&.variant--default": {
          color: "$white",
          backgroundColor: "$red",

          "&:hover:not(:disabled)": {
            color: "$white",
            backgroundColor: "$redHover",
          },
        },
      },
    },
  },
});
