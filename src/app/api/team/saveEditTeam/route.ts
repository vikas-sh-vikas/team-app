import { connect } from "@/dbConfig/dbConfig";
import Team from "@/models/teamModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { _id, name, shortCode } = reqBody;
    //add customer
    if (reqBody._id) {
      console.log(reqBody._id);
      const team = await Team.findOneAndUpdate(
        {
          _id: reqBody._id,
        },
        {
          ...reqBody,
        }
      );

      // console.log("Customer",item)

      return NextResponse.json({
        message: "Team Updated",
        success: true,
      });
    } else {
      const team = await Team.create({
        name,
        shortCode,
      });
      return NextResponse.json({
        message: "Team saved",
        success: true,
      });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
