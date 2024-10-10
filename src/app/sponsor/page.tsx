"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Coffee, Heart } from "lucide-react"
import { motion } from "framer-motion"

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 border-b-2 lg:px-6 h-14 flex items-center fixed w-full bg-background/80 backdrop-blur-sm z-50">
        <Link className="flex items-center justify-center" href="/">
          <Brain className="h-6 w-6" />
          <span className="ml-2 text-lg font-semibold">MindR</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
        </nav>
      </header>
      <main className="flex-1 pt-14">
        <section className="w-full flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div
            className="container px-4 md:px-6 relative z-10"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between space-y-8 md:space-y-0 md:space-x-12">
              <div className="md:w-1/2 space-y-4 text-center md:text-left">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Support MindR
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Love using MindR? We'd love your support!
Your contribution helps us keep MindR running smoothly and bring you even more awesome features. Every bit of support means the world to us and directly helps make MindR better for everyone.
Thanks for being part of our journey! 💜
                </p>
              </div>
              <div className="md:w-1/2 flex flex-col space-y-6 max-w-md">
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center">
                      <Coffee className="w-6 h-6 mr-2" />
                      Buy Me a Coffee
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <p className="text-center mb-4">Support the project with a one-time donation</p>
                    <Button className="bg-[#FFDD00] text-black hover:bg-[#FFDD00]/90">
                      <Link href="https://buymeacoffee.com/muneerahmedev" target="_blank" rel="noopener noreferrer">
                        Buy Me a Coffee
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center">
                      <Heart className="w-6 h-6 mr-2" />
                      GitHub Sponsors
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <p className="text-center mb-4">Become a sponsor and support ongoing development</p>
                    <Button className="bg-[#EA4AAA] hover:bg-[#EA4AAA]/90">
                      <Link href="https://github.com/sponsors/MuneerAhmed03" target="_blank" rel="noopener noreferrer">
                        Sponsor on GitHub
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"
          />
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 MindR. All rights reserved.</p>
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