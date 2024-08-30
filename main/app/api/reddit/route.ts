import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const scope = "identity read";
  const authURL = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.REDDIT_API_CLIENT_ID}&response_type=code&state=pleaseWork&redirect_uri=http://localhost:3000/api/callback&duration=temporary&scope=${scope}`;

  return NextResponse.redirect(authURL);
}
