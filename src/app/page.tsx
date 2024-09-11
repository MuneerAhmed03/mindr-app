import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, MessageCircle, Zap, Clock, Star } from "lucide-react"

// export const runtime = "edge";

export default function Home() {
  return (
    <div className="flex flex-col  min-h-screen">
      <header className="px-4 border-b-2 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Brain className="h-6 w-6" />
          <span className="ml-2 text-lg font-semibold">MindR</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm hidden font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full flex felx-col items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Your Second Brain, Now on Telegram
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Boost your productivity and never forget important information with MindR, your AI-powered second brain on Telegram.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-primary text-primary-foreground">
                <Link href= {`/onboard`} target="_blank" rel="noopener noreferrer">
                Get Started
                </Link>
                </Button>
                <Button variant="outline">
                <Link href= "#features" >
                Learn More
                </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full flex felx-col items-center justify-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Natural Conversations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Chat with your second brain as naturally as you would with a friend. MindR understands context and nuance.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Instant Recall
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Quickly retrieve any information you've stored, from important dates to complex ideas, in seconds.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Time-Saving
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Save hours of searching through notes or emails. MindR organizes and retrieves information efficiently.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full flex felx-col items-center justify-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <ol className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <li className="flex flex-col items-center text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">1</div>
                <h3 className="mt-4 text-xl font-semibold">Connect</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Add MindR to your Telegram and start chatting.</p>
              </li>
              <li className="flex flex-col items-center text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">2</div>
                <h3 className="mt-4 text-xl font-semibold">Store</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Send information you want to remember to MindR.</p>
              </li>
              <li className="flex flex-col items-center text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">3</div>
                <h3 className="mt-4 text-xl font-semibold">Retrieve</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Ask MindR anything, anytime, and get instant answers.</p>
              </li>
            </ol>
          </div>
        </section>
        {/* <section id="testimonials" className="w-full flex felx-col items-center justify-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardContent className="mt-4">
                  <div className="flex items-center space-x-4">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500" />
                  </div>
                  <blockquote className="mt-4 text-gray-500 dark:text-gray-400">
                    "MindR has revolutionized the way I work. It's like having a personal assistant that never forgets anything!"
                  </blockquote>
                  <p className="mt-2 font-semibold">- Sarah K., Product Manager</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <div className="flex items-center space-x-4">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500" />
                  </div>
                  <blockquote className="mt-4 text-gray-500 dark:text-gray-400">
                    "As a student, MindR helps me organize my study notes and recall information instantly during exams. It's a game-changer!"
                  </blockquote>
                  <p className="mt-2 font-semibold">- Alex M., University Student</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}
        <section className="w-full flex felx-col items-center justify-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Supercharge Your Memory?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Start using MindR today and experience the power of having a second brain at your fingertips.
                </p>
              </div>
              <Button className="bg-primary text-primary-foreground">Get Started Now</Button>
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