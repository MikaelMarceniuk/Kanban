import { createStitches } from "@stitches/react";

export const { theme, getCssText, styled, keyframes, globalCss, css } =
  createStitches({
    theme: {
      colors: {
        mainPurple: "#635FC7",
        mainPurpleHover: "#A8A4FF",
        bakgroundWhiteButton: '#D8D7F1',
        bakgroundWhiteButtonHover: '#EFEFF9',
        black: "#000112",
        white: '#FFFFFF',
        veryDarkGrey: "#20212C",
        linesDark: "#3E3F4E",
        linesLight: "#E4EBFA",
        darkGrey: "#2B2C37",
        mediumGrey: '#828FA3',

        lightGrey: "#F4F7FD",
        red: "#EA5555",
        redHover: "#FF9898",
      },
      fonts: {
        jakarta: 'Plus Jakarta Sans, sans-serif'
      },
    },
  });
