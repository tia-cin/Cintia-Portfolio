import React, { FC } from "react";
import { Social } from "./Social";
import { Email } from "./Email";

export const Contact: FC = () => {
  return (
    <div>
      <Email />
      <Social />
    </div>
  );
};
