import React from "react";
import Link from "next/link";
import { Brain } from "lucide-react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" flex flex-col min-h-screen">
      <header className="px-4 border-b-2 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Brain className="h-6 w-6" />
          <span className="ml-2 text-lg font-semibold">MindR</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/sponsor"
          >
            Sponsor
          </Link>
          {/* <Link className="text-sm font-medium hover:underline underline-offset-4" href="#faq">
              FAQ
            </Link> */}
        </nav>
      </header>
      {children}
    </div>
  );
}

export default Layout;
