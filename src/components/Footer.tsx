import React, { FC } from "react";
import { social } from "../assets";
import { Links } from "./";
import { Grid, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import wave from "../assets/svgs/wave.png";

const Footer: FC = () => {
  return (
    <footer>
      <Grid
        item
        container
        direction="row"
        justifyContent="space-evenly"
        sx={{
          py: "5em",
          backgroundImage: `url(${wave})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Links
          href={social[0].link}
          name={social[0].alt}
          icon={<LinkedInIcon sx={{ fontSize: "5em" }} />}
        />
        <Links
          href={social[1].link}
          name={social[1].alt}
          icon={<GitHubIcon sx={{ fontSize: "5em" }} />}
        />
        <Links
          link="/contact"
          name="Contact"
          icon={<EmailIcon sx={{ fontSize: "5em" }} />}
        />
        <Grid item container justifyContent="center">
          <Typography variant="subtitle1">Made with 💛 by Cintia</Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
