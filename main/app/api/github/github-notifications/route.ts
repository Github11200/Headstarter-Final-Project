import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  let token = null;
  let code = null;
  let redirectResponse = null;

  if (req.nextUrl.searchParams.has("token"))
    token = req.nextUrl.searchParams.get("token");
  else if (req.nextUrl.searchParams.has("code"))
    code = req.nextUrl.searchParams.get("code");
  else {
    const authRedirectedResponse = NextResponse.redirect(
      `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URL}&scope=notifications`
    );
    return authRedirectedResponse;
  }

  try {
    if (!token) {
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

      redirectResponse = NextResponse.redirect(
        "http://localhost:3000/dashboard"
      );

      redirectResponse.cookies.set(
        "github_access_token",
        access_token as string
      );
      token = access_token;
    }

    const notifications = await fetch("https://api.github.com/notifications", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-Github-Api-Version": "2022-11-28",
      },
    });

    if (redirectResponse) return redirectResponse;
    else return new Response(JSON.stringify(await notifications.json()));
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
