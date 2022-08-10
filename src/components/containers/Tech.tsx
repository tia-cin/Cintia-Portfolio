import React, { FC } from "react";
import { TechStack } from "../TechStack";
import { technologies } from "../../types";
// MUI
import { Grid } from "@mui/material";

export const Tech: FC = () => {
  return (
    <div>
      <Grid container>
        <TechStack data={technologies.frontend} title="Frontend Stack" />
        <TechStack data={technologies.ui} title="Design Stack" />
        <TechStack data={technologies.backend} title="Backend Stack" />
        <TechStack data={technologies.testing} title="Testing Stack" />
        <TechStack data={technologies.database} title="Database Stack" />
        <TechStack data={technologies.others} title="More Stack" />
      </Grid>
    </div>
  );
};
