import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
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
  type Notifications = {
    linkedin: { message: string }[];
    gmail: { subject: string }[];
    twitter: { text: string }[];
  };

  const cookieStore = cookies();
  const token = cookieStore.get("reddit_access_token")?.value;

  const userInfo = await getUserInfo(token as string);
  console.log(userInfo);

  // const [notifications, setNotifications] = useState<Notifications>({
  //   linkedin: [],
  //   gmail: [{ subject: "Gmail Notification 1" }],
  //   twitter: [],
  // });

  // const [loading, setLoading] = useState(true);
  // const cookies = useCookies();

  // useEffect(() => {
  //   // console.log(cookies.get("reddit_access_token"));

  //   // Simulate an API call
  //   const fetchNotifications = async () => {
  //     setLoading(true);
  //     // Simulated delay for API response
  //     setTimeout(() => {
  //       // Replace with actual API data
  //       setNotifications({
  //         linkedin: [{ message: "LinkedIn Notification 1" }],
  //         gmail: [{ subject: "Gmail Notification 1" }],
  //         twitter: [{ text: "Twitter Notification 1" }],
  //       });
  //       setLoading(false);
  //     }, 2000);
  //   };

  //   fetchNotifications();
  // }, []);

  return (
    <div className="min-h-screen p-8">
      <p>{userInfo}</p>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-10">
          Notifications Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LinkedIn Notifications */}
          <Card>
            <CardHeader>
              <CardTitle>LinkedIn</CardTitle>
            </CardHeader>
            <CardContent>
              {/* {loading ? (
                <Skeleton className="w-full h-10" />
              ) : notifications.linkedin.length > 0 ? (
                notifications.linkedin.map((notification, index) => (
                  <div key={index}>{notification.message}</div>
                ))
              ) : (
                <p>No notifications available.</p>
              )} */}
            </CardContent>
          </Card>

          {/* Gmail Notifications */}
          <Card>
            <CardHeader>
              <CardTitle>Gmail</CardTitle>
            </CardHeader>
            <CardContent>
              {/* {loading ? (
                <Skeleton className="w-full h-10" />
              ) : notifications.gmail.length > 0 ? (
                notifications.gmail.map((notification, index) => (
                  <div key={index}>{notification.subject}</div>
                ))
              ) : (
                <p>No notifications available.</p>
              )} */}
            </CardContent>
          </Card>

          {/* Twitter Notifications */}
          <Card>
            <CardHeader>
              <CardTitle>Twitter</CardTitle>
            </CardHeader>
            <CardContent>
              {/* {loading ? (
                <Skeleton className="w-full h-10" />
              ) : notifications.twitter.length > 0 ? (
                notifications.twitter.map((notification, index) => (
                  <div key={index}>{notification.text}</div>
                ))
              ) : (
                <p>No notifications available.</p>
              )} */}
            </CardContent>
          </Card>
        </div>

        {/* <div className="mt-10 flex justify-end">
          <Button onClick={() => window.location.reload()}>
            Refresh Notifications
          </Button>
        </div> */}
      </div>
      <Link href="/api/reddit">
        <Button>Reddit</Button>
      </Link>
    </div>
  );
}
