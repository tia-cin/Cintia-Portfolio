import React, { FC, useState } from "react";
import { Inputs } from "../components";
import { StyledGrid } from "../components/Landing";
import { Grid, Alert } from "@mui/material";
import emailjs from "@emailjs/browser";
import { blobs } from "../assets";

const Email: FC = () => {
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
    setTimeout(() => {
      setDone(false);
    }, 5000);
  };
  return (
    <StyledGrid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        marginTop: "5em",
      }}
    >
      <div className=":md-d-none">
        {blobs.slice(0, 2).map((b, i) => (
          <img
            alt="blob"
            src={b}
            key={i}
            style={{
              top: 0,
              left: 0,
              objectFit: "contain",
            }}
            className="animated position-absolute w-100 h-100"
            id={(Math.floor(Math.random() * 4) + 1).toString()}
          />
        ))}
      </div>
      <form
        onSubmit={sendMail}
        style={{ zIndex: 1 }}
        className="d-flex flex-column align-items-center"
      >
        <h1>Hi There! How can I help you?</h1>
        <Inputs title="Full Name" name="name" />
        <Inputs title="Email" name="email" />
        <Inputs title="Subject" name="subject" />
        <Inputs title="Message" name="messge" />
        <button type="submit" className="btn w-75 btn-large btn-primary my-2">
          Send
        </button>
        {done && (
          <Grid container justifyContent="center">
            <Alert severity="success" sx={{ position: "fixed", top: 20 }}>
              Your mail has been delivered!
            </Alert>
          </Grid>
        )}
      </form>
      <div className=":md-d-none">
        {blobs.slice(2, 4).map((b, i) => (
          <img
            alt="blob"
            src={b}
            key={i}
            style={{
              top: 0,
              left: 0,
              objectFit: "contain",
            }}
            className="animated position-absolute w-100 h-100"
            id={(Math.floor(Math.random() * 4) + 1).toString()}
          />
        ))}
      </div>
    </StyledGrid>
  );
};

export default Email;
