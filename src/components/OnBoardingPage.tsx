"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Brain, Send } from "lucide-react";
import TelegramLoginButton from "@/components/LoginButton";

export default function Component() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="/">
            <Brain className="h-6 w-6 text-primary" />
            <span className="ml-2 text-lg font-semibold">BrainBot</span>
          </Link>
        </header>
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="flex-1 flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Login to BrainBot
                </CardTitle>
                <CardDescription className="text-center">
                  Connect with Telegram to access your second brain
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TelegramLoginButton />
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                  By logging in with Telegram, you'll be able to seamlessly
                  interact with your BrainBot and access all your stored
                  information.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2023 BrainBot. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
