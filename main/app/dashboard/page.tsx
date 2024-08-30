
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { FaGithub, FaReddit } from 'react-icons/fa';

import Image from 'next/image';
import  gmailLogo from '@/assets/gmail.png';
import  githubLogo from '@/assets/github.png';
import  redditLogo from '@/assets/reddit.png';


import { SiGmail } from 'react-icons/si';
import Link from "next/link";
import { cookies } from "next/headers";

async function getUserInfo(accessToken: string) {
  try {
    const response = await fetch("https://oauth.reddit.com/message/sent", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "User-Agent": "MyApp/1.0.0",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user info");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching user info:", error);
    return null;
  }
}

export default async function Dashboard() {
  const cookieStore = cookies();
  const token = cookieStore.get("reddit_access_token")?.value;

  const userInfo = await getUserInfo(token as string);
  console.log(userInfo);

  // Sample notifications
  const gmailNotifications = [
    { subject: "Event has been created", date: "Sunday, December 03, 2023 at 10:00 AM" },
    { subject: "Event has been created", date: "Sunday, December 03, 2023 at 10:00 AM" },
    { subject: "Event has been created", date: "Sunday, December 03, 2023 at 10:00 AM" },
  ];

  const redditNotifications = [
    { message: "Event has been created", date: "Sunday, December 03, 2023 at 10:00 AM" },
    { message: "Event has been created", date: "Sunday, December 03, 2023 at 10:00 AM" },
  ];

  const githubNotifications = [
    { message: "Event has been created", date: "Sunday, December 03, 2023 at 10:00 AM" },
    { message: "Event has been created", date: "Sunday, December 03, 2023 at 10:00 AM" },
    { message: "Event has been created", date: "Sunday, December 03, 2023 at 10:00 AM" },
    { message: "Event has been created", date: "Sunday, December 03, 2023 at 10:00 AM" },
  ];

  return (
    <div >
      <p>{userInfo}</p>
      <div >
        <h1 className="text-4xl font-extrabold mb-10 text-center">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Gmail Notifications */}
          <Card>
            <CardHeader>
            <Image   src={gmailLogo} alt="gmail logo"  />

              
          

              </CardHeader>
            <CardContent>
              {gmailNotifications.map((notification, index) => (
                <div key={index} className="flex justify-between items-center border-solid border-2  p-3 rounded-lg mb-2">
                  <div>
                    <p>{notification.subject}</p>
                    <p className="text-sm text-gray-400">{notification.date}</p>
                  </div>
                  <Button >Undo</Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Reddit Notifications */}
          <Card>
            <CardHeader>
            <Image   src={redditLogo} alt="reddit logo"  />
            </CardHeader>
            <CardContent>
              {redditNotifications.map((notification, index) => (
                <div key={index} className="flex justify-between items-center border-solid border-2  p-3 rounded-lg mb-2">
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
            
            <Image   src={githubLogo} alt="github logo"  />
          
            </CardHeader>
            <CardContent>
              {githubNotifications.map((notification, index) => (
                <div key={index} className="flex justify-between items-center border-solid border-2  p-3 rounded-lg mb-2">
                  <div>
                    <p>{notification.message}</p>
                    <p className="text-sm text-gray-400">{notification.date}</p>
                  </div>
                  <Button >Undo</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 flex justify-end">
          <Link href="/api/reddit">
            <Button>Reddit</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
