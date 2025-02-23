type Player = {
  _id: string;
  name: string;
  point: string;
  team: string;
  role: "BAT" | "BOWL" | "WK" | "AL";
  isActive?: boolean;
};
