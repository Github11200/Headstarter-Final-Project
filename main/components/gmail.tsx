import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function GmailSignInButton() {
  return (
    <Link href="/api/gmail/gmail-notifications" className="w-full">
      <Button className="w-full">
        Connect Gmail account{" "}
        <Image
          src="/gmail.svg"
          width={25}
          height={25}
          alt="Gmail logo"
          className="ml-2"
        />
      </Button>
    </Link>
  );
}
