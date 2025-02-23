const TeamSelection = ({
  teams,
  selectedShortCodes,
  toggleSelection,
  handleList,
}: {
  teams: any[];
  selectedShortCodes: string[];
  toggleSelection: (shortCode: string) => void;
  handleList: () => void;
}) => {
  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {teams.map((team: any) => (
        <button
          key={team.shortCode}
          onClick={() => toggleSelection(team.shortCode)}
          className={`px-3 py-1 rounded-lg ${
            selectedShortCodes.includes(team.shortCode)
              ? "bg-green-500"
              : "bg-indigo-500"
          } text-white`}
        >
          {team.name}
        </button>
      ))}
      <button
        onClick={handleList}
        className="col-span-full bg-blue-600 text-white px-4 py-2 rounded-lg mt-4"
      >
        Get Players
      </button>
    </div>
  );
};

export default TeamSelection;
