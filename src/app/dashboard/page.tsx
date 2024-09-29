import { Brain } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MemoriesTable from "@/components/MemoriesTable";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { TwitterIcon } from "@/components/ui/icons";

// import { authOptions } from "../api/auth/[...nextauth]/route";

export const runtime = 'edge';

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 border-b-2 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Brain className="h-6 w-6" />
          <span className="ml-2 text-lg font-semibold">MindR</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm py-2 font-medium hover:underline underline-offset-4"
            href="help"
          >
            Help
          </Link>
          <form
            action={async () => {
              "use server";
              await signOut();
              redirect("/");
            }}
          >
            <Button variant="outline" size="sm" type="submit">
              Logout
            </Button>
          </form>
        </nav>
      </header>
      <main className="flex-1 w-full flex flex-col items-center justify-center py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
            Your Memories
          </h1>
          <MemoriesTable />
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">MindR.</p>
        <nav className="sm:ml-auto flex items-center justify-center gap-4 sm:gap-6">
        <Link href={`https://github.com/MuneerAhmed03/mindr`} target="_blank" rel="noreferrer"
            className="flex items-center justify-center hover: p-1"
          >
            <GitHubLogoIcon className="w-4 h-4 hover:scale-110" />
          </Link> 
          <Link href={`https://x.com/mun_err`} target="_blank" rel="noreferrer"
            className="flex items-center justify-center hover: p-1"
          >
            <TwitterIcon className="w-4 h-4 hover:scale-110" />
          </Link> 
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/tos"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="/privacy"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
