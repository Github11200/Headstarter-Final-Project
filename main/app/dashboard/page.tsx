import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { FaGithub, FaReddit } from "react-icons/fa";

// Social Media Logos
import Image from "next/image";
import gmailLogo from "@/assets/gmail.png";
import githubLogo from "@/assets/github.png";
import redditLogo from "@/assets/reddit.png";

import { SiGmail } from "react-icons/si";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import getRedditNotifications from "@/lib/reddit/reddit";
import getGmailNotifications from "@/lib/gmail/gmail";
import getGitHubNotifications from "@/lib/github/github";

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
    <div className="p-5">
      {/* <p>{userInfo}</p> */}
      <div>
        <h1 className="text-4xl font-extrabold mb-10 text-center">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Gmail Notifications */}
          <Card>
            <CardHeader>
              <Image src={gmailLogo} alt="gmail logo" />
            </CardHeader>
            <CardContent>
              {gmailNotifications.map((notification, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-solid border-2  p-3 rounded-lg mb-2"
                >
                  <div>
                    <p>{notification.subject}</p>
                    <p className="text-sm text-gray-400">{notification.date}</p>
                  </div>
                  <Button>Undo</Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Reddit Notifications */}
          <Card>
            <CardHeader>
              <Image src={redditLogo} alt="reddit logo" />
            </CardHeader>
            <CardContent>
              {redditNotifications.map((notification, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-solid border-2  p-3 rounded-lg mb-2"
                >
                  <div>
                    <p>{notification.message}</p>
                    <p className="text-sm text-gray-400">{notification.date}</p>
                  </div>
                  <Button>Undo</Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Github Notifications */}
          <Card>
            <CardHeader>
              <Image src={githubLogo} alt="github logo" />
            </CardHeader>
            <CardContent>
              {githubNotifications.map((notification, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-solid border-2  p-3 rounded-lg mb-2"
                >
                  <div>
                    <p>{notification.message}</p>
                    <p className="text-sm text-gray-400">{notification.date}</p>
                  </div>
                  <Button>Undo</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 flex justify-end">
          <Link href="/api/reddit/reddit-messages">
            <Button>Reddit</Button>
          </Link>
          <Link href="/api/gmail/gmail-notifications">
            <Button>Gmail</Button>
          </Link>
          <Link
            href={`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URL}&scope=notifications`}
          >
            <Button>GitHub</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
