"use client";

import React, { useState, MouseEvent } from "react";
import { useRouter } from "next/navigation";

const JoinForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const router = useRouter(); // Access router object

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const user = { name, email }; // Renamed usr to user for clarity

    try {
      const res = await fetch("/api/newuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!res.ok) {
        throw new Error("Failed to create user");
      }

      router.push("/thankyou");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl border margin5px">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Join the waiting list!!</h2>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>{" "}
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="email"
            className="grow"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>{" "}
        <div className="card-actions">
          <button className="btn btn-primary" onClick={handleSubmit}>
            JOIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinForm;
