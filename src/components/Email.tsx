import React, { FC } from "react";
// MUI
import { Grid, Button, TextField } from "@mui/material";
// emailjs
import emailjs from "@emailjs/browser";
// icons
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TitleIcon from "@mui/icons-material/Title";
import SubjectIcon from "@mui/icons-material/Subject";

export const Email: FC = () => {
  const sendMail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_o0smcjb",
        "template_3pqqcx5",
        e.target,
        "Q2GNQFDrDl6zPbgn9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Grid id="contact" container>
      <Grid container justifyContent="center">
        <Grid item xs={11}>
          <Grid>Let's get in touch!</Grid>
          <form onSubmit={sendMail}>
            <Grid container item xs={6}>
              <Grid>Full name</Grid>
            </Grid>
            <Grid>
              <AccountCircle />
              <TextField
                name="name"
                id="input-with-sx"
                label="Your name"
                variant="standard"
              />
            </Grid>
            <Grid container item xs={6}>
              <Grid>Email</Grid>
            </Grid>
            <Grid>
              <AlternateEmailIcon />
              <TextField
                name="email"
                id="input-with-sx"
                label="Your email"
                variant="standard"
              />
            </Grid>
            <Grid container item xs={6}>
              <Grid>Subject</Grid>
            </Grid>
            <Grid>
              <TitleIcon />
              <TextField
                name="subject"
                id="input-with-sx"
                label="Email Subject"
                variant="standard"
              />
            </Grid>
            <Grid container item xs={6}>
              <Grid>Message</Grid>
            </Grid>
            <Grid>
              <SubjectIcon />
              <textarea placeholder="Add your message here" name="message" />
            </Grid>
            <Grid>
              <Button variant="contained" color="primary" type="submit">
                Send
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};
