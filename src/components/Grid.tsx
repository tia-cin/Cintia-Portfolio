import React from "react";
import lozad from "lozad";

interface Item {
  title: string;
  img: string;
  from: string;
}

const Grid: React.FC<{ items: Item[]; color: string }> = ({ items, color }) => {
  React.useEffect(() => {
    const observer = lozad("#item");
    observer.observe();
    return () => observer.observer.disconnect();
  }, []);
  return (
    <section className="  grid grid-cols-4 gap-5 mx-10">
      {items.map((e) => (
        <div
          id="item"
          className="gs_reveal h-60 rounded-xl flex flex-col items-center p-2 px-5 drop-shadow-xl"
          style={{ backgroundColor: color }}
        >
          <div className="bg-main-bg w-full flex justify-center m-2 rounded-xl">
            <img
              src={e.img}
              alt={`${e.title} cerification`}
              className="h-20 p-2 object-contain"
            />
          </div>
          <div className="flex flex-col justify-between h-full">
            <p className="text-2xl font-medium text-center">{e.title}</p>
            <p className="text-center text-lg">{e.from}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Grid;
