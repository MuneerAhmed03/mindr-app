import CredentialsProvider from "next-auth/providers/credentials";
import { createClient } from "@supabase/supabase-js";
import NextAuth from "next-auth"
const encoder = new TextEncoder();

const botToken = process.env.TELEGRAM_BOT_TOKEN;

if (!botToken) {
  throw new Error("TELEGRAM_BOT_TOKEN is not set in environment variables");
}

export const { auth, handlers: { GET, POST }, signIn, signOut } 
  = NextAuth({
    trustHost: true,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      authorize: async (credentials) => {
        // console.log("Received credentials:", credentials);

        const supabase = createClient(process.env.SB_URL!, process.env.SB_KEY!);
        const authMap = new Map(
          Object.entries(credentials as Record<string, string>)
        );
        const hashString = authMap.get("hash") || "";
        authMap.delete("hash");
        authMap.delete("csrfToken");
        authMap.delete("json");
        authMap.delete("callbackUrl");
        authMap.delete("redirect");
        authMap.delete("callback");

        const datacheckstring = getFinalDataStr(authMap);

        // console.log("datacheck", datacheckstring);

        const secretKey = await getSecretKey();
        const signature = new Uint8Array(
          hashString.match(/[\da-f]{2}/gi)?.map((h) => parseInt(h, 16)) || []
        );

        const isValid = await crypto.subtle.verify(
          "HMAC",
          secretKey,
          signature,
          encoder.encode(datacheckstring)
        );

        if (!isValid || hasExpired(authMap)) {
          return null;
        }

        const dataObj = Object.fromEntries(authMap.entries());

        const userKeys = ["id","auth_date","created_at"];
        const userObj = Object.fromEntries(
          Array.from(authMap.entries()).filter(([key]) => userKeys.includes(key))
        );

        const { error } = await supabase
          .from("users")
          .upsert(
            userObj,
            { onConflict: "id",
              ignoreDuplicates: false
            },
          )

        if(error){
          console.log("db error", error);
        }
        await supabase.auth.signOut();
        // const tobeReturned = {
        //   id: dataObj.id,
        //   username: dataObj.first_name,
        // };

        // console.log(tobeReturned);

        return {
          id: dataObj.id,
          username: dataObj.first_name,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }: any) => {
      if (user) {
        token.id = user.id;
        token.username = user.username;
      }
      return token;
    },
    session: async ({ session, token }: any) => {
      if (token) {
        session.user.id = token.id;
        session.user.username = token.username;
      }
      console.log("session: ",session);
      return session;
    },
  },
  pages: {
    signIn: "/onboard",
    error: "/auth/error",
    signOut:"/"
  },
});
function getFinalDataStr(authDataMap: Map<string, string>) {
  const dataToCheck: string[] = [];

  authDataMap.forEach((value, key) => {
    dataToCheck.push(`${key}=${value}`);
  });

  dataToCheck.sort();

  return dataToCheck.join(`\n`);
}
async function getSecretKey() {
  const secret = await crypto.subtle.digest("SHA-256", encoder.encode(botToken));
  return await crypto.subtle.importKey(
    "raw",
    secret,
    { name: "HMAC", hash: "SHA-256" },
    true,
    ["sign", "verify"]
  );
}
function hasExpired(authData: Map<string, string>) {
  const authDate = Number(authData.get("auth_date"));
  const now = Math.floor(Date.now() / 1000);
  const dataAge = now - authDate;

  return dataAge > 86400;
}