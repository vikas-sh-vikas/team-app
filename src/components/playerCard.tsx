const PlayerCard = ({ player }: { player: Player }) => {
    return (
      <div className="bg-gray-100 p-3 rounded-lg shadow-sm flex justify-between items-center">
        <div>
          <p>
            {player.name} ({player.role})
          </p>
          <p className="text-gray-500 text-sm">{player.team}</p>
        </div>
        <div>
          <span className="text-gray-500">{player.point}</span>
        </div>
      </div>
    );
  };
  export default PlayerCard