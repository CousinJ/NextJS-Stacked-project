"use client";
import React from "react";
import { useState, ChangeEvent, useEffect } from "react";

function ProfileInput(props: any) {
  const loadedUserData = {
    name: props.userData.name,
    title: props.userData.title,
    description: props.userData.description,
    image: props.userData.image,
  };
//function to handle changing file data to usable URL using FileReader.
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        // Access the result inside the onload event handler
        const dataUrl = reader.result;

        // Now you can use the data URL as needed
        setCurrentUserData((prevUserData) => ({
          ...prevUserData,
          image: dataUrl,
        }));
      };
      reader.readAsDataURL(file); // Start reading the file
    }
  };

//use state variables to keep track of current user data state. 
//set it equal to loadedUserData to fetch data from parent page.
  const [currentUserData, setCurrentUserData] = useState(loadedUserData);


  // Refrsh the page and set database Data as the client data
  useEffect(() => {
    setCurrentUserData(loadedUserData);
  }, []);



  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Destructure 'name' and 'value' from the event target
    const { name, value } = e.target;

    // Update state with the new value for the specific field
    setCurrentUserData((prevFormData) => ({
      ...prevFormData, // Spread the previous state
      [name]: value, // Update the specific field with the new value
    }));
  };

  return (
    <div className='"w-full h-auto  text-white p-8  rounded-lg m-8  overflow-y-auto flex'>
      {/* Profile Form */}
      <div className="flex flex-col w-full">
        {/* Name */}
        <div className="w-full h-16  text-white p-4 rounded-lg m-4 flex items-center">
          <div className="w-20 h-full items-center">
            <h3>Name</h3>
          </div>
          <input
            value={currentUserData.name}
            onChange={handleChange}
            name="name"
            type="text"
            className="input input-bordered input-ghost w-full max-w-xs m-2 text-sm"
          />
        </div>
        {/* Title */}
        <div className="w-full h-16  text-white p-4 rounded-lg m-4 flex items-center">
          <div className="w-20 h-full items-center">
            <h3>Title</h3>
          </div>
          <input
            value={currentUserData.title}
            onChange={handleChange}
            name="title"
            type="text"
            className="input input-bordered input-ghost w-full max-w-xs m-2 text-sm"
          />
        </div>
        {/* Description */}
        <div className="w-full h-32 text-white p-4 rounded-lg m-4 flex items-center">
          <div className="w-20 h-full items-center">
            <h3>Description</h3>
          </div>
          <textarea
            value={currentUserData.description}
            onChange={handleChange}
            name="description"
            maxLength={250}
            className="input input-bordered input-ghost w-full max-w-xl m-4 h-full text-sm p-2"
          />
        </div>
        {/* Profile Image */}
        <div className="w-full h-16  text-white p-4 rounded-lg m-4 flex items-center">
          <div className="w-20 h-full items-center">
            <h3>Image</h3>
          </div>
          <input
            onChange={handleFileChange}
            type="file"
            name="image"
            className="file-input file-input-bordered file-input-neutral w-full max-w-xs"
          />
          <input
            type="hidden"
            name="imageUrl"
            value={currentUserData.image}
          ></input>
        </div>
        {/* Stack */}
        <div className="w-full h-16 text-white p-4 rounded-lg m-4 flex items-center">
          <div className="w-20 h-full items-center">
            <h3>Stack</h3>
          </div>
          <button className="btn btn-primary">Select Languages</button>
        </div>
        {/* Update Data Button */}
        <div className="w-full h-16 text-white p-4 rounded-lg m-4 flex items-center">
          {/* Other content goes here */}
          <button type="submit" className="btn btn-primary ml-auto">
            Save Changes
          </button>
        </div>
      </div>
      {/* Square Div on the Right */}
      <div
        className="w-16 h-16 border border-white rounded-full overflow-hidden ml-8"
        style={{
          backgroundImage: `url(${currentUserData.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}

export default ProfileInput;
