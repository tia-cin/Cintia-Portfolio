import React, { FC, useState } from "react";
import { Links } from "../Links";
import { Email } from "../Email";
import { social } from "../../types";
// emailjs
import emailjs from "@emailjs/browser";
// MUI
import { Grid, Alert } from "@mui/material";
// icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

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
      <Grid item container direction="row" justifyContent="center">
        <Links
          link=""
          href={social[0].link}
          name={social[0].alt}
          icon={<LinkedInIcon />}
        />
        <Links
          link=""
          href={social[1].link}
          name={social[1].alt}
          icon={<GitHubIcon />}
        />
      </Grid>
    </div>
  );
};
