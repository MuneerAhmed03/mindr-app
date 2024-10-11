"use client";
import React from "react";

function Page() {
  return (
    <div className="flex flex-col items-center justify-center mt-8 px-4">
      <div className="max-w-3xl text-white">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy for MindR</h1>


        <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
        <p className="mb-6">
          This Privacy Policy provides detailed information on the handling,
          storage, and protection of your personal information by MindR - A
          Telegram Bot. This bot is designed to enhance your memory recall
          system leveraging AI. This policy outlines the types of data collected
          by MindR, how it is used, and the measures we take to protect your
          privacy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Information Collection
        </h2>
        <p className="mb-4">
          MindR collects the following types of information:
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Telegram</h3>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-4">
            <strong>Personal Information:</strong> When you interact with MindR,
            we may collect personal information including but not limited to
            your telegram username, session data, name, and profile picture.
            This information is collected to improve your user experience and to
            provide personalized services.
          </li>
          <li className="mb-4">
            <strong>Usage Data:</strong> MindR stores the text messages you send
            in to the MindR telegram bot chat, the features you use, and the
            time spent on the app. This data is used to improve the
            functionality of the app and to provide you with a better user
            experience.
          </li>
          <li className="mb-4">
            <strong>Saved content:</strong> When you send text messages to the
            MindR chat, MindR stores the text content you send. This information
            is used to provide you with quick access to your saved data. This
            information is also stored in a postgres database so that you can
            easily search for your saved content.
          </li>
          <li className="mb-4">
            <strong>Chat and Query Data:</strong> When you use the chat feature
            or submit queries through the dedicated command, we collect the data
            you provide. This information is used to provide a rich user
            experience with history of your past conversations.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Data Storage and Security
        </h2>
        <p className="mb-4">
          All collected data is securely stored in a PostgreSQL database hosted
          on{" "}
          <a
            href="https://supabase.com/"
            className="text-blue-400 hover:underline"
          >
            Supabase
          </a>
          .
        </p>
        <p className="mb-4">
          We employ industry-standard security measures to protect your
          information from unauthorized access, alteration, disclosure, or
          destruction. Despite our efforts, no method of transmission over the
          Internet or method of electronic storage is 100% secure. Therefore,
          while we strive to use commercially acceptable means to protect your
          personal information, we cannot guarantee its absolute security.
        </p>
        <p className="mb-6">
          When you chat with the app, your queries may be sent to OpenAI GPT-4
          API, Google Gemini API or other third-party services to provide you
          with relevant information. These services may store your queries and
          responses for training purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Information</h2>
        <p className="mb-4">
          MindR uses the collected information for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            To provide and improve the functionality of the telegram bot.
          </li>
          <li className="mb-2">To offer personalized user experiences.</li>
          <li className="mb-2">
            To communicate with users regarding updates, support, and
            promotional offers, if consented.
          </li>
          <li className="mb-2">
            To ensure the security of our services and to detect, prevent, or
            address technical issues.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Sharing of Information
        </h2>
        <p className="mb-6">
          MindR does not sell, trade, or rent users' personal identification
          information to others. We may share generic aggregated demographic
          information not linked to any personal identification information
          regarding visitors and users with our business partners, trusted
          affiliates, and advertisers for the purposes outlined above.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Your Privacy Rights
        </h2>
        <p className="mb-6">
          You have the right to access, update, or delete your personal
          information that we hold. If you wish to exercise these rights, please
          contact us at the details provided below.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-6">
          MindR reserves the right to update this privacy policy at any time.
          When we do, we will post a notification on our website and update the
          date at the top of this page. We encourage users to frequently check
          this page for any changes to stay informed about how we are protecting
          the personal information we collect. Your continued use of the service
          after the posting of changes to this policy will be deemed your
          acceptance of those changes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, the practices of
          this site, or your dealings with this site, please contact us at:
        </p>
        <p className="mb-6">Email: muneerahmedev@gmail.com</p>

        <p className="italic mt-8">
          This document was last updated on: 02 September 2024
        </p>
      </div>
    </div>
  );
}

export default Page;
