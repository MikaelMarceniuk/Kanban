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
          color: "$white",
        },
        headingL: {
          fontSize: "18px",
          lineHeight: "23px",
          fontWeight: "700",
          color: "$white",
        },
        headingM: {
          fontSize: "15px",
          lineHeight: "px",
          fontWeight: "700",
          color: "$white",
        },
        headingS: {
          fontSize: "12px",
          lineHeight: "30px",
          fontWeight: "700",
          color: "$white",
        },
      },
    },
  });
