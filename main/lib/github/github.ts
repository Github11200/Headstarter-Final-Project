import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Notification from "./github-types";

export default async function getGitHubNotifications(): Promise<
  Notification[] | null
> {
  const cookieStore = cookies();
  const token = cookieStore.get("github_access_token")?.value;

  let url = "http://localhost:3000/api/github/github-notifications";

  if (token) url += `?token=${token}`;
  else redirect(url);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch user info");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user info:", error);
    return null;
  }
}
