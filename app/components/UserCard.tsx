import React from 'react'
import Link from 'next/link';
function UserCard(props: any) {
    return (
        <div className="flex items-center text-m border border-gray-700 w-full   h-16 rounded-xl  p-1 m-2 relative">
         <div
     className=" ml-8 w-12 h-12  rounded-full   overflow-hidden"
            style={{
              backgroundImage: `url(${props.data.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          /> 
          <div
            
            className="flex flex-col items-center justify-center text-m rounded-xl text-center w-1/6 h-full"
          >
            {props.data.name}
            <p className=" text-indigo-400 text-sm">{props.data.title}</p>
          </div>
          
    
          <div className="flex justify-between w-full">
           
          <Link className=" btn btn-ghost m-1 " href={`/user-page/${props.id}`}>View Profile</Link>
            
          </div>
        </div>
      );
}


export default UserCard