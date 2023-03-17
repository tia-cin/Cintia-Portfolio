import React, { FC } from "react";
import { Link } from "react-router-dom";

export const Cards: FC<{
  link: string;
  logo: string;
  alt: string;
  title: string;
  description: string;
  color: string;
}> = ({ link, logo, alt, title, description, color }) => {
  return (
    <section
      style={{ backgroundColor: color }}
      className="rounded drop-shadow-xl p-2 flex justify-between items-center w-full h-screen sm:w-fit sm:justify-center"
    >
      <div
        className="my-2 mx-5 bg-slate-50 rounded w-20 h-20 sm:w-50 sm:h-50"
        onClick={() => window.open(link, "_blank")}
      >
        <img src={logo} alt={alt} className="object-cover w-full h-full p-2" />
      </div>
      <div className="w-3/4 sm:hidden">
        <p className="text-lg font-semibold m-0 ">{title}</p>
        <p className="h-15 mb-3 ">{description}</p>
        <button
          className="rounded w-full bg-slate-50 my-2 py-2 uppercase font-semibold"
          onClick={() => window.open(link, "_blank")}
        >
          Explore
        </button>
      </div>
    </section>
  );
};

export const Bubble: FC<{
  link: string;
  name: string;
  color: string;
}> = ({ link, name }) => {
  return (
    <div className="m-2 rounded-xl w-32 bg-slate-50">
      <a href={link} style={{ textDecoration: "none" }}>
        <p className="uppercase text-lg text-center px-1">{name}</p>
      </a>
    </div>
  );
};

export const Links: FC<{
  link?: string;
  href?: string;
  name: string;
  icon: any;
}> = ({ link, href, icon }) => {
  return (
    <div className="my-2 mx-5 cursor-pointer">
      {link && <Link to={link}>{icon}</Link>}
      {href && (
        <button onClick={() => window.open(href, "_self")}>{icon}</button>
      )}
    </div>
  );
};

export const Inputs: FC<{
  title: string;
  name: string;
}> = ({ title, name }) => {
  return (
    <div>
      {title === "Message" ? (
        <textarea
          className="rounded border-color border my-3 p-2 w-80"
          rows={5}
          placeholder={title}
          name={name}
        ></textarea>
      ) : (
        <input
          type="text"
          placeholder={title}
          name={name}
          className="rounded border-color border my-3 p-2 w-80 placeholder-black"
        />
      )}
    </div>
  );
};
