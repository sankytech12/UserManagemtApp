import React, { useState } from "react";

export default function UserForm({ onSubmit}) {
  const [firstName, setFName] = useState("");
  const [lastName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ firstName, lastName, email, dob });
    setFName("");
    setLName("");
    setEmail("");
    setDob("");
  }

  return (
    <form
      className="bg-white p-6 rounded-md space-y-4 w-6/12 m-auto"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-1">
          <div>
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFName(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLName(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Save
        </button>
      </div>
    </form>
  );
}
