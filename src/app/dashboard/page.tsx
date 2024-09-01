"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import MemoriesTable from "@/components/MemoriesTable";
import { Memory } from "@/lib/types";
import { AuthWrapper } from "@/app/authwrapper";
import { useSession,signOut } from "next-auth/react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DashboardPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = Number(searchParams.page) || 1;
  const { data: session, status } = useSession();
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
      console.log(error);
      setMemories([]);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (session?.user?.id) {
      fetchMemories(currentPage);
    }
  }, [session, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <AuthWrapper requireAuth redirectTo="/">
      <div className="flex  flex-col min-h-screen">
        <header className="px-4 border-b-2 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <Brain className="h-6 w-6" />
            <span className="ml-2 text-lg font-semibold">MindR</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm py-2 font-medium hover:underline underline-offset-4"
              href="help"
            >
              Help
            </Link>
            <Button variant="outline" size="sm" onClick={()=>signOut()}>
              Logout
            </Button>
          </nav>
        </header>
        <main className="flex-1 w-full flex felx-col items-center justify-center py-12">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
              Your Memories
            </h1>
            <Card>
              <CardHeader>
                <CardTitle>Saved Memories</CardTitle>
              </CardHeader>
              <CardContent>
                <MemoriesTable memories={memories} isLoading={isLoading} />
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
          </div>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">MindR.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="/tos"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="/privacy"
            >
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </AuthWrapper>
  );
}
