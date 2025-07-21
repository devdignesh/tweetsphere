import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("user_id") || undefined;

  try {
    const tweets = await prisma.post.findMany({
      where: {
        likes: {
          some: {
            id: userId,
          },
        },
      },
      include: {
        likes: true,
      },
    });
    return NextResponse.json(tweets, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Something went wrong",
        error: error.message,
      },
      { status: error.errorCode || 500 }
    );
  }
}

export async function POST(request: Request) {
  const { tweet_id, user_id } = await request.json();

  try {
    const existingLike = await prisma.like.findFirst({
      where: { postId: tweet_id, userId: user_id },
    });

    const result = await prisma.$transaction(async (tx) => {
      if (existingLike) {
        await tx.like.delete({ where: { id: existingLike.id } });
        await tx.post.update({
          where: { id: tweet_id },
          data: { favorite_count: { decrement: 1 } },
        });
        return { message: "Tweet unliked" };
      } else {
        await tx.like.create({
          data: { postId: tweet_id, userId: user_id },
        });
        await tx.post.update({
          where: { id: tweet_id },
          data: { favorite_count: { increment: 1 } },
        });
        return { message: "Tweet liked" };
      }
    });

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ message: "Failed", error: error.message });
  }
}
