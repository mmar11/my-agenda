"use client";

import React, { MouseEvent } from "react";

const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  // add a function to save the email in the database
};

const JoinForm = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl border margin5px">
      <figure className="px-10 pt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>{" "}
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Join the waiting list!!</h2>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Email" />
        </label>{" "}
        <div className="card-actions">
          <button className="btn btn-primary" onClick={onSubmit}>
            JOIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinForm;
