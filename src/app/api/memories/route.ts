// app/api/memories/route.ts
import { NextResponse } from 'next/server'

// This would typically come from a database
const memories = [
  { id: 1, text: "Remember to buy groceries: milk, eggs, bread, and vegetables for the week.", date: "2023-06-01" },
  { id: 2, text: "Call mom on her birthday next Tuesday. Don't forget to ask about her garden!", date: "2023-06-02" },
  // ... (include all 15 memories from the previous example)
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')

  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const results = memories.slice(startIndex, endIndex)
  const totalPages = Math.ceil(memories.length / limit)

  return NextResponse.json({
    results,
    currentPage: page,
    totalPages,
  })
}