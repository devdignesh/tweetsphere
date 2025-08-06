import { QueryClient } from "@tanstack/react-query";

export function updateTweetCache(
  queryClient: QueryClient,
  tweetId: string,
  userId: string
) {
  // update tweets queries
  queryClient.setQueriesData({ queryKey: ["tweets"] }, (old: any) =>
    updateTweetsData(old, tweetId, userId)
  );

  // update bookmarks queries
  queryClient.setQueriesData({ queryKey: ["bookmarks"] }, (old: any) =>
    updateTweetsData(old, tweetId, userId)
  );
}

function updateTweetsData(old: any, tweetId: string, userId: string) {
  if (!old) return old;

  // infinite query (pages)
  if (old.pages) {
    return {
      ...old,
      pages: old.pages.map((page: any) => ({
        ...page,
        tweets: page.tweets.map((tweet: any) =>
          tweet.id === tweetId ? toggleLikeInTweet(tweet, userId) : tweet
        ),
      })),
    };
  }

  // single tweet query
  if (old.id === tweetId) {
    return toggleLikeInTweet(old, userId);
  }

  return old;
}

// toggle like in a single tweet object.

function toggleLikeInTweet(tweet: any, userId: string) {
  const hasLiked = tweet.likes.some((like: any) => like.userId === userId);

  return {
    ...tweet,
    likes: hasLiked
      ? tweet.likes.filter((like: any) => like.userId !== userId)
      : [...tweet.likes, { userId }],
    _count: {
      ...tweet._count,
      likes: hasLiked ? tweet._count.likes - 1 : tweet._count.likes + 1,
    },
  };
}
