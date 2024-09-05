import { cookies } from "next/headers";
import getGmailNotifications from "@/lib/gmail/gmail";
import getGitHubNotifications from "@/lib/github/github";
import getRedditNotifications from "@/lib/reddit/reddit";
import GmailNotification from "@/lib/gmail/gmail-types";
import Notification from "@/lib/github/github-types";
import RedditMessageData from "@/lib/reddit/reddit-types";

export async function getServerSideProps() {
  const cookieStore = cookies();
  const gmailToken = cookieStore.get("gmail_access_token")?.value;
  const githubToken = cookieStore.get("github_access_token")?.value;
  const redditToken = cookieStore.get("reddit_access_token")?.value;

  let gmailNotifications: GmailNotification[] | null = null;
  let githubNotifications: Notification[] | null = null;
  let redditNotifications: RedditMessageData[] | null = null;

  if (gmailToken) {
    gmailNotifications = await getGmailNotifications();
  }

  if (githubToken) {
    githubNotifications = await getGitHubNotifications();
  }

  if (redditToken) {
    redditNotifications = await getRedditNotifications();
  }

  return {
    props: {
      gmailNotifications,
      githubNotifications,
      redditNotifications,
    },
  };
}
