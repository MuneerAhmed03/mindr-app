
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { auth } from "@/auth"

export const runtime = "edge";

export async function GET(request: Request) {
  // const session = await getServerSession(authOptions);
  const session = await auth();
  if(!session){
    return NextResponse.json({ error: "Access Denied" }, { status: 403 });
  }

  const supabase = createClient(process.env.SB_URL!, process.env.SB_KEY!);
  const { searchParams } = new URL(request.url);


  const user_id = parseInt(session?.user?.id)
  const from = parseInt(searchParams.get("from") || "0");
  const to = parseInt(searchParams.get("to") || "0");

  
  if (!user_id) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try{
  const { data, error,count } = await supabase
    .from("memory")
    .select("memory_id,content",{count : 'exact'})
    .range(from, to)
    .eq("user_id", user_id)
    .order('created_at', { ascending: false });
    if(error) throw error;
    return NextResponse.json({data,count});
}catch(error){
  console.log("Error fetching memories",error);
  return NextResponse.json(
    {error: "failed to fetch memories"},
    {status: 500}
  );
}
}

export async function DELETE(request: Request) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Access Denied" }, { status: 403 });
  }
  
  const supabase = createClient(process.env.SB_URL!, process.env.SB_KEY!);
  
  const data: { memory_id: string } = await request.json()
  
  try {
    const { memory_id } = data;
    const { error } = await supabase
      .from('memory')
      .delete()
      .eq('memory_id', memory_id);
    
    if (error) throw error;
    
    // If deletion is successful, return a 204 No Content response
    return new Response(null, { status: 204 });
  } catch (error) {
    console.log("Error deleting memories", error);
    return NextResponse.json(
      { error: "Failed to delete memory" },
      { status: 500 }
    );
  }
}
