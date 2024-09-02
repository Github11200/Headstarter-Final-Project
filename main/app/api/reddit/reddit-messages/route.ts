import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const scope = "read";
  const authURL = `https://www.reddit.com/api/v1/authorize?client_id=${
    process.env.REDDIT_API_CLIENT_ID
  }&response_type=code&state=${Math.random()
    .toString(32)
    .substring(
      0,
      10
    )}&redirect_uri=http://localhost:3000/api/reddit/reddit-callback&duration=permanent&scope=${scope}`;

  return NextResponse.redirect(authURL);
}
