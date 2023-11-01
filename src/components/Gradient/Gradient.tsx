import React, { PropsWithChildren } from "react";
import cx from "classnames";
import "./gradient.scss";

enum Variant {
  primary = "primary",
  secondary = "secondary",
}

interface GradientProps {
  variant: keyof typeof Variant;
  styles?: object;
}

export const Gradient = (props: PropsWithChildren<GradientProps>) => {
  const { children, variant, styles } = props;

  return (
    <div className={cx("gradient", variant)} style={styles}>
      {children}
    </div>
  );
};
