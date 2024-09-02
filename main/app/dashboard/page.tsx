import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Social Media Logos
import Image from "next/image";
import gmailLogo from "@/assets/gmail.png";
import githubLogo from "@/assets/github.png";
import redditLogo from "@/assets/reddit.png";

import { RedditSignInButton } from "@/components/reddit";
import { GmailSignInButton } from "@/components/gmail";
import { GithubSignInButton } from "@/components/github";
import { cookies } from "next/headers";

function redditAccountExists() {
  return cookies().get("reddit_access_token") !== undefined;
}

function gmailAccountExists() {
  return cookies().get("gmail_access_token") !== undefined;
}

function githubAccountExists() {
  return cookies().get("github_access_token") !== undefined;
}

export default async function Dashboard() {
  // Sample notifications
  const gmailNotifications = [
    {
      subject: "Event has been created",
      date: "Sunday, December 03, 2023 at 10:00 AM",
    },
    {
      subject: "Event has been created",
      date: "Sunday, December 03, 2023 at 10:00 AM",
    },
    {
      subject: "Event has been created",
      date: "Sunday, December 03, 2023 at 10:00 AM",
    },
  ];

  const redditNotifications = [
    {
      message: "Event has been created",
      date: "Sunday, December 03, 2023 at 10:00 AM",
    },
    {
      message: "Event has been created",
      date: "Sunday, December 03, 2023 at 10:00 AM",
    },
  ];

  const githubNotifications = [
    {
      message: "Event has been created",
      date: "Sunday, December 03, 2023 at 10:00 AM",
    },
    {
      message: "Event has been created",
      date: "Sunday, December 03, 2023 at 10:00 AM",
    },
    {
      message: "Event has been created",
      date: "Sunday, December 03, 2023 at 10:00 AM",
    },
    {
      message: "Event has been created",
      date: "Sunday, December 03, 2023 at 10:00 AM",
    },
  ];

  return (
    <div className="p-5 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-10 text-center">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Gmail Notifications */}
        <Card>
          <CardHeader>
            <Image src={gmailLogo} alt="gmail logo" />
          </CardHeader>
          <CardContent>
            {!gmailAccountExists() ? (
              <GmailSignInButton />
            ) : (
              <>
                {gmailNotifications.map((notification, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-solid border-2  p-3 rounded-lg mb-2"
                  >
                    <div>
                      <p>{notification.subject}</p>
                      <p className="text-sm text-gray-400">
                        {notification.date}
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
            {!redditAccountExists() ? (
              <RedditSignInButton />
            ) : (
              <>
                {redditNotifications.map((notification, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-solid border-2 p-3 rounded-lg mb-2"
                  >
                    <div>
                      <p>{notification.message}</p>
                      <p className="text-sm text-gray-400">
                        {notification.date}
                      </p>
                    </div>
                    <Button>Undo</Button>
                  </div>
                ))}
              </>
            )}
          </CardContent>
        </Card>

        {/* Github Notifications */}
        <Card>
          <CardHeader>
            <Image src={githubLogo} alt="github logo" />
          </CardHeader>
          <CardContent>
            {!githubAccountExists() ? (
              <GithubSignInButton />
            ) : (
              <>
                {" "}
                {githubNotifications.map((notification, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-solid border-2 p-3 rounded-lg mb-2"
                  >
                    <div>
                      <p>{notification.message}</p>
                      <p className="text-sm text-gray-400">
                        {notification.date}
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
