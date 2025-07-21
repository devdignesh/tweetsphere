import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleLike } from "../api/toggleLike";

export const useLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      tweetId,
      userId,
    }: {
      tweetId: string | undefined;
      userId: string;
    }) => {
      return toggleLike({ tweetId, userId });
    },

    onSuccess: (_, { tweetId, userId }) => {
      queryClient.setQueryData(["tweets"], (old: any) => {
        if (!old) return;
        return {
          ...old,
          pages: old.pages.map((page: any) => ({
            ...page,
            tweets: page.tweets.map((tweet: any) => {
              if (tweet.id !== tweetId) return tweet;

              const hasLiked = tweet.likes.some(
                (like: any) => like.userId === userId
              );

              return {
                ...tweet,
                likes: hasLiked
                  ? tweet.likes.filter((like: any) => like.userId !== userId)
                  : [...tweet.likes, { userId }],
                _count: {
                  ...tweet._count,
                  likes: hasLiked
                    ? tweet._count.likes - 1
                    : tweet._count.likes + 1,
                },
              };
            }),
          })),
        };
      });
    },

    onError: () => {
      console.log("error");
    },
  });
};
