"use client";
import { useSession } from "next-auth/react";
import React, { useCallback } from "react";
import Sidebar from "../sidebar/sidebar";
import { Toaster } from "../ui/toaster";
import NextTopLoader from "nextjs-toploader";
import Aside from "../aside/aside";
import LoadingScreen from "../elements/loading-screen/loading-screen";
import Auth from "../auth_user";
import MobileNavbar from "../navbar/mobile-navbar";
import CreateTweetDialog from "../sidebar/create-tweet-model";
import useCreateTweetStore from "../sidebar/store/useCreateTweetStore";

interface Props {
  children: React.ReactNode;
}

const Home = ({ children }: Props) => {
  const { data: session, status } = useSession();
  const createTweetDialog = useCreateTweetStore();

  if (status === "loading") {
    return <LoadingScreen />;
  }

  if (!session) {
    return (
      <div className="container h-screen mx-auto max-w-7xl">
        <Auth />
      </div>
    );
  }

  return (
    <>
      {session && (
        <div className="layout max-w-[1265px]">
          <MobileNavbar />

          <Sidebar />
          <main
            aria-label="Home timeline"
            id="home-timeline"
            className="border-x"
          >
            <NextTopLoader
              color="#2299DD"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            />

            {children}

            <Toaster />
          </main>

          <Aside />

          <CreateTweetDialog
            isOpen={createTweetDialog.isOpen}
            onClose={createTweetDialog.onClose}
          />
        </div>
      )}
    </>
  );
};

export default Home;
