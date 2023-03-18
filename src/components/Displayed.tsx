import React, { FC } from "react";
import { Link } from "react-router-dom";

export const Cards: FC<{
  link: string;
  landing: string;
  alt: string;
  title: string;
  description: string;
  color: string;
}> = ({ link, landing, alt, title, description, color }) => {
  return (
    <section
      id="card"
      style={{ backgroundColor: color }}
      className="h-screen w-full relative"
    >
      <div className="bg-black opacity-40 z-2 w-full">
        <img src={landing} alt={alt} className=" w-full h-screen opacity-50 " />
      </div>
      <div className="h-screen z-10 absolute top-60 w-full">
        <p className="text-8xl font-semibold m-0 text-center">{title}</p>
        <p className="h-15 my-3 text-2xl ml-20 text-center">{description}</p>
        <div className="flex justify-center">
          <button
            className="rounded w-60 bg-slate-50 my-2 py-2 uppercase font-semibold"
            onClick={() => window.open(link, "_blank")}
          >
            Explore
          </button>
        </div>
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
