import React, { useState } from "react";
import "./App.css";
import { UserCard } from "./CustumHooks/components/UserCard";
import axios from "axios";
import { User } from "./CustumHooks/types/api/user";
import { UserProfile } from "./CustumHooks/types/UserProfile";
import { useAllUsers } from "./CustumHooks/hooks/useAllUses";

function App3() {
  const {getUsers, userProfiles, loading, error}=useAllUsers()

  const onClickFetchUser = () => {getUsers()};

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>Fetch data</button>
      <br />

      {error ? (
        <p style={{color: "red"}} >Failed to fetch data</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}

export default App3;
