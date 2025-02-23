"use client";
import DreamTeamView from "@/components/dreamTeamView";
import PlayerCard from "@/components/playerCard";
import PlayerSelectionForm from "@/components/playerSelectionForm";
import RolePlayerList from "@/components/roleList";
import TeamSelection from "@/components/teamSelection";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
export default function Home() {
  const [dreamTeam, setDreamTeam] = useState<Player[]>([]);
  const [validate, setValidate] = useState(false);
  const [captain, setCaptain] = useState<Player | null>(null);
  const [wiseCaptain, setWiseCaptain] = useState<Player | null>(null);
  const [isTeamSelect, setIsTeamSelect] = useState(false);
  const [teams, setTeams] = useState<any[]>([]);
  const [playerData, setPlayerData] = useState<Player[]>([]);
  const [selectedShortCodes, setSelectedShortCodes] = useState<string[]>([]);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      noOfBatsman: "",
      noOfBowler: "",
      noOfAllrounder: "",
      noOfWicketKeeper: "",
    },
  });

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

  const toggleSelection = (shortCode: string) => {
    setSelectedShortCodes((prev) => {
      if (prev.includes(shortCode)) {
        return prev.filter((code) => code !== shortCode);
      } else if (prev.length < 2) {
        return [...prev, shortCode];
      }
      return prev;
    });
  };

  const handleList = async () => {
    try {
      const response = await axios.post("/api/players/getFilterPlayers", {
        teams: selectedShortCodes,
      });
      setPlayerData(
        response.data.data.map((player: any) => ({
          ...player,
          isActive: true,
        }))
      );
      setIsTeamSelect(true);
    } catch (err) {
      console.error(err);
    }
  };

  const getRandomItemsFromArray = (array: Player[], count: number) => {
    if (count > array.length) return array;
    return array.sort(() => Math.random() - 0.5).slice(0, count);
  };

  const generateDreamTeam = (
    players: Player[],
    noOfBatsman: number,
    noOfAllrounder: number,
    noOfBowler: number,
    noOfWicketKeeper: number
  ) => {
    return [
      ...getRandomItemsFromArray(
        players.filter((p) => p.role === "BAT"),
        noOfBatsman
      ),
      ...getRandomItemsFromArray(
        players.filter((p) => p.role === "AL"),
        noOfAllrounder
      ),
      ...getRandomItemsFromArray(
        players.filter((p) => p.role === "BOWL"),
        noOfBowler
      ),
      ...getRandomItemsFromArray(
        players.filter((p) => p.role === "WK"),
        noOfWicketKeeper
      ),
    ];
  };
  console.log("Players----------->", playerData);
  const onSubmit = (data: any) => {
    const total =
      Number(data.noOfBatsman) +
      Number(data.noOfBowler) +
      Number(data.noOfWicketKeeper) +
      Number(data.noOfAllrounder);
    if (total !== 11) {
      setValidate(true);
      return;
    }
    setValidate(false);
    const activePlayers = playerData.filter((p) => p.isActive === true);

    const finalTeam = generateDreamTeam(
      activePlayers,
      Number(data.noOfBatsman),
      Number(data.noOfAllrounder),
      Number(data.noOfBowler),
      Number(data.noOfWicketKeeper)
    );
    setDreamTeam(finalTeam);

    // Randomly select Captain & Vice-Captain
    const captainIndex = Math.floor(Math.random() * finalTeam.length);
    setCaptain(finalTeam[captainIndex]);
    const remaining = finalTeam.filter((p, idx) => idx !== captainIndex);
    const wiseIndex = Math.floor(Math.random() * remaining.length);
    setWiseCaptain(remaining[wiseIndex]);
  };

  const resetTeam = () => {
    setDreamTeam([]);
    setCaptain(null);
    setWiseCaptain(null);
  };
  const handleToggleChange = (updatedPlayer: Player) => {
    setPlayerData((prevData) =>
      prevData.map((player) =>
        player._id === updatedPlayer._id ? updatedPlayer : player
      )
    );
  };
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {isTeamSelect ? (
        <div className="max-w-6xl mx-auto">
          {dreamTeam.length > 0 ? (
            <DreamTeamView
              dreamTeam={dreamTeam}
              captain={captain}
              wiseCaptain={wiseCaptain}
              onReset={resetTeam}
            />
          ) : (
            <>
              <PlayerSelectionForm
                onSubmit={onSubmit}
                validate={validate}
                register={register}
                handleSubmit={handleSubmit}
              />
              <div className="space-y-4">
                <RolePlayerList
                  label="Wicket Keepers"
                  players={playerData.filter((p) => p.role === "WK")}
                  onToggleChange={handleToggleChange}
                />
                <RolePlayerList
                  label="Batsmen"
                  players={playerData.filter((p) => p.role === "BAT")}
                  onToggleChange={handleToggleChange}
                />
                <RolePlayerList
                  label="Bowlers"
                  players={playerData.filter((p) => p.role === "BOWL")}
                  onToggleChange={handleToggleChange}
                />
                <RolePlayerList
                  label="Allrounders"
                  players={playerData.filter((p) => p.role === "AL")}
                  onToggleChange={handleToggleChange}
                />
              </div>
            </>
          )}
          <button
            onClick={() => setIsTeamSelect(false)}
            className="mt-6 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Reset Team
          </button>
        </div>
      ) : (
        <TeamSelection
          teams={teams}
          selectedShortCodes={selectedShortCodes}
          toggleSelection={toggleSelection}
          handleList={handleList}
        />
      )}
    </div>
  );
}
