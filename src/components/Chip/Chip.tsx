import React, { PropsWithChildren } from "react";
import "./chip.scss";

export const Chip = ({ children }: PropsWithChildren) => (
  <div className="chip">
    <span>{children}</span>
    <div className="line" />
  </div>
);
