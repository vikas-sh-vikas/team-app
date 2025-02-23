"use client";
import axios from "axios";
import React, { useState } from "react";

function Page() {
  const [team, setTeam] = useState({
    name: "",
    shortCode: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await axios.post("/api/team/saveEditTeam", team);
      console.log("Response", response);
      setSuccess("Player added successfully!");
      setTeam({ name: "", shortCode: "" }); // reset form
    } catch (err) {
      console.error(err);
      setError("Failed to add player. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  //   const handleList = async () => {
  //     setLoading(true);
  //     setError(null);
  //     setSuccess(null);
  //     const teams = { teams: ["IND"] };
  //     try {
  //       const response = await axios.post("/api/players/getFilterPlayers", teams);
  //       console.log("Response", response);
  //       setSuccess("Player added successfully!");
  //       setPlayer({ name: "", team: "", role: "", point: "" }); // reset form
  //     } catch (err) {
  //       console.error(err);
  //       setError("Failed to add player. Please try again.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add Team</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={team.name}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter player name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="shortCode">
            Short Code
          </label>
          <input
            type="text"
            id="shortCode"
            name="shortCode"
            value={team.shortCode}
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
