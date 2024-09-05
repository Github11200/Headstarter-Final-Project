import { redirect } from "next/navigation";
import RedditMessageData from "./reddit-types";
import { cookies } from "next/headers";

export default async function getRedditNotifications(): Promise<
  RedditMessageData[] | null
> {
  const cookieStore = cookies();
  const token = cookieStore.get("reddit_access_token")?.value;

  if (!token) {
    redirect("/api/reddit/reddit-messages")
  }

  try {
    const response = await fetch(
      "https://oauth.reddit.com/message/inbox?mark=false`",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "User-Agent": "MyApp/1.0.0",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch user info");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user info:", error);
    return null;
  }
}