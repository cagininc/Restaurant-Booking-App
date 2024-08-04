"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

//hhtps://randomuser.me/api/?results=5

function UserList() {
  const [users, setUsers] = useState([]);
  const fetchUsers = () => async () => {
    const response = await axios.get("https://randomuser.me/api/?results=5");
    setUsers(response.data.results);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return <div></div>;
}

export default UserList;
