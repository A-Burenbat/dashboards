import AppLogo from "@/components/shared/app-logo";
import { lusitana } from "@/components/shared/fonts";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <div className="flex h-20 shrink-0 items-center rounded-lg p-4 md:h-40 bg-secondary">
        <AppLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg  px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} text-xl md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Next 15 Admin Dashboard.</strong>
            {/* <br />
            <Link href="https://www.youtube.com/watch?v=6ma9_5Mycns&t=4412s">
            https://github.com/basir/next-15-admin-dashboard/blob/main/lessons/06.%20display%20revenue%20chart.md - End yvna sss<br />
            https://www.youtube.com/watch?v=6ma9_5Mycns&t=4412s
            </Link> */}
          </p>
          <Button asChild className="w-1/2">
            <Link href="/login">
              <span>Нэвтрэх</span> 
              <ArrowRightIcon className="w-6" />
            </Link>
          </Button>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            alt="Screenshots of the dashboard project showing desktop version"
            className="hidden md:block"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            alt="Screenshot of the dashboard project showing mobile version"
            className="block md:hidden"
          />
        </div>
      </div>
    </main>
  );
}
