import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function GithubSignInButton() {
  return (
    <Link
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URL}&scope=notifications`}
      className="w-full"
    >
      <Button className="w-full">
        Connect GitHub account{" "}
        <Image
          src="/github.svg"
          width={25}
          height={25}
          alt="Gmail logo"
          className="ml-2"
        />
      </Button>
    </Link>
  );
}
