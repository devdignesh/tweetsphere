import { useSession } from "next-auth/react";
import React from "react";
import { Logo } from "./logo";
import Navbar from "../navbar/navbar";
import TweetButton from "../create-tweet/tweet-button";
import SessionUserButton from "../auth_user/session-user-button";
import GithubButton from "./btn-github";

function Sidebar() {
  const { data: session } = useSession();

  return (
    <header className="sidebar_container hidden sticky top-0 h-dvh overflow-y-auto sm:grid sm:p-[4px] md:py-[4px] md:px-[0.5em] xxl:justify-start">
      <div className="xxl:justify-start flex justify-center">
        <Logo />
      </div>
      <div className="">
        <Navbar />
      </div>
      <div className="xxl:justify-start  flex justify-center">
        <GithubButton />
      </div>

      {session && (
        <div className="xxl:justify-start  flex justify-center">
          <TweetButton />
        </div>
      )}

      {session && (
        <div className="xxl:justify-start  mt-auto flex">
          <SessionUserButton />
        </div>
      )}
    </header>
  );
}

export default Sidebar;
