import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";
import { Text } from "../text";
import classNames from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: "primary" | "secondary" | "destructive";
  variant: "default";
  children: string;
}

export const Button = ({ children, color, variant, ...rest }: Props) => {
  const buttonClasses = classNames(rest.className, {
    "variant--default": variant === "default",
  });

  return (
    <StyledButton className={buttonClasses} color={color} {...rest}>
      <Text variant="headingS" as="span">
        {children}
      </Text>
    </StyledButton>
  );
};
