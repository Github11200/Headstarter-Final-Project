import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const code = req.nextUrl.searchParams.get("code");

  try {
    const response = await fetch(
      "https://github.com/login/oauth/access_token?scope=notifications",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code: code,
        }),
      }
    );

    const data = await response.json();
    const { access_token } = data;

    const notifications = await fetch("https://api.github.com/notifications", {
      headers: {
        Authorization: `Bearer ${access_token}`,
        Accept: "application/vnd.github+json",
        "X-Github-Api-Version": "2022-11-28",
      },
    });

    return new Response(JSON.stringify(notifications));
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
