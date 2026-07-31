import { NextResponse } from "next/server";
import { chain } from "@/app/utils/chain";
export async function POST(request) {
  try {
    let question = await request.json();
    if (!question) {
      return NextResponse.json(
        { error: "body is empty plz ask question" },
        { status: 400 },
      );
    }

    let response = await chain.invoke({ question });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log("internal error", error);
    return NextResponse.json({ error: "internal error" }, { status: 500 });
  }
}
