import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import GmailNotification from "./gmail-types";

export default async function getGmailNotifications(): Promise<
  GmailNotification[] | null
> {
  const cookieStore = cookies();
  const token = cookieStore.get("gmail_access_token")?.value;

  let url = "http://localhost:3000/api/gmail/gmail-notifications";

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
