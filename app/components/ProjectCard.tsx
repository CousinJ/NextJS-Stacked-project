"use client";
import React, { useState } from "react";

function ProjectCard(props: any) {
  const [dropDown, setDropDown] = useState(false);

  const handleOpen = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="flex items-center text-m border border-gray-700 w-full   h-16 rounded-xl  p-1 m-2 relative">
      <div
        onClick={handleOpen}
        className="flex items-center justify-center text-m rounded-xl text-center w-1/6 h-full"
      >
        {props.data.name}
      </div>

      {/* drop down */}
      {dropDown && (
        <div className="text-gray-400 text-sm text-center">
          <p className="p-1 text-left text-gray-300">
            {props.data.description}
          </p>
        </div>
      )}

      <div className="flex justify-between w-full">
        {props.data.public && (
          <div
            className="w-5 h-5  ml-8 rounded-full bg-white  overflow-hidden"
            style={{
              backgroundImage: `url('/public.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
        {!props.data.public && (
          <div
            className="w-5 h-5  ml-8 rounded-full bg-white overflow-hidden"
            style={{
              backgroundImage: `url('/private.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}

        <div
          className="w-5 h-5 rounded-full overflow-hidden ml-8  "
          style={{
            backgroundImage: `url('/down.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
}

export default ProjectCard;
