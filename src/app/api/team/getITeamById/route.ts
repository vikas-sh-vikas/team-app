import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Team from "@/models/teamModel";

connect();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    console.log("object", reqBody);
    const team = await Team.findOne({ _id: reqBody.id });

    if (!team) {
      return NextResponse.json({
        message: "Customer Not Found",
        data: team,
      });
    }
    return NextResponse.json({
      message: "Customer Found",
      data: team,
    });
  } catch (error: any) {
    // console.log("reachGetData")
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
