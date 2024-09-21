import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Brain, MessageCircle, Zap, HelpCircle } from "lucide-react"
import Link from "next/link"
import TelegramLoginButton from '@/components/LoginButton'


export default function OnboardingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Brain className="h-6 w-6" />
          <span className="ml-2 text-lg font-semibold">MindR</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#faq">
            FAQ
          </Link>
        </nav>
      </header>
      <main className="flex-col items-center ">
        <section className="w-full flex felx-col items-center justify-center py-12">
          <div className="container px-4 md:px-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
              Welcome to MindR
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-center mb-12">
              Let's get you set up with your new AI-powered second brain on Telegram.
            </p>
            <div className="flex justify-center mb-12">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Login to MindR</CardTitle>
            <CardDescription className="text-center">
              Connect with Telegram to access your second brain
            </CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col items-center justify-center'>
              <TelegramLoginButton/>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                By logging in with Telegram, you'll be able to seamlessly interact with MindR and access all your stored information.
              </p>
          </CardContent>
        </Card>
            </div>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Step 1: Login with Telegram
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Click the "Log in with Telegram" button above</li>
                    <li>Authorize MindR in the Telegram window</li>
                    <li>You'll be automatically connected to MindR</li>
                  </ol>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Step 2: Start Storing Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Send any text, links, ideas to MindR</li>
                    <li>Use tags to categorize information</li>
                    <li>MindR will store them in your second Brain</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    Step 3: Retrieve Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Ask MindR questions about stored info using "/ask" command</li>
                    <li>MindR will provide relevant answers instantly</li>
                    <li>Use Dashboard to organize your memories</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="login" className="w-full flex felx-col items-center justify-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center">
              Get the Most Out of MindR
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardContent className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">Organize with Tags</h3>
                  <p>Use #tags when saving information to create categories for easy retrieval later.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">Interactive Dashboard</h3>
                  <p>Manage, review and update your stored information through dashboard to keep it current and relevant.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">Combine Information</h3>
                  <p>Ask MindR to connect different pieces of information for new insights.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">Store Prefrences</h3>
                  <p>Tell MindR about your personal prefrences to get personalised response.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        {/* <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is my information secure with MindR?</AccordionTrigger>
                <AccordionContent>
                  Yes, MindR uses end-to-end encryption to ensure your data is secure. We never share your information with third parties.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I use MindR on multiple devices?</AccordionTrigger>
                <AccordionContent>
                  MindR syncs across all your devices where you have Telegram installed, ensuring you always have access to your second brain.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is there a limit to how much information I can store?</AccordionTrigger>
                <AccordionContent>
                  MindR offers generous storage limits on all plans. For specific details, please check our pricing page or contact our support team.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How accurate is MindR's information retrieval?</AccordionTrigger>
                <AccordionContent>
                  MindR uses advanced AI algorithms to ensure high accuracy in information retrieval. It continually learns from your interactions to improve its performance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section> */}
        <section className="w-full flex felx-col items-center justify-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Boost Your Productivity?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Start using MindR today and experience the power of having a second brain at your fingertips.
                </p>
              </div>
              <Button className="bg-primary text-primary-foreground">
                <Link href= "#login" >
                  Start Using MindR
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>     
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">MindR.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/tos">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/privacy">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}