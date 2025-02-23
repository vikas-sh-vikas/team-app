import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Team from "@/models/teamModel";

connect();
export async function GET(request: NextRequest) {
  try {
    const team = await Team.find();
    // console.log("Customers", team);
    return NextResponse.json({
      message: "Team Found",
      data: team,
    });
  } catch (error: any) {
    // console.log("reachGetData")
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
