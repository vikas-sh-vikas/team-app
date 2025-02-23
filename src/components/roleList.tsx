import React from "react";

interface RolePlayerListProps {
  label: string;
  players: Player[];
  onToggleChange: (updatedPlayer: Player) => void;
}

const RolePlayerList: React.FC<RolePlayerListProps> = ({
  label,
  players,
  onToggleChange,
}) => {
  const toggleActive = (player: Player) => {
    onToggleChange({ ...player, isActive: !player.isActive });
  };
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">{label}</h2>
      {players.map((player, index) => (
        <div
          key={index} // use a unique key from your data
          className={`flex items-center justify-between mb-2 border-b pb-1`}
        >
          <div>
            <p>
              {player.name} ({player.role})
            </p>
            <p className="text-gray-500 text-sm">{player.team}</p>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 mr-4">{player.point}</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={player.isActive}
                onChange={() => toggleActive(player)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:bg-blue-600 transition-colors"></div>
              <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 transform peer-checked:translate-x-full"></span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RolePlayerList;
