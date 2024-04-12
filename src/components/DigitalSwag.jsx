import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { BiDownload, BiImageAdd, BiShareAlt } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";

const DigitalSwag = () => {
  const [imageUrl, setImageUrl] = useState("/pic.png");
  const [name, setName] = useState("");
  const divRef = useRef(null);
  const [files, setFile] = useState([]);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
      setFile([file, ...files]);
    }
  };
  const handleDownload = async () => {
    try {
      const canvas = await html2canvas(
        divRef.current.querySelector("#download")
      );
      const image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      console.log(image);
      const fileName = `digital_swag_${name || "anonymous"}.png`;
      const link = document.createElement("a");
      link.download = fileName;
      link.href = image;
      link.click();
    } catch (error) {
      console.error("Error generating canvas:", error);
    }
  };
  const handleShare = async () => {
    try {
      const canvas = await html2canvas(
        divRef.current.querySelector("#download")
      );
      const image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      const fileName = `digital_swag_${name || "anonymous"}.png`;
      const blob = await fetch(image).then((res) => res.blob());
      const filesArray = [new File([blob], fileName, { type: "image/png" })];
      const shareData = {
        files: filesArray,
        title: "Digital Swag",
        text: "Check out this digital swag!",
      };
      await navigator.share(shareData);
    } catch (error) {
      console.error("Error sharing image:", error);
    }
  };
  return (
    <div
      ref={divRef}
      className="flex flex-col-reverse lg:flex-row py-8 lg:py-0 justify-around gap-4 lg:gap-0 items-center min-h-screen bg-gradient-to-r from-blue-900 to-red-500"
    >
      {/* Left Section */}
      <div
        className="relative bg-center bg-cover w-[300px] h-[500px] lg:w-[400px] lg:h-[700px] border-2"
        id="download"
        style={{ backgroundImage: `url('/swag.png')` }}
      >
        <LazyLoadImage
          src={imageUrl}
          alt="pic"
          className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 lg:w-60 w-44 h-48w-44 lg:h-60 border-4"
          id="Pic"
        />
        <div className="absolute text-white text-center bottom-28 lg:bottom-40 left-[50%] transform -translate-x-1/2 block w-[200px] font-bold">
          {name}
        </div>
      </div>
      {/* Right Section */}
      <div className="flex flex-col items-center justify-center lg:gap-10 gap-4 w-[90%] lg:w-2/3">
        <h1 className="lg:text-[4rem] md:text-3xl text-2xl">Digital Swag</h1>
        <h2 className="lg:text-[2rem] md:text-lg text-center text-[10px] font-Phudu">
          Ready to rock Dexterix 4.0? Show the world your excitement with our
          exclusive digital badge! Personalize your Dexterix 4.0 Badge with your
          name and photo. Download it and spread the word on social media using
          #Dexterix .
        </h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className=" bg-gray-200 text-gray-800 lg:p-3 p-1 md:p-2 rounded-md outline-none text-center border-black border-2"
        />
        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-10 gap-3">
          <label
            htmlFor="input-file"
            className="w-48 text-white lg:p-3 p-1 md:p-2 rounded-md bg-black cursor-pointer border-white border-2 border-dashed flex justify-center items-center gap-1"
          >
            <BiImageAdd />
            Upload Image
          </label>
          <input
            type="file"
            accept="image/jpeg, image/png, image/jpg"
            id="input-file"
            className="hidden"
            onChange={handleImageChange}
          />
          <button
            onClick={handleDownload}
            className="w-48 bg-black text-white lg:p-3 p-1 md:p-2 rounded-md cursor-pointer text-center flex justify-center items-center gap-1 border-2"
          >
            <BiDownload className="text-2" />
            Download
          </button>
          <button
            onClick={handleShare}
            className="w-48 bg-black text-white lg:p-3 p-1 md:p-2 rounded-md cursor-pointer text-center flex justify-center items-center gap-1 border-2"
          >
            <BiShareAlt className="text-2" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalSwag;
