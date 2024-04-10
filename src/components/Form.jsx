"use client";
import React, { useState } from "react";

export function Form() {
  const [gdriveURL, setGdriveURL] = useState("");

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append(
      "phoneNumber",
      document.getElementById("phoneNumber").value
    );

    try {
      const response = await fetch(
        "https://dex-backend-xero.koyeb.app/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        response.json().then((data) => {
          setGdriveURL(data.url);
        });
      } else {
        setGdriveURL("");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleFileChange = async (e) => {
    console.log(e.target.files[0]);
    uploadFile(e.target.files[0]);
  };

  return (
    <div className="sky bg-center  w-auto h-3000 overflow-hidden">
      <div className="stars"></div>
      <div className="stars1"></div>
      <div className="stars2"></div>
      <div className="shooting-stars absolute bottom-0 right-0"></div>
      <div className="shooting-stars absolute bottom-10 right-32"></div>
      <div className="shooting-stars absolute bottom-20 right-72"></div>
      <div className="lg:p-10 bg-zinc-900">
        <div className="lg:w-10/12 w-[96%] mx-auto rounded-none md:rounded-2xl sm:rounded-xl p-4 md:p-8 bg-black">
          <img
            src="/3d logo3-02 final.png"
            className="h-10 sm:h-14 relative top-10 "
          />
          <h2 className="font-bold lg:text-3xl text-2xl text-center text-[#E9E3D5] border-gray-300 border-b-2 w-full lg:pb-2 pb-6">
            Register for Dexterix 4.0
          </h2>
          <a
            href="home"
            className="relative text-white lg:p-2 border-2 rounded-xl left-[80%] lg:-top-10 -top-7 border-gradient-blue-red"
          >
            Go Home
          </a>
          <p className="text-[#f9f5ed] my-2 pt-6">
            <b>
              Thank you for your interest in participating in the Dexterix 4.0
              Hackathon!💻🚀
            </b>
            <br />
            Dexterix 4.0: A 36-hour innovation marathon where creativity meets
            technology. Join us at Galgotias University for an exhilarating
            journey of coding, collaboration, and competition. Unleash your
            potential, solve real-world challenges, and win exciting prizes!
          </p>
          {/* Event Details */}
          <div className="flex lg:flex-row justify-between items-start sm:flex-col mb-5">
            <p className="text-[#f9f5ed] my-2">
              <b>Event Details :</b>
              <br />
              Date:<b> 13th-14th April 2024</b>
              <br />
              Team Size : <b>4</b>(minimum) and&nbsp; <b>6</b>(maximum)
              <br />
              Location : <b>Galgotias University, Greater Noida.</b>
              <br />
              Registration Fees : <b>100 per person</b>
              <br />
              <br />
              <b>Contact</b>
              <br />
              Vedansh Tripathi 9598157259
              <br />
              Priyangana Gupta 9627311165
              <br />
              <b>Team TechnoJam</b>
              <br />
              <b>Galgotias University Students Council.</b>
            </p>
            {/* Steps to follow */}
            <p className="text-[#f9f5ed] my-2">
              <b>Steps to be Followed:</b>
              <br />
              1. <b>Enter Team Leader details.</b>
              <br />
              <br />
              2. <b>Enter member details.</b>
              <br />
              <br />
              3. <b>Complete your payment. (person * RS 100)</b>
              <br />
              <br />
              4. <b>Upload proof of payment.</b>
              <br />
              5. <b>Submit the form.</b>
            </p>
          </div>
          {/* Form */}
          <form
            className="my-2"
            method="post"
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScVZkA-33QSt73JhWXptvI3PGqBSTc5oVNGHI3rvrYo284C8A/formResponse"
          >
            {/* Team Details */}
            <div className="flex justify-between flex-wrap ">
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="teamName"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Team Name <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="entry.1932180768"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="collageName"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Collage name <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="entry.1987526107"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="justify-start pt-5   lg:w-2/5 w-full ">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  No. of Partcipants{" "}
                  <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="entry.1885897688"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>

              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="teamName"
                  id="theme"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Theme <span className="text-red-600 text-base">*</span>
                </label>
                <select
                  required
                  name="entry.200848220"
                  id="theme"
                  className={`
        flex w-full h-10 bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent
        file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
        focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
        disabled:cursor-not-allowed disabled:opacity-50
        dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
        group-hover/input:shadow-none transition duration-400
        mt-1
        border-b border-zinc-700 focus:border-b-2 focus:border-bottom-outline-color focus:outline-none peer
      `}
                >
                  <option value="">Select Theme</option>
                  <option value="Fintech">1. Fintech</option>
                  <option value="Sustainability">2. Sustainability</option>
                  <option value="Health and Wellness">
                    3. Health and Wellness
                  </option>
                  <option value="Web3 and Blockchain">
                    4. Web3 and Blockchain
                  </option>
                  <option value="Security and Cloud">
                    5. Security and Cloud
                  </option>
                  <option value="Education and Accessibility">
                    6. Education and Accessibility
                  </option>
                  <option value="Gaming/Entertainment">
                    7. Gaming/Entertainment
                  </option>
                  <option value="AR and VR">8. AR and VR</option>
                  <option value="IoT/Robotics/Drones">
                    9. IoT/Robotics/Drones
                  </option>
                  <option value="AI/ML">10. AI/ML</option>
                  <option value="Open Innovation">11. Open Innovation</option>
                  <option value="UI/UX">12. Transportaion & Logistics</option>
                </select>
              </div>
            </div>

            {/* Team Leader Detials */}
            <h1 className="text-3xl w-full text-center font-semibold text-gray-100 mt-7 mb-4">
              Team Leaders Details
            </h1>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-8 h-1 w-full" />
            <div className="flex justify-between flex-wrap  ">
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="teamName"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Name <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="entry.1217593804"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed  disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>

              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="collageName"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Gender <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="entry.918564703"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Mobile No. <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="entry.1853390448"
                  id="phoneNumber"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email Id <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="email"
                  name="entry.511454205"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Course <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="entry.1096854709"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Year <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="entry.502478469"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Admission No.* (if from GALGOTIAS UNIVERSITY)
                </label>
                <input
                  placeholder="Ex: 23SCSE1111999"
                  type="text"
                  name="entry.673940271"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
            </div>

            {/* Member 2 Details */}
            <h1 className="text-3xl w-full text-center font-semibold text-gray-100 mt-7 mb-4">
              Member 2 Details
            </h1>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-8 h-1 w-full" />
            <div className="flex justify-between flex-wrap ">
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="teamName"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Name <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="entry.148991010"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="collageName"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Gender <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="entry.708546089"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              {/* College Name Holder */}
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Mobile No. <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="entry.1307302182"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email Id <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="email"
                  name="entry.114061522"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Course <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="entry.1204337144"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Year <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="entry.1843552946"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Admission No.* (if from GALGOTIAS UNIVERSITY)
                </label>
                <input
                  placeholder="Ex: 23SCSE1111999"
                  type="text"
                  name="entry.1713029225"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
            </div>
            {/* Member 3 Details */}
            <h1 className="text-3xl w-full text-center font-semibold text-gray-100 mt-7 mb-4">
              Member 3 Details
            </h1>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-8 h-1 w-full" />
            <div className="flex justify-between flex-wrap  ">
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="teamName"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Name <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="entry.1799382749"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="collageName"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Gender <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="entry.1296943352"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              {/* College Name Holder */}
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Mobile No. <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  type="text"
                  name="entry.895621178"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email Id <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="email"
                  name="entry.24583159"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Course <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="entry.1172949681"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Year <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="entry.640328074"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Admission No.* (if from GALGOTIAS UNIVERSITY)
                </label>
                <input
                  placeholder="Ex: 23SCSE1111999"
                  type="text"
                  name="entry.1509887177"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
            </div>
            {/* Member 4 Details */}
            <h1 className="text-3xl w-full text-center font-semibold text-gray-100 mt-7 mb-4">
              Member 4 Details
            </h1>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-8 h-1 w-full" />
            <div className="flex justify-between flex-wrap ">
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="teamName"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Name <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="entry.1427779032"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="collageName"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Gender <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="entry.576038842"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              {/* College Name Holder */}
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Mobile No. <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="entry.733419504"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email Id <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="email"
                  name="entry.1083039317"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Course <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="entry.1623968367"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Year <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="entry.1820092718"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Admission No.* (if from GALGOTIAS UNIVERSITY)
                </label>
                <input
                  placeholder="Ex: 23SCSE1111999"
                  type="text"
                  name="entry.1593766942"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
            </div>
            {/* Member 5 Details */}
            <h1 className="text-3xl w-full text-center font-semibold text-gray-100 mt-7 mb-4">
              Member 5 Details
            </h1>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-8 h-1 w-full" />
            <div className="flex justify-between flex-wrap ">
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="teamName"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="entry.217134329"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="collageName"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Gender
                </label>
                <input
                  type="text"
                  name="entry.1520068299"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              {/* College Name Holder */}
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Mobile No.
                </label>
                <input
                  type="text"
                  name="entry.509162926"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email Id
                </label>
                <input
                  type="email"
                  name="entry.653903543"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Course
                </label>
                <input
                  type="text"
                  name="entry.742350815"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Year
                </label>
                <input
                  type="text"
                  name="entry.1636931516"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Admission No.* (if from GALGOTIAS UNIVERSITY)
                </label>
                <input
                  placeholder="Ex: 23SCSE1111999"
                  type="text"
                  name="entry.171135565"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
            </div>
            {/* Member 6 Details */}
            <h1 className="text-3xl w-full text-center font-semibold text-gray-100 mt-7 mb-4">
              Member 6 Details
            </h1>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-8 h-1 w-full" />
            <div className="flex justify-between flex-wrap ">
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="teamName"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="entry.1362828113"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="collageName"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Gender
                </label>
                <input
                  type="text"
                  name="entry.1165489486"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              {/* College Name Holder */}
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor=""
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Mobile No.
                </label>
                <input
                  type="text"
                  name="entry.631085892"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email Id
                </label>
                <input
                  type="email"
                  name="entry.2122006221"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Course
                </label>
                <input
                  type="text"
                  name="entry.1429329513"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Year
                </label>
                <input
                  type="text"
                  name="entry.2072706682"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="participants"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Admission No.* (if from GALGOTIAS UNIVERSITY)
                </label>
                <input
                  placeholder="Ex: 23SCSE1111999"
                  type="text"
                  name="entry.364917672"
                  className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>
            </div>

            {/* upi section */}
            <h1 className="text-3xl w-full text-center font-semibold text-gray-100 mt-7 mb-4">
              Payment
            </h1>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-8 h-1 w-full" />
            <div className="flex justify-center flex-wrap flex-col items-centre ">
              <div className="lg:w-2/5  pb-2 w-full">
                <label
                  htmlFor="Payment"
                  className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Scan QR <span className="text-red-600 text-base">*</span>
                </label>
                <input
                  type="image"
                  src="https://res.cloudinary.com/dyfhbqtjm/image/upload/f_auto,q_auto/zrtqohnmkkqazcohk5ec"
                  name=""
                  className={`flex w-full h-25 lg:left-[70%] relative bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                />
              </div>

              <div className="lg:flex lg:justify-around mt-2">
                <div className="lg:w-2/5  pb-2 w-full h-5">
                  <label
                    htmlFor="Upi transaction id"
                    className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Upi transaction id{" "}
                    <span className="text-red-600 text-base">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    name="entry.1867478914"
                    className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                  />
                </div>
                <div className="lg:w-2/5  pb-2 w-full mt-14 lg:mt-0">
                  <label
                    htmlFor="upi transaction id"
                    className="text-sm font-medium text-[#f9f5ed] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Screenshot of payment{" "}
                    <span className="text-red-600 text-base">*</span>
                  </label>

                  <input
                    required
                    type="file"
                    onChange={handleFileChange}
                    className={`flex w-full h-10  bg-zinc-800 text-white rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1
             border-b border-zinc-700  focus:border-b-2 focus:border-bottom-outline-color  focus:outline-none peer `}
                  />
                  <input
                    type="text"
                    name="entry.1147912076"
                    id="gdriveURL"
                    value={gdriveURL}
                    required
                    className="hidden"
                  />
                </div>
              </div>
            </div>
            <br></br>
            <button
              className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block mt-2 bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Submit &rarr;
              <BottomGradient />
            </button>
          </form>
        </div>
        <div className="stars"></div>
        <div className="stars1"></div>
        <div className="stars2"></div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
