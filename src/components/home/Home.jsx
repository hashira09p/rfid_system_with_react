import { React, useState, useEffect } from "react";
import NavBar from "../navbar/Navbar";
import UserTable from "../userTable/UserTable";
import axios from "axios"

const host = "http://localhost:3000"

export default function Home() {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState('light');



  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${host}/`)
        setData(result.data)
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchData();
  }, [])

  useEffect(() => {
    console.log("Updated data:", data);
  }, [data]);

  return (
    <div>
      <NavBar
        theme={theme}
        setTheme={setTheme}
      />
      <UserTable />
    </div>
  )
}