import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verify, webcrypto } from "crypto";

const subtle = webcrypto.subtle;
const encoder = new TextEncoder();

interface TelegramCredentials {
  id: string;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: string;
  hash: string;
}

const botToken = process.env.TELEGRAM_BOT_TOKEN;

if (!botToken) {
  throw new Error("TELEGRAM_BOT_TOKEN is not set in environment variables");
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      authorize: async (credentials) => {
        console.log("Received credentials:", credentials);
        const authMap = new Map(
          Object.entries(credentials as Record<string, string>)
        );
        const hashString = authMap.get("hash") || "";
        authMap.delete("hash");
        authMap.delete("csrfToken");
        authMap.delete("json");
        authMap.delete("callbackUrl");
        authMap.delete("redirect");

        const datacheckstring = getFinalDataStr(authMap);

        console.log(datacheckstring);

        const secretKey = await getSecretKey();
        const signature = new Uint8Array(
          hashString.match(/[\da-f]{2}/gi)?.map((h) => parseInt(h, 16)) || []
        );

        const isValid = await subtle.verify(
          "HMAC",
          secretKey,
          signature,
          encoder.encode(datacheckstring)
        );

        if (!isValid) {
          return null;
        }

        if (hasExpired(authMap)) {
          return null;
        }

        const data = Object.fromEntries(authMap.entries());

        const tobeReturned = {
          id: data.id,
          username: data.first_name,
        };

        console.log(tobeReturned);

        return {
          id: data.id,
          username: data.first_name,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
            jwt : async ({token,user}:any) =>{
                if(user){
                    token.id=user.id;
                    token.username=user.username;
                }
                return token
            },
            session : async ({session,token}:any)=>{
                if (token) {
                    session.user.id = token.id;
                    session.user.username=token.username;
                  }
                  return session
            }
        },
  pages: {
    signIn: "/signUp",
    error: "/auth/error",
  },
  debug: true, // Enable debug mode to log additional details
};

function getFinalDataStr(authDataMap: Map<string, string | number>) {
  const dataToCheck: Array<string> = [];

  authDataMap.forEach((value, key) => {
    dataToCheck.push(`${key}=${value}`);
  });

  dataToCheck.sort();

  return dataToCheck.join(`\n`);
}

async function getSecretKey() {
  const secret = await subtle.digest("SHA-256", encoder.encode(botToken));
  return await subtle.importKey(
    "raw",
    secret,
    { name: "HMAC", hash: "SHA-256" },
    true,
    ["sign", "verify"]
  );
}

function hasExpired(authData: Map<string, string | number>) {
  const authDate = Number(authData.get("auth_date"));
  const now = Math.floor(Date.now() / 1000);
  const dataAge = now - authDate;

  return dataAge > 86400;
}

// export const authOptions = {
//     providers: [
//         CredentialsProvider({
//             name:'Telegram',
//             credentials:{} ,

//             authorize: async (credentials) =>{
//                 // const {hash,...data}=credentials as TelegramCredentials;
//                 const authMap = new Map(Object.entries(credentials as Record<string,string> ));
//                 const checkStirng = Object.keys(data).sort().map(key => `${key}=${data[key as keyof typeof data]}`).join('\n');

//                 const secretKey =  crypto.createHash('sha256').update(botToken).digest();
//                 const hmac = crypto.createHmac('sha256',secretKey).update(checkStirng).digest(`hex`);

//                 if (hmac === hash) {
//                     return {
//                       id: data.id,
//                       name: `${data.first_name} ${data.last_name || ''}`.trim(),
//                       image: data.photo_url,
//                       username: data.username
//                     }
//                   }

//                 return null;
//             }
//         })
//     ],
//     callbacks:{
//         jwt : async ({token,user}:any) =>{
//             if(user){
//                 token.id =user.id;
//                 token.username=user.user.username;
//             }
//             return token
//         },
//         session : async ({session,token}:any)=>{
//             if (token) {
//                 session.user.id = token.id
//               }
//               return session
//         }
//     },
//     pages: {
//       signIn: '/signUp',
//       error: '/auth/error',
//     },
//     debug: process.env.NODE_ENV === 'development',
// }
