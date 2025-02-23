"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Page() {
  const [player, setPlayer] = useState({
    name: "",
    team: "",
    role: "",
    point: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [teams,setTeams] = useState([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get("/api/team/getTeam");
        setTeams(response.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTeams();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await axios.post("/api/players/saveEditPlayer", player);
      console.log("Response", response);
      setSuccess("Player added successfully!");
      setPlayer({ name: "", team: "", role: "", point: "" }); // reset form
    } catch (err) {
      console.error(err);
      setError("Failed to add player. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add Player</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={player.name}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter player name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="team">
            Team
          </label>
          <select
            id="team"
            name="team"
            value={player.team}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          >
            <option value="">Select Team</option>
            {teams.map((item:any)=>{
              return <option key={item.shortCode} value={item.shortCode}>{item.name}</option>

            })}          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="role">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={player.role}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          >
            <option value="">Select role</option>
            <option value="BAT">Batsman</option>
            <option value="BOWL">Bowler</option>
            <option value="WK">Wicket Keeper</option>
            <option value="AL">Allrounder</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="point">
            Point
          </label>
          <input
            type="number"
            id="point"
            name="point"
            value={player.point}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter point value"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600 transition-colors"
        >
          {loading ? "Adding..." : "Add Player"}
        </button>
        {/* <button
          type="button"
          disabled={loading}
          onClick={handleList}
          className="w-full bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600 transition-colors"
        >
          {"List Player"}
        </button> */}
      </form>
    </div>
  );
}

export default Page;
