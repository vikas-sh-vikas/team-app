"use client";

import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

export default function FeildArray() {
  const [dreamTeam, setDreamTeam] = useState<any>([]);
  const [validate, setValidate] = useState(false);
  const [captain, setCaptain] = useState({ name: "", point: "" });
  const [wiseCaptain, setWiseCaptain] = useState({ name: "", point: "" });
  const defaultValues = {
    wicketKeeper: [
      {
        name: "M Rahim",
        point: "8",
        // team: [
        //   { name: "Team A", value: "1" },
        //   { name: "Team B", value: "2" },
        // ],
      },
      {
        name: "KL Rahul",
        point: "7.5",
        // team: [
        //   { name: "Team A", value: "1" },
        //   { name: "Team B", value: "2" },
        // ],
      },
      {
        name: "J ALi Anik",
        point: "6.5",
        // team: [
        //   { name: "Team A", value: "1" },
        //   { name: "Team B", value: "2" },
        // ],
      },
    ],
    batsman: [
      {
        name: "V Kohli",
        point: "9",
        // team: [
        //   { name: "Team A", value: "1" },
        //   { name: "Team B", value: "2" },
        // ],
      },
      {
        name: "R Sharma",
        point: "9",
        // team: [
        //   { name: "Team A", value: "1" },
        //   { name: "Team B", value: "2" },
        // ],
      },
      {
        name: "S Gill",
        point: "8.5",
        // team: [
        //   { name: "Team A", value: "1" },
        //   { name: "Team B", value: "2" },
        // ],
      },
      {
        name: "S Iyer",
        point: "8",
        // team: [
        //   { name: "Team A", value: "1" },
        //   { name: "Team B", value: "2" },
        // ],
      },
      {
        name: "N Hossain Shanto",
        point: "8",
        // team: [
        //   { name: "Team A", value: "1" },
        //   { name: "Team B", value: "2" },
        // ],
      },
      {
        name: "T Hridoy",
        point: "7.5",
        // team: [
        //   { name: "Team A", value: "1" },
        //   { name: "Team B", value: "2" },
        // ],
      },
      {
        name: "T Hasan",
        point: "7",
        // team: [
        //   { name: "Team A", value: "1" },
        //   { name: "Team B", value: "2" },
        // ],
      },
      {
        name: "S Sarkar",
        point: "7",
        // team: [
        //   { name: "Team A", value: "1" },
        //   { name: "Team B", value: "2" },
        // ],
      },
    ],
    bowler: [
      {
        name: "M Shami",
        point: "8.5",
        // team: [
        //   { name: "Team A", value: "1" },
        //   { name: "Team B", value: "2" },
        // ],
      },
      {
        name: "T Ahmed",
        point: "8.5",
        // team: [
        //   { name: "Team A", value: "1" },
        //   { name: "Team B", value: "2" },
        // ],
      },
      {
        name: "K Yadav",
        point: "8",
        // team: [
        //   { name: "Team A", value: "1" },
        //   { name: "Team B", value: "2" },
        // ],
      },
      {
        name: "M rahman",
        point: "8",
        // team: [
        //   { name: "Team A", value: "1" },
        //   { name: "Team B", value: "2" },
        // ],
      },
      {
        name: "T sakib",
        point: "7",
        // team: [
        //   { name: "Team A", value: "1" },
        //   { name: "Team B", value: "2" },
        // ],
      },
      {
        name: "H Rana",
        point: "6.5",
        // team: [
        //   { name: "Team A", value: "1" },
        //   { name: "Team B", value: "2" },
        // ],
      },
    ],
    allrounder: [
      {
        name: "H pandaya",
        point: "8.5",
        // team: [
        //   { name: "Team A", value: "1" },
        //   { name: "Team B", value: "2" },
        // ],
      },
      {
        name: "H Hosan Miraz",
        point: "8.5",
        // team: [
        //   { name: "Team A", value: "1" },
        //   { name: "Team B", value: "2" },
        // ],
      },
      {
        name: "A Patel",
        point: "8",
        // team: [
        //   { name: "Team A", value: "1" },
        //   { name: "Team B", value: "2" },
        // ],
      },
      {
        name: "R Jadeja",
        point: "8",
        // team: [
        //   { name: "Team A", value: "1" },
        //   { name: "Team B", value: "2" },
        // ],
      },
      {
        name: "R Hossain",
        point: "6.5",
        // team: [
        //   { name: "Team A", value: "1" },
        //   { name: "Team B", value: "2" },
        // ],
      },
    ],
    noOfBatsman: "",
    noOfBowler: "",
    noOfAllrounder: "",
    noOfWicketKeeper: "",
  };

  const { register, control, handleSubmit } = useForm({ defaultValues });

  // Field array for Batsman
  const {
    fields: batsmanFields,
    append: appendBatsman,
    remove: removeBatsman,
  } = useFieldArray({ control, name: "batsman" });

  // Field array for Bowler
  const {
    fields: bowlerFields,
    append: appendBowler,
    remove: removeBowler,
  } = useFieldArray({ control, name: "bowler" });

  // Field array for Allrounder
  const {
    fields: allrounderFields,
    append: appendAllrounder,
    remove: removeAllrounder,
  } = useFieldArray({ control, name: "allrounder" });
  const {
    fields: wicketKeeperFields,
    append: appendwicketKeeper,
    remove: removewicketKeeper,
  } = useFieldArray({ control, name: "wicketKeeper" });

  const onSubmit = async (data: any) => {
    console.log("Form Data:", data);
    const count =
      Number(data.noOfBatsman) +
      Number(data.noOfBowler) +
      Number(data.noOfWicketKeeper) +
      Number(data.noOfAllrounder);

    if (count !== 11) {
      setValidate(true);
    } else {
      const data1: any[] = getRandomItemsFromArray(
        data.batsman,
        data.noOfBatsman as number
      ).map((player: any) => ({ ...player, type: "batsman" }));

      const data2: any[] = getRandomItemsFromArray(
        data.bowler,
        data.noOfBowler as number
      ).map((player: any) => ({ ...player, type: "bowler" }));

      const data3: any[] = await getRandomItemsFromArray(
        data.allrounder,
        data.noOfAllrounder as number
      ).map((player: any) => ({ ...player, type: "allrounder" }));

      const data4: any[] = await getRandomItemsFromArray(
        data.wicketKeeper,
        data.noOfWicketKeeper as number
      ).map((player: any) => ({ ...player, type: "wicketKeeper" }));

      const mergedArray = [...data1, ...data2, ...data3, ...data4];

      // **Set the Dream Team before modifying mergedArray**
      setDreamTeam([...mergedArray]);

      // **Now select Captain and Vice-Captain**
      const randomIndex = Math.floor(Math.random() * mergedArray.length);
      setCaptain(mergedArray[randomIndex]);

      mergedArray.splice(randomIndex, 1); // Remove captain before selecting vice-captain

      const randomIndex2 = Math.floor(Math.random() * mergedArray.length);
      setWiseCaptain(mergedArray[randomIndex2]);
    }
  };

  function getRandomItemsFromArray(array: any, count: number) {
    // If count is greater than or equal to array length, return the full array.
    if (count >= array.length) return array;

    // Create a copy of the array to avoid modifying the original
    const arrayCopy = [...array];
    const result = [];

    // Loop to pick a random item 'count' times.
    for (let i = 0; i < count; i++) {
      // Get a random index from the copy
      const randomIndex = Math.floor(Math.random() * arrayCopy.length);
      // Add the random item to the result array
      result.push(arrayCopy[randomIndex]);
      // Remove the item from the copy so it isn't chosen again
      arrayCopy.splice(randomIndex, 1);
    }
    // console.log("Functional Result", result);
    return result;
  }
  return (
    <>
      <div className="p-4">
        {dreamTeam.length > 0 ? (
          <>
            <div className="w-full max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
              {/* Captain & Vice Captain Section */}
              <div className="mb-4">
                <p className="text-lg font-semibold text-gray-700">
                  Captain:{" "}
                  <span className="text-blue-600">{captain?.name}</span>
                </p>
                <p className="text-lg font-semibold text-gray-700">
                  Vice Captain:{" "}
                  <span className="text-green-600">{wiseCaptain?.name}</span>
                </p>
              </div>

              {/* Dream Team List */}
              <div className="space-y-2">
                {dreamTeam.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-lg shadow-sm"
                  >
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>
                    <span className="text-gray-600">{item.point}</span>
                    <span className="text-gray-600">{item.type}</span>
                  </div>
                ))}
              </div>

              {/* Reset Button */}
              <button
                onClick={() => setDreamTeam([])}
                className="w-full mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
              >
                Reset
              </button>
            </div>
          </>
        ) : (
          <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Sections Wrapper */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Wicket Keeper Section */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Wicket Keeper
                  </h2>
                  {wicketKeeperFields.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex flex-col space-y-2 mb-4 border-b pb-2"
                    >
                      <input
                        className="border border-gray-300 rounded-md p-2 w-full focus:ring focus:ring-blue-300"
                        placeholder="Name"
                        {...register(`wicketKeeper.${index}.name`)}
                        defaultValue={item.name}
                      />
                      <input
                        className="border border-gray-300 rounded-md p-2 w-full focus:ring focus:ring-blue-300"
                        placeholder="Point"
                        type="number"
                        {...register(`wicketKeeper.${index}.point`)}
                        defaultValue={item.point}
                      />
                      <button
                        type="button"
                        className="text-red-500 text-sm"
                        onClick={() => removewicketKeeper(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="w-full bg-blue-500 text-white py-2 rounded-md mt-2 hover:bg-blue-600 transition"
                    onClick={() => appendwicketKeeper({ name: "", point: "" })}
                  >
                    + Add Wicket Keeper
                  </button>
                </div>

                {/* Batsman Section */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Batsman
                  </h2>
                  {batsmanFields.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex flex-col space-y-2 mb-4 border-b pb-2"
                    >
                      <input
                        className="border border-gray-300 rounded-md p-2 w-full focus:ring focus:ring-blue-300"
                        placeholder="Name"
                        {...register(`batsman.${index}.name`)}
                        defaultValue={item.name}
                      />
                      <input
                        className="border border-gray-300 rounded-md p-2 w-full focus:ring focus:ring-blue-300"
                        placeholder="Point"
                        type="number"
                        {...register(`batsman.${index}.point`)}
                        defaultValue={item.point}
                      />
                      <button
                        type="button"
                        className="text-red-500 text-sm"
                        onClick={() => removeBatsman(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="w-full bg-blue-500 text-white py-2 rounded-md mt-2 hover:bg-blue-600 transition"
                    onClick={() => appendBatsman({ name: "", point: "" })}
                  >
                    + Add Batsman
                  </button>
                </div>

                {/* Bowler Section */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Bowler
                  </h2>
                  {bowlerFields.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex flex-col space-y-2 mb-4 border-b pb-2"
                    >
                      <input
                        className="border border-gray-300 rounded-md p-2 w-full focus:ring focus:ring-blue-300"
                        placeholder="Name"
                        {...register(`bowler.${index}.name`)}
                        defaultValue={item.name}
                      />
                      <input
                        className="border border-gray-300 rounded-md p-2 w-full focus:ring focus:ring-blue-300"
                        placeholder="Point"
                        type="number"
                        {...register(`bowler.${index}.point`)}
                        defaultValue={item.point}
                      />
                      <button
                        type="button"
                        className="text-red-500 text-sm"
                        onClick={() => removeBowler(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="w-full bg-blue-500 text-white py-2 rounded-md mt-2 hover:bg-blue-600 transition"
                    onClick={() => appendBowler({ name: "", point: "" })}
                  >
                    + Add Bowler
                  </button>
                </div>

                {/* Allrounder Section */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Allrounder
                  </h2>
                  {allrounderFields.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex flex-col space-y-2 mb-4 border-b pb-2"
                    >
                      <input
                        className="border border-gray-300 rounded-md p-2 w-full focus:ring focus:ring-blue-300"
                        placeholder="Name"
                        {...register(`allrounder.${index}.name`)}
                        defaultValue={item.name}
                      />
                      <input
                        className="border border-gray-300 rounded-md p-2 w-full focus:ring focus:ring-blue-300"
                        placeholder="Point"
                        type="number"
                        {...register(`allrounder.${index}.point`)}
                        defaultValue={item.point}
                      />
                      <button
                        type="button"
                        className="text-red-500 text-sm"
                        onClick={() => removeAllrounder(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="w-full bg-blue-500 text-white py-2 rounded-md mt-2 hover:bg-blue-600 transition"
                    onClick={() => appendAllrounder({ name: "", point: "" })}
                  >
                    + Add Allrounder
                  </button>
                </div>
              </div>

              {/* Number Inputs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Batsman", name: "noOfBatsman" as const },
                  { label: "Bowler", name: "noOfBowler" as const },
                  { label: "Allrounder", name: "noOfAllrounder" as const },
                  { label: "Wicket Keeper", name: "noOfWicketKeeper" as const },
                ].map(({ label, name }) => (
                  <div key={name}>
                    <p className="text-gray-700 font-medium">{`Number of ${label}`}</p>
                    <input
                      className="border border-gray-300 rounded-md p-2 w-full focus:ring focus:ring-blue-300"
                      placeholder={label}
                      {...register(name)}
                    />
                  </div>
                ))}
              </div>

              {/* Submit Button */}
              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-green-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-green-600 transition"
                >
                  Submit All Data
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      {validate ? (
        <h2 className="text-red-600">Select 11 Players and minimun</h2>
      ) : null}
    </>
  );
}
