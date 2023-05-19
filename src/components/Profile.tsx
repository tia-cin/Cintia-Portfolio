import React from "react";

const Profile: React.FC<{ photo: string; colors: string[] }> = ({
  photo,
  colors,
}) => {
  return (
    <div
      className="gs_reveal h-screen flex justify-evenly items-center"
      id="about"
    >
      <div>
        <img src={photo} alt="cintia-arce" className="rounded-full w-[400px]" />
      </div>
      <div className="w-1/2 h-[400px]">
        <h2 className="text-4xl font-bold leading-extra">
          Passionate and Driven Independent Software Engineer Student with a
          Robust Background in Full-Stack Development and Design
        </h2>
        <p className="text-lg text-gray-700">
          Driven to make a significant impact in the industry, constantly
          seeking opportunities to learn, and showcasing expertise in web
          development, design, and industry-standard tools.
        </p>
        <div className="flex justify-end mt-5">
          {colors.map((c) => (
            <div
              key={c}
              style={{ backgroundColor: c }}
              className="bg-[${c}] w-5 h-5 rounded-full ml-5"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
