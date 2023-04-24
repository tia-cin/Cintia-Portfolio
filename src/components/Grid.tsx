import React from "react";

interface Item {
  title: string;
  img: string;
  from: string;
}

const Grid: React.FC<{ items: Item[]; color: string }> = ({ items, color }) => {
  return (
    <section className="grid grid-cols-4 gap-5 mx-10">
      {items.map((e) => (
        <div
          className="h-60 rounded-xl flex flex-col items-center p-2 px-5"
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
