'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "@/components/Loader";
import { Loader } from "lucide-react";

type AuthWrapperProps = {
  children: React.ReactNode;
  requireAuth?: boolean;
  redirectTo?: string;
};

export function AuthWrapper({ 
  children, 
  requireAuth = false, 
  redirectTo = '/'
}: AuthWrapperProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; 
    
    if (requireAuth && !session) {
      router.push(redirectTo);
    } else if (!requireAuth && session) {
      router.push('/dashboard');
    }

  }, [session, status, requireAuth, redirectTo, router]);

  if (status === 'loading') {
    return  null ; 
  }

  if (requireAuth && !session) {
    return null; 
  }

  if (!requireAuth && session) {
    return null;
  }

  return <>{children}</>;
}
