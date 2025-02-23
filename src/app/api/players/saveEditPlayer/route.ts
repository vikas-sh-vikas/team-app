import { connect } from "@/dbConfig/dbConfig";
import Player from "@/models/playerModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { _id, name, point, team, role } = reqBody;
    //add customer
    if (reqBody._id) {
      console.log(reqBody._id);
      const player = await Player.findOneAndUpdate(
        {
          _id: reqBody._id,
        },
        {
          ...reqBody,
        }
      );

      // console.log("Customer",item)

      return NextResponse.json({
        message: "Player Updated",
        success: true,
      });
    } else {
      const player = await Player.create({
        name,
        point,
        team,
        role,
      });
      return NextResponse.json({
        message: "Player saved",
        success: true,
      });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
