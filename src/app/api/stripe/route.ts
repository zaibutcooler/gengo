import { NextResponse } from "next/server";

export async function POST(req: Request, params: { lang: string }) {
  try {
    let outputs;
    // can start now
    return NextResponse.json({ outputs });
  } catch (error) {
    console.log("[TRANSLATE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
