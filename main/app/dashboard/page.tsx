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

async function getUserInfo(accessToken: string) {
  try {
    const response = await fetch("https://oauth.reddit.com/message/unread", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "User-Agent": "MyApp/1.0.0",
      },
    });

    if (!response.ok) {
      console.log(response);

      throw new Error("Failed to fetch user info");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching user info:", error);
    return null;
  }
}

async function getGmailNotifications(accessToken: string) {
  let url = "http://localhost:3000/api/gmail/gmail-notifications";

  if (accessToken) url += `?token=${accessToken}`;

  try {
    const response = await fetch(url);

    // if (!response.ok) {
    //   throw new Error("Failed to fetch user info");
    // }

    // return response.json();
  } catch (error) {
    console.error("Error fetching user info:", error);
    return null;
  }
}

async function getGitHubNotifications(accessToken: string) {
  const res = await fetch(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URL}&scope=notifications`
  );
  console.log(await res.json());
}

export default async function Dashboard() {
  const cookieStore = cookies();
  const token = cookieStore.get("gmail_access_token")?.value;

  // const userInfo = await getUserInfo(token as string);

  // userInfo?.data?.children?.map((child: any, i: number) => {
  //   // console.log("From:", child.data.author);
  //   // console.log("Subject:", child.data.subject);
  //   // console.log("Body:", child.data.body);
  //   console.log("New: ", child.data.new);
  //   console.log(
  //     "------------------------------------------------------------------------------------"
  //   );
  // });

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
