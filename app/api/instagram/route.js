import { NextResponse } from "next/server";
import { getInstagramPosts } from "@/lib/instagram";

export const dynamic = "force-dynamic";

export async function GET() {
  const posts = await getInstagramPosts();

  return NextResponse.json({ posts });
}
