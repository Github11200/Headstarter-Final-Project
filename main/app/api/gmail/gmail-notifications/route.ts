import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library";
import { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";

// These are the scopes we need for reading emails
const SCOPES = ["https://www.googleapis.com/auth/gmail.readonly"];

const oauth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URL
);

export async function GET(req: NextRequest, res: NextResponse) {
  let token = null;
  let code = null;
  let redirectResponse = null;

  if (req.nextUrl.searchParams.has("token"))
    token = req.nextUrl.searchParams.get("token");

  if (
    !req.nextUrl.searchParams.has("code") &&
    req.nextUrl.searchParams.get("code") === null &&
    !req.nextUrl.searchParams.has("token")
  ) {
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: SCOPES,
    });

    const authRedirectResponse = NextResponse.redirect(authUrl);
    return authRedirectResponse;
  } else code = req.nextUrl.searchParams.get("code");

  try {
    if (token) {
      oauth2Client.setCredentials({ access_token: token });
    } else {
      const { tokens } = await oauth2Client.getToken(code as string);
      oauth2Client.setCredentials(tokens);

      redirectResponse = NextResponse.redirect(
        "http://localhost:3000/dashboard"
      );

      redirectResponse.cookies.set(
        "gmail_access_token",
        tokens.access_token as string
      );

      redirectResponse.cookies.set(
        "gmail_refresh_token",
        tokens.refresh_token as string
      );
    }

    const gmail = google.gmail({ version: "v1", auth: oauth2Client });

    const response = await gmail.users.messages.list({
      userId: "me",
      maxResults: 10,
    });

    const messages = response.data.messages || [];
    const emailDetails = await Promise.all(
      messages.map(async (message) => {
        const email = await gmail.users.messages.get({
          userId: "me",
          id: message.id!,
        });

        return {
          id: email.data.id,
          snippet: email.data.snippet,
          subject: email.data.payload?.headers?.find(
            (header) => header.name === "Subject"
          )?.value,
        };
      })
    );

    if (redirectResponse) return redirectResponse;
    return new Response(JSON.stringify(emailDetails));
  } catch (error) {
    console.error("Error accessing Gmail API:", error);
    return new Response(JSON.stringify(error));
  }
}
