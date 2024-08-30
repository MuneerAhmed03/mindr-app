// app/dashboard/MemoriesTable.tsx
'use client'

import { useState } from 'react'
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Memory } from '@/lib/types'


export default function MemoriesTable({ memories }: { memories: Memory[] }) {
  const [localMemories, setLocalMemories] = useState<Memory[]>(memories ||[])

  const deleteMemory = (id: number) => {
    setLocalMemories(localMemories.filter(memory => memory.id !== id))
    // In a real application, you would also make an API call to delete the memory on the server
  }

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Memory</TableHead>
          <TableHead className="w-[100px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {localMemories.map((memory) => (
          <TableRow key={memory.id}>
            <TableCell>{memory.date}</TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="link" className="p-0 h-auto">
                    {truncateText(memory.text, 50)}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Memory Details</DialogTitle>
                    <DialogDescription>
                      {memory.text}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </TableCell>
            <TableCell>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteMemory(memory.id)}
                aria-label="Delete memory"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}