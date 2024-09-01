"use client"
import React from "react";

function Page() {
	return (
		<div className="flex flex-col items-center justify-center mt-8 px-4 py-6">
			<div className="max-w-3xl text-white">
				<h1 className="text-3xl font-bold mb-6">Terms of Service for MindR</h1>
				
				<p className="text-sm mb-6"><strong>Effective Date:</strong> September 02, 2024</p>
				
				<p className="mb-6">Welcome to MindR! By using our app, you agree to the following terms and conditions. Please read them carefully.</p>
				
				<h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
				<p className="mb-6">By accessing or using the MindR Telegram Bot, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, you must not use the app.</p>
				
				<h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Service</h2>
				<p className="mb-4">MindR allows users to save text memories through a telegram bot, organize it, and interact with it using AI. The service includes features such as:</p>
				<ul className="list-disc pl-6 mb-6">
					<li className="mb-2"><strong>Data Collection:</strong> Collect data from text message and bring it into your second brain.</li>
					<li className="mb-2"><strong>Powerful Search:</strong> Quickly find any saved information.</li>
				</ul>
				
				<h2 className="text-2xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
				<ul className="list-disc pl-6 mb-6">
					<li className="mb-2"><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account and password.</li>
					<li className="mb-2"><strong>Content:</strong> You must ensure that any content you save or upload does not violate any laws or third-party rights.</li>
					<li className="mb-2"><strong>Usage:</strong> You agree not to misuse the app, including but not limited to, attempting to gain unauthorized access to the service or its related systems.</li>
				</ul>
				
				<h2 className="text-2xl font-semibold mt-8 mb-4">5. Privacy</h2>
				<p className="mb-6">Your use of the app is also governed by our Privacy Policy, which explains how we collect, use, and protect your information.</p>
				
				<h2 className="text-2xl font-semibold mt-8 mb-4">6. Termination</h2>
				<p className="mb-6">We reserve the right to suspend or terminate your access to the app at our discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users.</p>
				
				<h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
				<p className="mb-6">MindR is provided "as is" without any warranties of any kind. We do not guarantee that the service will be uninterrupted or error-free. To the fullest extent permitted by law, MindR will not be liable for any damages arising from the use of the app.</p>
				
				<h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
				<p className="mb-6">We may update these Terms of Service from time to time. We will notify you of any changes by posting the new terms on our app. Your continued use of the app after such changes constitutes your acceptance of the new terms.</p>
				
				<h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Information</h2>
				<p className="mb-6">If you have any questions about these Terms of Service, please contact us at muneerahmedev@gmail.com.</p>
				
				<p className="font-bold mt-8">By using MindR, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
			</div>
		</div>
	);
}

export default Page;
