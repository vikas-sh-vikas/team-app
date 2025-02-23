import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Player from "@/models/playerModel";

connect();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    console.log("object", reqBody);
    const player = await Player.findOne({ _id: reqBody.id });

    if (!player) {
      return NextResponse.json({
        message: "Customer Not Found",
        data: player,
      });
    }
    return NextResponse.json({
      message: "Customer Found",
      data: player,
    });
  } catch (error: any) {
    // console.log("reachGetData")
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
