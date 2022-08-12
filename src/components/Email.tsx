import React, { FC, useState } from "react";
import { Inputs } from "./Inputs";
// MUI
import { Grid, Button } from "@mui/material";
// icons
import SendIcon from "@mui/icons-material/Send";

interface EmailProps {
  sendMail: (e: any) => void;
}

export const Email: FC<EmailProps> = ({ sendMail }) => {
  return (
    <form onSubmit={sendMail}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        sx={{ margin: "1em" }}
      >
        <Inputs title="Full Name" name="name" label="Joe Doe" />
        <Inputs title="Email" name="email" label="joedoe@mail.com" />
        <Inputs title="Subject" name="subject" label="New Project" />
        <Inputs title="Message" name="messge" label="Add your message here" />
        <Grid container item xs={6} justifyContent="center">
          <Button variant="text" color="primary" type="submit">
            Send
            <SendIcon sx={{ fontSize: "1em", margin: "0 .5em" }} />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
