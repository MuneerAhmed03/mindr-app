import { useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { Brain, Send } from "lucide-react"
import { signIn } from 'next-auth/react'
import TelegramLoginButton from './LoginButton'

// declare global {
//   interface Window {
//     TelegramLoginWidget: {
//       dataOnauth: (user: any) => void;
//     };
//   }
// }

export default function Component() {
  // const telegramButtonRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://telegram.org/js/telegram-widget.js?22';
  //   script.setAttribute('data-telegram-login', 'memior_bot'); 
  //   script.setAttribute('data-size', 'large');
  //   script.setAttribute('data-radius', '8');
  //   script.setAttribute('data-request-access', 'write');
  //   script.setAttribute('data-lang', 'en');
  //   script.setAttribute('data-onauth','dataOnauth(user)')
  //   script.async = true;

  //   const onAuth = async (user: any) => {
  //     try {
  //       console.log('Telegram user data:', user);
  //       const object = await signIn('credentials', { ...user, redirect: false });
  //       console.log('SignIn result:', object);
  //       // Handle successful sign-in here
  //     } catch (error) {
  //       console.error('Error during sign-in:', error);
  //     }
  //   };

  //   if (telegramButtonRef.current) {
  //     telegramButtonRef.current.appendChild(script);
  //   } 

  //   window.TelegramLoginWidget = {
  //     dataOnauth: onAuth
  //   };

  //   return () => {
  //     if (telegramButtonRef.current) {
  //       const scriptElement = telegramButtonRef.current.querySelector('script');
  //       if (scriptElement) {
  //         telegramButtonRef.current.removeChild(scriptElement);
  //       }
  //     }
  //   };
  // }, []);

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
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Login to BrainBot</CardTitle>
            <CardDescription className="text-center">
              Connect with Telegram to access your second brain
            </CardDescription>
          </CardHeader>
          <CardContent>
              {/* <div ref={telegramButtonRef}></div> */}
              <TelegramLoginButton/>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                By logging in with Telegram, you'll be able to seamlessly interact with your BrainBot and access all your stored information.
              </p>
          </CardContent>
        </Card>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 BrainBot. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
    </>
  )
}