import React, { FC, useState } from "react";
import { Inputs } from ".";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

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
    <div
      id="contact"
      className="gs_reveal flex justify-center items-center relative w-full h-screen overflow-hidden"
    >
      <form
        onSubmit={sendMail}
        className="flex flex-col items-center w-3/4 sm:w-full"
      >
        <h1 className="text-5xl font-bold  text-center mb-2 sm:w-full">
          Hi There! <p className="text-lg font-medium">How can I help you?</p>
        </h1>
        <div className="w-3/5">
          <Inputs title="Full Name" name="name" />
          <Inputs title="Email" name="email" />
          <Inputs title="Subject" name="subject" />
          <Inputs title="Message" name="messge" />
        </div>
        <button
          type="submit"
          className="w-2/4 bg-teal-500 rounded my-2 py-3 uppercase font-semibold text-xl"
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
