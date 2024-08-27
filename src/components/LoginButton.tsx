import React, { useEffect,useRef } from 'react'
import { signIn } from 'next-auth/react'

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

// interface TelegramLoginButtonProps {
//   botName: string;
//   onAuth?: (user: TelegramUser) => void;
//   buttonSize?: 'large' | 'medium' | 'small';
//   cornerRadius?: number;
//   requestAccess?: 'write' | 'read';
// }

declare global {
  interface Window {
    onTelegramAuth?: (user: TelegramUser) => void;
  }
}

const TelegramLoginButton: React.FC = () => {
    const containerRef=useRef<HTMLDivElement>(null);
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://telegram.org/js/telegram-widget.js?22'
    script.setAttribute('data-telegram-login', 'memior_bot')
    script.setAttribute('data-size', 'large')
    script.setAttribute('data-radius', '8');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)')
    script.setAttribute('data-request-access', 'write');
    script.async = true

    // document.body.appendChild(script)

    const onAuth = async (user: any) => {
            try {
              console.log('Telegram user data:', user);
              const object = await signIn('credentials', { ...user, redirect: false });
              console.log('SignIn result:', object);
              // Handle successful sign-in here 
            } catch (error) {
              console.error('Error during sign-in:', error);
            }
          };
    window.onTelegramAuth = onAuth
    if(containerRef.current){
        containerRef.current.appendChild(script);
    }

    return () => {
        if (containerRef.current) {
          const scriptElement = containerRef.current.querySelector('script');
          if (scriptElement) {
            containerRef.current.removeChild(scriptElement);
          }
        }
        delete window.onTelegramAuth;
      }
  }, [])

  return <div ref={containerRef} id="telegram-login" />
}

export default TelegramLoginButton