import React from "react";
import { Grid, Button, FormControl, TextField } from "@mui/material";
// icons
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TitleIcon from "@mui/icons-material/Title";
import SubjectIcon from "@mui/icons-material/Subject";

export const Email = () => {
  return (
    <Grid id="contact" container>
      <Grid container justifyContent="center">
        <Grid item xs={11}>
          <Grid>Let's get in touch!</Grid>
          <FormControl>
            <Grid container item xs={6}>
              <Grid>Full name</Grid>
            </Grid>
            <Grid>
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="With sx"
                variant="standard"
              />
            </Grid>
            <Grid container item xs={6}>
              <Grid>Email</Grid>
            </Grid>
            <Grid>
              <AlternateEmailIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
              <TextField
                id="input-with-sx"
                label="With sx"
                variant="standard"
              />
            </Grid>
            <Grid container item xs={6}>
              <Grid>Subject</Grid>
            </Grid>
            <Grid>
              <TitleIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="With sx"
                variant="standard"
              />
            </Grid>
            <Grid container item xs={6}>
              <Grid>Message</Grid>
            </Grid>
            <Grid>
              <SubjectIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <textarea placeholder="Add your message here" name="message" />
            </Grid>
            <Grid>
              <Button variant="contained" color="primary">
                Send
              </Button>
            </Grid>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
};
