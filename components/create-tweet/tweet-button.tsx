import React, { useCallback } from "react";
import Link from "next/link";
import { Tweet } from "./assets/tweet-icon";
import { Button } from "../ui/button";
import useCreateTweetStore from "../sidebar/store/useCreateTweetStore";

const TweetButton = () => {
  const createTweetDialog = useCreateTweetStore();

  const onOpenTweetDialog = useCallback(() => {
    createTweetDialog.onOpen();
  }, [createTweetDialog]);
  return (
    <Button
      onClick={onOpenTweetDialog}
      className="xxl:w-full w-[3.3rem] mt-4 justify-center bg-sky-500 rounded-full py-6"
    >
      <span className="flex items-center xxl:hidden h-7 w-7 fill-slate-100 ">
        <Tweet />
      </span>
      <span className="hidden text-base xxl:inline font-semibold text-white">
        Post
      </span>
    </Button>
  );
};

export default TweetButton;
