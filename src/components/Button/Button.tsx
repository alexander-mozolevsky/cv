import React, { PropsWithChildren } from "react";
import cx from "classnames";
import "./button.scss";

enum Variant {
  bordered = "bordered",
  filled = "filled",
}

interface ButtonProps {
  variant: keyof typeof Variant;
  onClick(): void;
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { children, variant, onClick } = props;

  return (
    <button className={cx("button", variant)} onClick={onClick}>
      {children}
    </button>
  );
};
