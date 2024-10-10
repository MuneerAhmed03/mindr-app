"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, MessageCircle, Zap, Clock, Star, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 border-b-2 lg:px-6 h-14 flex items-center fixed w-full bg-background/80 backdrop-blur-sm z-50">
        <Link className="flex items-center justify-center" href="#">
          <Brain className="h-6 w-6" />
          <span className="ml-2 text-lg font-semibold">MindR</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
        </nav>
      </header>
      <main className="flex-1 pt-14">
        <section className="w-full flex flex-col items-center justify-center py-12 md:py-32 lg:py-48 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container px-4 md:px-6 relative z-10"
          >
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
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl  px-8 py-3">
                  <Link href="/onboard" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </Link>
                </Button>
                <Button variant="outline" className="hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 hover:text-primary-foreground shadow-md hover:shadow-lg px-8 py-3">
                <Link href= "#features" >
                Learn More
                </Link>
                </Button>
              </div>
            </div>
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 18,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 0,
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"
          />
          <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-end"
        >
          <ChevronDown className="w-6 h-6 mt-10 animate-bounce" />
        </motion.div>
        </section>
        <section id="features" className="w-full flex felx-col items-center justify-center py-24 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                { icon: MessageCircle, title: "Natural Conversations", content: "Chat with your second brain as naturally as you would with a friend. MindR understands context and nuance." },
                { icon: Zap, title: "Instant Recall", content: "Quickly retrieve any information you've stored, from important dates to complex ideas, in seconds." },
                { icon: Clock, title: "Time-Saving", content: "Save hours of searching through notes or emails. MindR organizes and retrieves information efficiently." },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <feature.icon className="w-5 h-5 mr-2" />
                        </motion.div>
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>{feature.content}</CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full flex felx-col items-center justify-center py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                { step: 1, title: "Connect", description: "Add MindR to your Telegram and start chatting." },
                { step: 2, title: "Store", description: "Send information you want to remember to MindR." },
                { step: 3, title: "Retrieve", description: "Ask MindR anything, anytime, and get instant answers." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="flex flex-col items-center text-center"
                >
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full flex felx-col items-center justify-center py-24 bg-gray-100 dark:bg-gray-800 ">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container px-4 md:px-6"
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Supercharge Your Memory?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Start using MindR today and experience the power of having a second brain at your fingertips.
                </p>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl  px-8 py-3">
                Get Started Now
              </Button>
            </div>
          </motion.div>
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