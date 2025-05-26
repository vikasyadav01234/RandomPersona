import { useState, useEffect } from "react";
import Axios from "axios";
import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  const [details, setDetails] = useState(null);
  const [theme, setTheme] = useState("light");

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get("https://randomuser.me/api/");
      console.log("RESPONSE:", data);
      setDetails(data.results[0]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className={`app-wrapper ${theme}-mode`}>
      <button className="profile-button" onClick={fetchDetails}>
        Get New Profile
      </button>

      <button className="theme-toggle-button" onClick={toggleTheme}>
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      {details ? (
        <ProfileCard details={details} />
      ) : (
        <h3 className="loading-text">Loading...</h3>
      )}
    </div>
  );
}

export default App;
