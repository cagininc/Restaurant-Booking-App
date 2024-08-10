"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import SingleUser from "../components/SingleUser";

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try{
    const response = await axios.get("https://randomuser.me/api/?results=5");
    setUsers(response.data.results);
  }
  catch(error){
    console.log("Error fetching users");
  }
  };

  useEffect(() => {
    fetchUsers().catch(setError);
  }, []);

  return (
    <div className="user-list">
      <h1>Users List</h1>
      {
        <ol>
          {users.map((user) => (
            <li key={user.login.uuid}>
              <SingleUser user={user}  />
            </li>
          ))}
        </ol>
      }
    </div>
  );
}

export default UserList;
