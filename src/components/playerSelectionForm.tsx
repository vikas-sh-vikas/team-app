const PlayerSelectionForm = ({
  onSubmit,
  validate,
  register,
  handleSubmit,
}: any) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Select Players</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Batsman", name: "noOfBatsman" },
            { label: "Bowler", name: "noOfBowler" },
            { label: "Allrounder", name: "noOfAllrounder" },
            { label: "Wicket Keeper", name: "noOfWicketKeeper" },
          ].map(({ label, name }) => (
            <div key={name}>
              <label className="block text-gray-700 font-medium">{label}</label>
              <input
                type="number"
                className="w-full border p-2 rounded-lg mt-1"
                {...register(name)}
              />
            </div>
          ))}
        </div>
        {validate && (
          <p className="text-red-600 mt-2">Select exactly 11 players!</p>
        )}
        <button
          type="submit"
          className="mt-4 w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default PlayerSelectionForm;
