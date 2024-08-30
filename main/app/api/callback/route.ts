import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  try {
    console.log("Code: ", code);
    console.log("Redirect URL: ", process.env.REDDIT_REDIRECT_URL);

    const response = await fetch(`https://www.reddit.com/api/v1/access_token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          `Basic ` +
          Buffer.from(
            `${process.env.REDDIT_API_CLIENT_ID}:${process.env.REDDIT_API_SECRET}`
          ).toString("base64"),
      },
      body: `grant_type=authorization_code&code=${code}&redirect_uri=${process.env.REDDIT_REDIRECT_URL}`,
    });

    const data = await response.json();
    const { access_token } = data;

    const redirectResponse = NextResponse.redirect(
      "http://localhost:3000/dashboard"
    );
    redirectResponse.cookies.set("reddit_access_token", access_token);

    return redirectResponse;
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
