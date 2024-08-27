import NextAuth from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"
import crypto from "crypto"

interface TelegramCredentials {
    id: string;
    first_name: string;
    last_name?: string;
    username?: string;
    photo_url?: string;
    auth_date: string;
    hash: string;
  }

  // const botToken = process.env.TELEGRAM_BOT_TOKEN
  const botToken = "7134357419:AAHgK6ZiconFIeZEl7WiP1L57YbOLqY4HSc";

  if (!botToken) {
    throw new Error('TELEGRAM_BOT_TOKEN is not set in environment variables')
  }
  

const authOptions = {
    providers: [
        CredentialsProvider({
            name:'Telegram',
            credentials:{} ,

            authorize: async (credentials) =>{
                const {hash,...data}=credentials as TelegramCredentials;
                const checkStirng = Object.keys(data).sort().map(key => `${key}=${data[key as keyof typeof data]}`).join('\n');

                const secretKey =  crypto.createHash('sha256').update(botToken).digest();
                const hmac = crypto.createHmac('sha256',secretKey).update(checkStirng).digest(`hex`);

                if (hmac === hash) {
                    return {
                      id: data.id,
                      name: `${data.first_name} ${data.last_name || ''}`.trim(),
                      image: data.photo_url,
                      username: data.username
                    }
                  }

                return null;
            }
        })
    ],
    callbacks:{
        jwt : async ({token,user}:any) =>{
            if(user){
                token.id =user.id;
                token.username=user.user.username;
            }
            return token
        },
        session : async ({session,token}:any)=>{
            if (token) {
                session.user.id = token.id
              }
              return session
        }
    }
}

export default NextAuth(authOptions)