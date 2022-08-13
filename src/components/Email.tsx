import React, { FC, useState } from "react";
import { Inputs } from "./Inputs";
// MUI
import { Grid, Button, Alert } from "@mui/material";
// icons
import SendIcon from "@mui/icons-material/Send";
// emailjs
import emailjs from "@emailjs/browser";

export const Email: FC = () => {
  const [done, setDone] = useState(false);
  const sendMail = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_o0smcjb",
      "template_3pqqcx5",
      e.target,
      "Q2GNQFDrDl6zPbgn9"
    );
    setDone(true);
    e.target.reset();
  };
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
      {done && (
        <Grid>
          <Alert severity="success">Your mail has been delivered!</Alert>
        </Grid>
      )}
    </form>
  );
};
