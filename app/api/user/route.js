import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    let messages = await request.json();
    if (!messages) {
      return NextResponse.json(
        { error: "body is empty plz ask question" },
        { status: 400 },
      );
    }

    return NextResponse.json("f;dlskaj", { status: 200 });
  } catch (error) {
    console.log("internal error", error);
    return NextResponse.json({ error: "internal error" }, { status: 500 });
  }
}
