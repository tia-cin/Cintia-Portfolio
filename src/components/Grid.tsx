import React from "react";
import lozad from "lozad";
import { TbCertificate } from "react-icons/tb";

interface Item {
  img: string;
  from: string;
  exp: Experience[];
}

interface Experience {
  title: string;
  skills: string[];
  credential: string;
}

const Grid: React.FC<{ items: Item[] }> = ({ items }) => {
  React.useEffect(() => {
    const observer = lozad("#item, #item img");
    observer.observe();
    return () => observer.observer.disconnect();
  }, []);
  return (
    <section className="gs_reveal grid grid-cols-3 gap-5 mx-10">
      {items.map((e: Item, i: number) => (
        <div
          key={i}
          id="item"
          className="rounded-xl flex flex-col items-center p-2 px-5 shadow-xl"
        >
          <div className="bg-main-bg w-full flex justify-center m-2 rounded-xl">
            <img src={e.img} alt={e.from} className="h-20 p-2 object-contain" />
          </div>
          <div className="flex justify-between h-full w-full">
            <div className="flex flex-col items-center w-1/5">
              <TbCertificate className="text-6xl" />
              <div className="border-l border-gray-500 h-full" />
            </div>
            <div className="flex flex-col w-4/5">
              {e.exp.map((ex: Experience, i: number) => (
                <div key={i}>
                  <h3 className="font-bold">{ex.title}</h3>
                  <p className="font-medium text-xs">
                    Skills:{" "}
                    <span className="font-normal">{ex.skills.join(", ")}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Grid;
