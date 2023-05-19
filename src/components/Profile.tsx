import React from "react";

const Profile: React.FC<{ photo: string; introduction: string }> = ({
  photo,
  introduction,
}) => {
  return (
    <div className="h-screen">
      <div>
        <img src={photo} alt="" className="rounded-full" />
      </div>
    </div>
  );
};

export default Profile;
