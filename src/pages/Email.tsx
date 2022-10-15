import React, { FC, useState } from "react";
import { Inputs } from "../components";
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
    <div className="flex justify-center items-center relative w-full h-screen overflow-hidden mt-20">
      <div>
        {blobs.slice(0, 2).map((b, i) => (
          <img
            alt="blob"
            src={b}
            key={i}
            className="animated absolute w-full h-full top-0 left-0 object-contain"
            id={(Math.floor(Math.random() * 4) + 1).toString()}
          />
        ))}
      </div>
      <form
        onSubmit={sendMail}
        style={{ zIndex: 1 }}
        className="flex flex-col items-center"
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
          <div>
            <p style={{ position: "fixed", top: 20 }}>
              Your mail has been delivered!
            </p>
          </div>
        )}
      </form>
      <div>
        {blobs.slice(2, 4).map((b, i) => (
          <img
            alt="blob"
            src={b}
            key={i}
            className="animated position-absolute w-full h-full top-0 left-0 object-contain"
            id={(Math.floor(Math.random() * 4) + 1).toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default Email;
