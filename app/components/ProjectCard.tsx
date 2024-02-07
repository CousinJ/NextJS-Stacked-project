"use client";
import React, { useState } from "react";
import Link from "next/link";
function ProjectCard(props: any) {
 

  return (
    <div className="flex items-center text-m border border-gray-700 w-full   h-16 rounded-xl  p-1 m-2 relative">
      <div
        
        className="flex flex-col items-center justify-center text-m rounded-xl text-center w-1/6 h-full"
      >
        {props.project_info.name}
        <p className=" text-indigo-400 text-sm">{props.user_info.name}</p>
      </div>
      

      <div className="flex items-center justify-between w-full">
        {props.project_info.public && (
          <div
            className="w-5 h-5  ml-8 rounded-full   overflow-hidden"
            style={{
              backgroundImage: `url('/public.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
        {!props.project_info.public && (
          <div
            className="w-5 h-5  ml-8 rounded-full  overflow-hidden"
            style={{
              backgroundImage: `url('/private.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}

        <Link className=" btn btn-ghost m-1" href={`/project/${props.id}`}>Open</Link>
      </div>
    </div>
  );
}

export default ProjectCard;
