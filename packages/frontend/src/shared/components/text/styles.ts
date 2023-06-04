import { styled } from "../../../styles/themes/default";
import { TagTypes } from "./text";

export const getStyledTag = (type: TagTypes) =>
  styled(type, {
    all: "unset",
    variants: {
      variant: {
        headingXL: {
          fontSize: "24px",
          lineHeight: "30px",
          fontWeight: "700",
        },
        headingL: {
          fontSize: "18px",
          lineHeight: "23px",
          fontWeight: "700",
        },
        headingM: {
          fontSize: "15px",
          lineHeight: "px",
          fontWeight: "700",
        },
        headingS: {
          fontSize: "12px",
          lineHeight: "30px",
          fontWeight: "700",
        },
      },
    },
  });
