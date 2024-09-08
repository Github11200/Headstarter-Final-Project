import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import gmailLogo from "@/assets/gmail.png";
import githubLogo from "@/assets/github.png";
import redditLogo from "@/assets/reddit.png";
import { RedditSignInButton } from "@/components/reddit";
import { GmailSignInButton } from "@/components/gmail";
import { GithubSignInButton } from "@/components/github";
import getGmailNotifications from "@/lib/gmail/gmail";
import getGitHubNotifications from "@/lib/github/github";
import getRedditNotifications from "@/lib/reddit/reddit";
import { cookies } from "next/headers";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

async function fetchNotifications() {
  const cookieStore = cookies();
  const gmailToken = cookieStore.get("gmail_access_token")?.value;
  const githubToken = cookieStore.get("github_access_token")?.value;
  const redditToken = cookieStore.get("reddit_access_token")?.value;

  const gmailNotifications = gmailToken ? await getGmailNotifications() : null;
  const githubNotifications = githubToken
    ? await getGitHubNotifications()
    : null;
  const redditNotifications = redditToken
    ? await getRedditNotifications()
    : null;

  return { gmailNotifications, githubNotifications, redditNotifications };
}

export default async function Dashboard() {
  const { gmailNotifications, githubNotifications, redditNotifications } =
    await fetchNotifications();

  return (
    <div className="p-5 min-h-screen">
      <div className="flex justify-center">
        <div className="flex-1"></div>
        <h1 className="text-4xl font-extrabold mb-10 text-center">Dashboard</h1>
        <div className="flex-1 flex justify-end">
          <Button className="max-w-min">
            <LogoutLink>Log out</LogoutLink>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Gmail Notifications */}
        <Card>
          <CardHeader>
            <Image src={gmailLogo} alt="gmail logo" />
          </CardHeader>
          <CardContent>
            {!gmailNotifications ? (
              <GmailSignInButton />
            ) : (
              <>
                {gmailNotifications.map((notification, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-solid border-2 p-3 rounded-lg mb-2"
                  >
                    <div>
                      <p>{notification.subject}</p>
                      <p className="text-sm text-gray-400">
                        {notification.snippet}
                      </p>
                    </div>
                    <Button>Undo</Button>
                  </div>
                ))}
              </>
            )}
          </CardContent>
        </Card>

        {/* Reddit Notifications */}
        <Card>
          <CardHeader>
            <Image src={redditLogo} alt="reddit logo" />
          </CardHeader>
          <CardContent>
            {!redditNotifications ? (
              <RedditSignInButton />
            ) : (
              <>
                {redditNotifications.map((notification, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-solid border-2 p-3 rounded-lg mb-2"
                  >
                    <div>
                      <p>{notification.body}</p>
                      <p className="text-sm text-gray-400">
                        {new Date(
                          notification.created_utc * 1000
                        ).toLocaleDateString()}
                      </p>
                    </div>
                    <Button>Undo</Button>
                  </div>
                ))}
              </>
            )}
          </CardContent>
        </Card>

        {/* GitHub Notifications */}
        <Card>
          <CardHeader>
            <Image src={githubLogo} alt="github logo" />
          </CardHeader>
          <CardContent>
            {!githubNotifications ? (
              <GithubSignInButton />
            ) : (
              <>
                {githubNotifications.map((notification, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-solid border-2 p-3 rounded-lg mb-2"
                  >
                    <div>
                      <p>{notification.subject?.title}</p>
                      <p className="text-sm text-gray-400">
                        {notification.updated_at}
                      </p>
                    </div>
                    <Button>Undo</Button>
                  </div>
                ))}
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
