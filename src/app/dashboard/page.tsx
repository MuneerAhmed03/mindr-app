// app/dashboard/page.tsx
import { Suspense } from 'react'
import Link from "next/link"
import { Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import MemoriesTable from '@/components/MemoriesTable'
import PaginationControls from '@/components/PaginationControls'
import { Memory } from '@/lib/types'

async function getMemories(page: number = 1, limit: number = 10): Promise<{ memories: Memory[], currentPage: number, totalPages: number }> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/memories?page=${page}&limit=${limit}`, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch memories')
  }
  return res.json() 
}

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: { page: string }
}) {
  const page = Number(searchParams.page) || 1
  const { memories, currentPage, totalPages } = await getMemories(page);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Brain className="h-6 w-6" />
          <span className="ml-2 text-lg font-semibold">BrainBot</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Button variant="outline" size="sm">
            Logout
          </Button>
        </nav>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
            Your Memories
          </h1>
          <Card>
            <CardHeader>
              <CardTitle>Saved Memories</CardTitle>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div>Loading...</div>}>
                <MemoriesTable memories={memories} />
              </Suspense>
            </CardContent>
            <CardFooter>
              <PaginationControls currentPage={currentPage} totalPages={totalPages} />
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}