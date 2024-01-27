"use client"
import React, {useState, useEffect} from "react";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";


function Nav() {

   const {user, isLoaded} = useUser()


   
    
  return ( 
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Stacked</a>
      </div>
      {/* positioned in middle  */}

      {user && <div className=" flex-1">
        <Link className="m-4" href='/explore'>Explore</Link>
        <Link className="m-4" href='/dashboard'>Dashboard</Link>
        <Link className="m-4" href='/profile'>Profile</Link>
      </div>}
      
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
        {user && <UserButton afterSignOutUrl='/'></UserButton>}
      </div>
    </div>
  );
}

export default Nav;
