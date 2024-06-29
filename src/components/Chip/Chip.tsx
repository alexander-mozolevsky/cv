import React, { PropsWithChildren } from "react";
import "./chip.scss";

export const Chip = ({
  children,
  gray,
}: PropsWithChildren & { gray?: boolean }) => (
  <div className={`chip ${gray ? "grayed" : ""}`}>
    <span>{children}</span>
    <div className="line" />
  </div>
);
