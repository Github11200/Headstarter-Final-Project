import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const scope =
    "identity edit flair history modconfig modflair modlog modposts modwiki mysubreddits privatemessages read report save submit subscribe vote wikiedit wikiread";
  const authURL = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.REDDIT_API_CLIENT_ID}&response_type=code&state=pleaseWork&redirect_uri=http://localhost:3000/api/reddit/reddit-callback&duration=permanent&scope=${scope}`;

  return NextResponse.redirect(authURL);
}
