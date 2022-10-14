import React, { FC } from "react";
import { Links } from "./";

const Navbar: FC = () => {
  return (
    <nav>
      {/* <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ position: "fixed", zIndex: 1 }}
      >
        <Links
          link="/"
          href=""
          name="Home"
          icon={<HomeIcon sx={{ fontSize: "2.5em" }} />}
        />

        <Links
          link="/contact"
          href=""
          name="Contact"
          icon={<ChatIcon sx={{ fontSize: "2.5em" }} />}
        />
      </Grid> */}
    </nav>
  );
};

export default Navbar;
