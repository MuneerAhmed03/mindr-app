"use client";
import { useState, useEffect, useCallback } from "react";
import { Trash2, ChevronLeft, ChevronRight, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Memory } from "@/types/types";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function MemoriesTable() {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [error, setError] = useState<boolean>(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchMemories = async (page: number) => {
    setIsLoading(true);
    const from = (page - 1) * 10;
    const to = from + 9;

    try {
      const response = await axios.get(`/api/memories`, {
        params: { from, to },
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
      const response = await axios.delete(`/api/memories`, {
        data: { memory_id: id.toString() },
      });
      if (response.status === 204) {
        setMemories((prevMemories) =>
          prevMemories.filter((memory) => memory.id !== id)
        );
        toast.success("Memory deleted successfully");
      }
    } catch (error) {
      console.error("Failed to delete memory:", error);
      toast.error("Failed to delete memory. Please try again.");
    }
  }, []);

  const truncateText = useCallback((text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  }, []);

  const renderTableContent = () => {
    if (isLoading) {
      return (
        <TableBody>
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index} className="hover:bg-slate-900/50 transition-colors">
              <SkeletonTheme baseColor="#05172b" highlightColor="#062547">
                <TableCell>
                  <Skeleton width={400} />
                </TableCell>
                <TableCell>
                  <Skeleton width={50} />
                </TableCell>
              </SkeletonTheme>
            </TableRow>
          ))}
        </TableBody>
      );
    }

    if (memories.length === 0) {
      return (
        <TableBody>
          <TableRow>
            <TableCell colSpan={3} className="text-center h-32">
              <div className="flex flex-col items-center justify-center space-y-2">
                <Book className="h-8 w-8 opacity-50" />
                <p className="text-lg font-medium">No memories saved yet</p>
                <p className="text-sm opacity-70">Your memories will appear here once you save them</p>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      );
    }

    return (
      <TableBody>
        {memories.map((memory) => (
          <TableRow key={memory.id} className="hover:bg-slate-900/50 transition-colors">
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="p-2 h-auto text-[#ccffff] hover:bg-slate-800/50 w-full justify-start">
                    <span className="truncate">
                      {truncateText(memory.text, viewportWidth < 768 ? 15 : 50)}
                    </span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Book className="h-5 w-5" />
                      Memory #{memory.id}
                    </DialogTitle>
                    <DialogDescription className="mt-4 text-lg leading-relaxed">
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
                className="hover:bg-red-950/30 hover:text-red-400 transition-colors"
                aria-label="Delete memory"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  };

  return (
    <>
      <Toaster position="top-right" />
      <Card className="border-slate-800">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <Book className="h-6 w-6" />
            Saved Memories
          </CardTitle>
          {totalPage > 0 && (
            <Badge variant="secondary" className="w-fit">
              {memories.length} of {totalPage * 10} memories
            </Badge>
          )}
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Memory</TableHead>
                <TableHead className="w-[100px] font-semibold">Action</TableHead>
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
              className="hover:bg-slate-800"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            {totalPage > 0 && (
              <span className="text-sm opacity-70">
                Page {currentPage} of {totalPage}
              </span>
            )}
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage >= totalPage || isLoading}
              onClick={() => handlePageChange(currentPage + 1)}
              className="hover:bg-slate-800"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}