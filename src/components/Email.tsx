import React, { FC, useState } from "react";
import { Inputs } from "./Inputs";
// MUI
import { Grid, Button, Alert, Typography } from "@mui/material";
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
    <Grid container justifyContent="center">
      <form onSubmit={sendMail}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          sx={{ margin: "1em" }}
        >
          <Grid sx={{ my: ".5em" }}>
            <Typography variant="h2" sx={{ textAlign: "center" }}>
              Well Hi There!
              <br />
              How can I help you?
            </Typography>
          </Grid>
          <Inputs title="Full Name" name="name" />
          <Inputs title="Email" name="email" />
          <Inputs title="Subject" name="subject" />
          <Inputs title="Message" name="messge" />
          <Grid container item xs={6} justifyContent="center">
            <Button
              size="large"
              variant="outlined"
              color="secondary"
              type="submit"
            >
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
    </Grid>
  );
};
