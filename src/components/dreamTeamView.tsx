import PlayerCard from "./playerCard";

const DreamTeamView = ({
  dreamTeam,
  captain,
  wiseCaptain,
  onReset,
}: {
  dreamTeam: Player[];
  captain: Player | null;
  wiseCaptain: Player | null;
  onReset: () => void;
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Your Dream Team
      </h2>
      <p className="text-blue-600">Captain: {captain?.name}</p>
      <p className="text-green-600">Vice Captain: {wiseCaptain?.name}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {dreamTeam.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </div>
      <button
        onClick={onReset}
        className="mt-4 w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
      >
        Reset
      </button>
    </div>
  );
};
export default DreamTeamView;
