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
      className="rounded shadow-xl p-2 flex justify-between items-center w-400"
    >
      <div className="my-2 mx-5 bg-slate-50 rounded w-20 h-20">
        <img src={logo} alt={alt} className="object-cover w-full h-full p-2" />
      </div>
      <div className="w-3/4">
        <p className="text-lg font-semibold m-0">{title}</p>
        <p className="h-15 mb-3">{description}</p>
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
  logo: string;
  alt: string;
  color: string;
}> = ({ link, logo, alt, color }) => {
  return (
    <div className="m-2 g-col-2">
      <a href={link} style={{ textDecoration: "none" }}>
        <div
          style={{ backgroundColor: color }}
          className="circle animated d-flex flex-column justify-content-center align-items-center"
          id={(Math.random() * 5 + 2).toString()}
        >
          <div className="w-20 h-20">
            <img
              src={logo}
              alt={alt}
              className="w-full h-full bg-slate-100 rounded-full object-contain"
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export const Links: FC<{
  link?: string;
  href?: string;
  name: string;
  icon: any;
}> = ({ link, href, name, icon }) => {
  // const StyledGridItems = styled(Grid)`
  //   margin: 1em;
  //   p {
  //     opacity: 0;
  //   }
  //   .contain:hover p {
  //     transition: 1s;
  //     color: #191919;
  //     opacity: 1;
  //   }
  // `;
  return (
    <div>
      {link && (
        <Link to={link}>
          <button>{icon}</button>
          <p>{name}</p>
        </Link>
      )}
      {href && (
        <div>
          <button onClick={() => window.open(href, "_self")}>{icon}</button>
          <p>{name}</p>
        </div>
      )}
    </div>
    // <StyledGridItems item>
    //   {link ? (
    //     <Link
    //       className="contain"
    //       to={link && link}
    //       style={{ textDecoration: "none", width: 0 }}
    //     >
    //       <Button variant="text" sx={{ color: "#191919" }}>
    //         {icon}
    //       </Button>
    //       <p className="m-1 text-center d-none">{name}</p>
    //     </Link>
    //   ) : href ? (
    //     <a
    //       className="contain"
    //       href={href}
    //       style={{ textDecoration: "none", width: 0 }}
    //     >
    //       <Button variant="text" sx={{ color: "#191919" }}>
    //         {icon}
    //       </Button>
    //       <p className="m-1 text-center d-none">{name}</p>
    //     </a>
    //   ) : (
    //     <div className="contain">
    //       <Button variant="text" sx={{ color: "#191919", width: 0 }}>
    //         {icon}
    //       </Button>
    //       <p className="m-1 text-center d-none">{name}</p>
    //     </div>
    //   )}
    // </StyledGridItems>
  );
};

export const Inputs: FC<{
  title: string;
  name: string;
}> = ({ title, name }) => {
  return (
    <div></div>
    // <TextField
    //   rows={title === "Message" ? 8 : 0}
    //   fullWidth
    //   multiline
    //   label={title}
    //   sx={{ width: "25em", my: "1em" }}
    //   name={name}
    //   id="input-with-sx"
    //   color="success"
    // />
  );
};
