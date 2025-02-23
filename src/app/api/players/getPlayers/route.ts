import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Player from "@/models/playerModel";

connect();
export async function GET(request: NextRequest) {
  try {
    const player = await Player.find();
    // console.log("Customers", player);
    return NextResponse.json({
      message: "Customer Found",
      data: player,
    });
  } catch (error: any) {
    // console.log("reachGetData")
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
