import React, { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import {
  useRegisterUser,
} from "./hooks/user.hook";

function App() {


  
  const { mutateAsync: registerUserAsync } = useRegisterUser();


  const handleSaveUser = async (userData) => {
    console.log(userData);
    registerUserAsync(userData);
  };

  return (
    <div className="min-h-screen min-w-full bg-gray-100 p-8 flex flex-col lg:flex-row">
      <div className="w-full">
        <h1 className="text-3xl font-bold text-center mb-6">
          User Registration
        </h1>
        <UserForm onSubmit={handleSaveUser} />
      </div>
      <div className="w-full mt-4">
      <h1 className="text-3xl font-bold text-center mb-6">
          Registered User
        </h1>
        <UserList/>
      </div>
      
    </div>
  );
}

export default App;
