import { useSession } from "next-auth/react";
import React, { useRef } from "react";
import { ITweet } from "../types";
import { useLike } from "../hooks/use-like";
import { HeartIcon, HeartIconActive } from "@/assets/heart-icon";

const LikeButton = ({ post }: { post: ITweet }) => {
  const { data: session }: any = useSession();
  const mutation = useLike();
  const isLiking = useRef(false);

  const hasLiked = post?.likes?.some(
    (like) => like.userId === session?.currentUser?.id
  );

  const handleLikeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (isLiking.current) return;
    isLiking.current = true;
    mutation.mutate({
      tweetId: post.id,
      userId: session.currentUser.id,
    });
    isLiking.current = false;
  };

  return (
    <div
      onClick={handleLikeClick}
      className="flex flex-row items-center group min-w-16"
    >
      <span
        className={` rounded-full p-2 fill-gray-600 dark:fill-gray-500  cursor-pointer  group-hover:fill-pink-600 
        transition-colors duration-200 ease-in-out 
        group-hover:bg-pink-600/10 h-8 w-8
        ${hasLiked && "fill-pink-600 dark:fill-pink-600"}
      `}
      >
        {hasLiked ? <HeartIconActive /> : <HeartIcon />}
      </span>

      {post && post?._count?.likes > 0 && (
        <span
          className={`text-sm text-neutral-500 group-hover:text-pink-600 transition-colors duration-200 ease-in-out ${
            hasLiked && "text-pink-600"
          }`}
        >
          {post?._count?.likes}
        </span>
      )}
    </div>
  );
};

export default LikeButton;
