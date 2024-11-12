import React, { useState } from "react";
import { useDeleteUser, useUpdateUser } from "../hooks/user.hook";

export default function UserCard({ user }) {
  // const { firstName, lastName, email, dob } = user;
  const { mutateAsync: updateUserAsync } = useUpdateUser();
  const {mutateAsync: deleteUserAsync}=useDeleteUser();

  const [editable, setEditable] = useState(false);
  const dobToString = new Date(user.dob).toDateString();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [dob, setDob] = useState(user.dob);

  const handleEdit = (e) => {
    e.preventDefault();  
    console.log(editable);
    
    if(editable){
      // console.log(user._id);
      const data={id:user._id,firstName,lastName,email,dob};
      console.log(data);
      
      updateUserAsync(data);
    }
    setEditable(!editable);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteUserAsync(user._id);
  }

  return (
    <div className="bg-white p-4 rounded shadow-md space-y-2 hover:shadow-xl hover:scale-105 transition-all ease-out delay-75">
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          <input
            type="text"
            disabled={!editable}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={`w-full bg-transparent p-2 border border-gray-300 rounded`}
          />
          <input
            type="text"
            disabled={!editable}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={`w-full bg-transparent p-2 border border-gray-300 rounded`}
          />
        </div>
        <input
          type="email"
          disabled={!editable}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full bg-transparent p-2 border border-gray-300 rounded`}
        />
        <input
          type={`${
            editable ? "date" : "text"
          }`}
          disabled={!editable}
          value={editable ? dobToString : dobToString}
          onChange={(e) => setDob(e.target.value)}
          className={`w-full bg-transparent p-2 border border-gray-300 rounded`}
        />
        <div className="flex gap-2">
          <button className={`py-2 px-4 border-2 rounded-xl ${editable?"border-lime-500":"border-blue-500"}`} onClick={handleEdit}>{editable ? "Save" : "Edit"}</button>
          <button className="p-2 px-3 border-red-400 border-2 rounded-xl" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}
