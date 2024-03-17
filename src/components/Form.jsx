"use client";
import React from "react";
export function Form() {
  return (
    <div className="p-10 bg-gray-100">
      <div className="w-10/12 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-3xl text-center text-neutral-800 dark:text-neutral-200">
          Register for Dexterix 4.0
        </h2>
        <p className="text-gray-200 my-2">
          <b>
            Thank you for your interest in participating in the Dexterix 4.0
            Hackathon!
          </b>
          <br />
          Dexterix 4.0: A 36-hour innovation marathon where creativity meets
          technology. Join us at Galgotias University for an exhilarating
          journey of coding, collaboration, and competition. Unleash your
          potential, solve real-world challenges, and win exciting prizes!
        </p>
        {/* Event Details */}
        <div className="flex justify-between items-start mb-5">
          <p className="text-gray-200 my-2">
            <b>Event Details :</b>
            <br />
            Date:<b> 24th-26th September 2021 </b>
            <br />
            Team Size : <b>4</b>(min) <b>6</b>(max)
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
          <p className="text-gray-200 my-2">
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
        <form className="my-2" method="post" action="">
          {/* Team Details */}
          <div className="flex justify-between flex-wrap mx-auto w-full">
            <div className="w-2/5">
              <label
                htmlFor="teamName"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Team Name <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                name="teamName"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="collageName"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Collage name <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                name="collageName"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                No. of Partcipants{" "}
                <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="number"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
          </div>
          {/* Team Leader Detials */}
          <h1 className="text-3xl w-full text-center font-semibold text-gray-100 mb-4">
            Team Leaders Details
          </h1>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mb-8 h-1 w-full" />
          <div className="flex justify-between flex-wrap mx-auto w-full">
            <div className="w-2/5">
              <label
                htmlFor="teamName"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Name <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                name="teamName"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="collageName"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Gender <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                name="collageName"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Mobile No. <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="number"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email Id <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="email"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Course <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Year <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Admission No. <br />* if from GALGOTIAS UNIVERSITY
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
          </div>
          {/* Member 2 Details */}
          <h1 className="text-3xl w-full text-center font-semibold text-gray-100 mb-4">
            Member 2 Details
          </h1>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mb-8 h-1 w-full" />
          <div className="flex justify-between flex-wrap mx-auto w-full">
            <div className="w-2/5">
              <label
                htmlFor="teamName"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Name <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                name="teamName"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="collageName"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Gender <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                name="collageName"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Collage Name <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Mobile No. <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="number"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email Id <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="email"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Course <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Year <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Admission No. <br />* if from GALGOTIAS UNIVERSITY
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
          </div>
          {/* Member 3 Details */}
          <h1 className="text-3xl w-full text-center font-semibold text-gray-100 mb-4">
            Member 3 Details
          </h1>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mb-8 h-1 w-full" />
          <div className="flex justify-between flex-wrap mx-auto w-full">
            <div className="w-2/5">
              <label
                htmlFor="teamName"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Name <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                name="teamName"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="collageName"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Gender <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                name="collageName"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Collage Name <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Mobile No. <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="number"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email Id <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="email"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Course <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Year <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Admission No. <br />* if from GALGOTIAS UNIVERSITY
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
          </div>
          {/* Member 4 Details */}
          <h1 className="text-3xl w-full text-center font-semibold text-gray-100 mb-4">
            Member 4 Details
          </h1>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mb-8 h-1 w-full" />
          <div className="flex justify-between flex-wrap mx-auto w-full">
            <div className="w-2/5">
              <label
                htmlFor="teamName"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Name <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                name="teamName"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="collageName"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Gender <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                name="collageName"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Collage Name <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Mobile No. <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="number"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email Id <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="email"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Course <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Year <span className="text-red-600 text-base">*</span>
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Admission No. <br />* if from GALGOTIAS UNIVERSITY
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
          </div>
          {/* Member 5 Details */}
          <h1 className="text-3xl w-full text-center font-semibold text-gray-100 mb-4">
            Member 5 Details
          </h1>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mb-8 h-1 w-full" />
          <div className="flex justify-between flex-wrap mx-auto w-full">
            <div className="w-2/5">
              <label
                htmlFor="teamName"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Name
              </label>
              <input
                type="text"
                name="teamName"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="collageName"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Gender
              </label>
              <input
                type="text"
                name="collageName"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Collage Name
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Mobile No.
              </label>
              <input
                type="number"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email Id
              </label>
              <input
                type="email"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Course
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Year
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Admission No. <br />* if from GALGOTIAS UNIVERSITY
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
          </div>
          {/* Member 6 Details */}
          <h1 className="text-3xl w-full text-center font-semibold text-gray-100 mb-4">
            Member 6 Details
          </h1>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mb-8 h-1 w-full" />
          <div className="flex justify-between flex-wrap mx-auto w-full">
            <div className="w-2/5">
              <label
                htmlFor="teamName"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Name
              </label>
              <input
                type="text"
                name="teamName"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="collageName"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Gender
              </label>
              <input
                type="text"
                name="collageName"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Collage Name
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Mobile No.
              </label>
              <input
                type="number"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Email Id
              </label>
              <input
                type="email"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Course
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Year
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
            <div className="w-2/5">
              <label
                htmlFor="participants"
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Admission No. <br />* if from GALGOTIAS UNIVERSITY
              </label>
              <input
                type="text"
                name="participants"
                className={`flex h-10 w-full border-none bg-zinc-800 text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
            file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600
            focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/input:shadow-none transition duration-400
             mt-1`}
              />
            </div>
          </div>
          <button
            className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block mt-2 bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Submit &rarr;
            <BottomGradient />
          </button>
        </form>
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

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
