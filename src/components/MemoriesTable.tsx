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
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import axios from "axios"

export default function MemoriesTable({ memories,isLoading }: { memories: Memory[],isLoading:boolean }) {
  const [localMemories, setLocalMemories] = useState<Memory[]>(memories ||[])

  const deleteMemory = async (id: number) => {
    try{
      const response = await axios.delete(`/api/memories?id=${id}`);
      if (response.status === 200) {
        setLocalMemories(localMemories.filter(memory => memory.id !== id));
      }
    }catch(error){
      console.error('Failed to delete memory:', error)
    }
  }

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
  }


  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Memory</TableHead>
          <TableHead className="w-[100px]">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        
        {isLoading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <SkeletonTheme baseColor='#05172b' highlightColor='#062547' >
              <TableCell><Skeleton width={400} /></TableCell>
              <TableCell><Skeleton width={50} /></TableCell>
              </SkeletonTheme>
            </TableRow>
          ))
        ) :
        
        
        (localMemories.length === 0 ?(
          <TableRow>
          <TableCell colSpan={3} className="text-center">You do not have any saved memories yet!!</TableCell>
        </TableRow>
        ):(localMemories.map((memory) => (
          <TableRow key={memory.id}>
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
        ))))}
      </TableBody>
    </Table>
  )
}