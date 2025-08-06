import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleLike } from "../api/toggleLike";
import { updateTweetCache } from "../actions/update-tweet-cache";

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
      if (!tweetId || !userId) return;
      updateTweetCache(queryClient, tweetId, userId);
    },

    onError: () => {
      console.log("error");
    },
  });
};
