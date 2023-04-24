import React from "react";

interface Item {
  title: string;
  img: string;
  from: string;
}

const Grid: React.FC<{ items: Item[] }> = ({ items }) => {
  return (
    <section className="grid grid-cols-4 gap-5 mx-10">
      {items.map((e) => (
        <div className="bg-indigo-500 rounded flex flex-col items-center p-2">
          <div className="bg-main-bg w-full flex justify-center m-2 rounded">
            <img
              src={e.img}
              alt={`${e.title} cerification`}
              className="h-20 p-1 object-contain"
            />
          </div>
          <div>
            <p>{e.title}</p>
            <span>{e.from}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Grid;
