import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function RedditSignInButton() {
  return (
    <Link href="/api/reddit/reddit-messages" className="w-full">
      <Button className="w-full">
        Connect Reddit account{" "}
        <Image
          src="/reddit.svg"
          width={25}
          height={25}
          alt="Reddit logo"
          className="ml-2"
        />
      </Button>
    </Link>
  );
}
