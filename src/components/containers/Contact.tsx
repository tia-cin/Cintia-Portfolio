import React, { FC, useState } from "react";
import { Social } from "../Social";
import { Email } from "../Email";
// emailjs
import emailjs from "@emailjs/browser";
// MUI
import { Grid, Alert } from "@mui/material";

export const Contact: FC = () => {
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
    <div>
      <Grid id="contact" container>
        <Grid container justifyContent="center">
          <Grid item xs={11}>
            <Grid>Let's get in touch!</Grid>
            <Email sendMail={sendMail} />
            {done && (
              <Grid>
                <Alert severity="success">Your mail has been delivered!</Alert>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
      <Social />
    </div>
  );
};
