'use client'
import { useState, useEffect, useCallback } from 'react'
import { Trash2, ChevronLeft, ChevronRight } from "lucide-react"
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
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Memory } from '@/types/types'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"

export default function MemoriesTable() {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [error, setError] = useState<boolean>(false);

  const fetchMemories = async (page: number) => {
    setIsLoading(true);
    const from = (page - 1) * 10;
    const to = from + 9;

    try {
      const response = await axios.get(`/api/memories`, {
        params: {
          from: from,
          to: to,
        },
      });

      const { data, count } = response.data;

      const memoryMap: Memory[] =
        data?.map((item: { memory_id: number; content: string }) => ({
          id: item.memory_id,
          text: item.content,
        })) || [];
      setMemories(memoryMap);
      setTotalPage(Math.ceil((count || 0) / 10));
    } catch (error) {
      console.error("Error fetching memories:", error);
      if (axios.isAxiosError(error)) {
        console.error("Axios error response:", error.response);
      }
      setMemories([]);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMemories(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const deleteMemory = useCallback(async (id: number) => {
    try {
      const response = await axios.delete(`/api/memories?id=${id}`);
      if (response.status === 200) {
        setMemories(prevMemories => prevMemories.filter(memory => memory.id !== id));
        toast.success("Memory deleted successfully");
      }
    } catch (error) {
      console.error('Failed to delete memory:', error)
      toast.error("Failed to delete memory. Please try again.");
    }
  }, [])

  const truncateText = useCallback((text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text
  }, [])

  const renderTableContent = () => {
    if (isLoading) {
      return (
        <TableBody>
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <SkeletonTheme baseColor='#05172b' highlightColor='#062547'>
                <TableCell><Skeleton width={400} /></TableCell>
                <TableCell><Skeleton width={50} /></TableCell>
              </SkeletonTheme>
            </TableRow>
          ))}
        </TableBody>
      )
    }

    if (memories.length === 0) {
      return (
        <TableBody>
          <TableRow>
            <TableCell colSpan={3} className="text-center">You do not have any saved memories yet!!</TableCell>
          </TableRow>
        </TableBody>
      )
    }

    return (
      <TableBody>
        {memories.map((memory) => (
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
        ))}
      </TableBody>
    )
  }

  return (
    <>
      <Toaster position="top-right" />
      <Card>
        <CardHeader>
          <CardTitle>Saved Memories</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Memory</TableHead>
                <TableHead className="w-[100px]">Action</TableHead>
              </TableRow>
            </TableHeader>
            {renderTableContent()}
          </Table>
        </CardContent>
        <CardFooter>
          <div className="flex justify-between items-center w-full">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage <= 1 || isLoading}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <span>
              Page {currentPage} of {totalPage}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage >= totalPage || isLoading}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  )
}