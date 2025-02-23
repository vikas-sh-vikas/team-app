import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Player from "@/models/playerModel";

connect();
export async function POST(request: NextRequest) {
  try {
    // Filter players where team is either "IND" or "BAN"
    const reqBody = await request.json();
    const { teams } = reqBody;
    const players = await Player.find({ team: { $in: teams } });
    return NextResponse.json({
      message: "Players Found",
      data: players,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
