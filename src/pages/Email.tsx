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
      <div style={{ zIndex: 0 }}>
        {blobs.slice(0, 4).map((b, i) => (
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
        className="flex flex-col items-center w-1/2"
      >
        <h1 className="text-5xl font-bold w-3/4 text-center mb-2">
          Hi There! How can I help you?
        </h1>
        <Inputs title="Full Name" name="name" />
        <Inputs title="Email" name="email" />
        <Inputs title="Subject" name="subject" />
        <Inputs title="Message" name="messge" />
        <button
          type="submit"
          className="w-1/2 bg-teal-500 rounded my-2 py-3 uppercase font-semibold text-xl"
        >
          Send
        </button>
        {done && (
          <div className="flex justify-center bg-green-500 py-4 px-6 fixed top-5 rounded">
            <p className="font-semibold">Your mail has been delivered!</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Email;
