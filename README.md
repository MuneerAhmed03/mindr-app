# [MindR Web Application](https://mindr.live/)

![open-graph](https://github.com/user-attachments/assets/58aca34f-9cfd-48c0-a0d0-acfd6973f13d)

MindR Web App is a companion application to the MindR Telegram bot. It provides a user-friendly interface for managing your stored memories. With this web app, users can easily onboard, view their stored memories, and delete them as needed.

## Features

- User authentication (including Telegram login)
- Onboarding process for new users
- View and manage stored memories
- Delete unwanted memories
- Seamless integration with the MindR Telegram bot

## Tech Stack

- **Framework**: Next.js
- **Deployment**: Cloudflare Pages
- **Authentication**: Auth.js v5
- **Database**: Supabase PostgreSQL (shared with Telegram bot)

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your system
- A [Cloudflare](https://www.cloudflare.com/) account
- A [Supabase](https://supabase.com/) account (same as used for the Telegram bot)
- OAuth credentials (e.g., Google, GitHub) for Auth.js
- Your Telegram Bot Token

### Steps

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/mindr-webapp.git
   cd mindr-webapp
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:

   ```
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   TELEGRAM_BOT_TOKEN=your_telegram_bot_token

   ```

4. Set up Auth.js:

   - Configure Auth.js in `pages/api/auth/[...nextauth].js`
   - Set up the necessary OAuth providers

5. Configure Telegram Login:

   - Go to [@BotFather](https://t.me/BotFather) on Telegram
   - Send the command `/setdomain`
   - Select your bot
   - Enter your web app's domain (e.g., `yourapp.pages.dev` if using Cloudflare Pages)
   - BotFather will confirm that the domain has been set for your bot

6. Setup Telegram Login to your Auth.js for custom configuration (optional):
   Update your `pages/api/auth/[...nextauth].js` file.

7. Run the development server:

   ```
   npm run dev
   ```

8. Build the project:

   ```
   npm run build
   ```

9. Deploy to Cloudflare Pages:
   - Connect your GitHub repository to Cloudflare Pages
   - Set up the build configuration:
     - Build command: `npm run build`
     - Build output directory: `.next`
   - Add your environment variables in the Cloudflare Pages dashboard

## Usage

1. Visit the deployed web app URL
2. Sign in using your preferred method (including Telegram)
3. Complete the onboarding process if you're a new user
4. View your stored memories from the dashboard
5. Delete any unwanted memories

## Integration with Telegram Bot

The web app shares the same Supabase database as the Telegram bot. This allows for seamless integration between the two platforms. Memories stored via the Telegram bot will be visible in the web app, and vice versa. Users can log in with their Telegram account, ensuring a consistent experience across both platforms.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
