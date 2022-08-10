import React, { FC, useState } from "react";
import { Inputs } from "./Inputs";
// MUI
import { Grid, Button } from "@mui/material";

interface EmailProps {
  sendMail: (e: any) => void;
}

export const Email: FC<EmailProps> = ({ sendMail }) => {
  return (
    <form onSubmit={sendMail}>
      <Inputs title="Full Name" name="name" label="Joe Doe" />
      <Inputs title="Email" name="email" label="joedoe@mail.com" />
      <Inputs title="Subject" name="subject" label="New Project" />
      <Grid container item xs={6}>
        <Grid>Message</Grid>
        <Grid item>
          <textarea placeholder="Add your message here" name="message" />
        </Grid>
      </Grid>
      <Grid container item xs={6}>
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </Grid>
    </form>
  );
};
