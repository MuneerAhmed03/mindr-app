"use server";

import { cookies } from 'next/headers';
import {auth} from "@/auth"


export async function signOut() {
  const session = await auth();

  if (!session) {
    throw new Error("Not authenticated");
  }

  cookies().delete('session');

  return { success: true };
}