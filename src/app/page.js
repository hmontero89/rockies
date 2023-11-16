"use client";

import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { kv } from "@vercel/kv";
import FetchPlayers from "./components/fetch-players";
import PlayersList from "./components/players-list";

export default function Home() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const players = fetch("/api/players-list")
      .then((response) => {
        console.log("response = ", response);

        return response.json();
      })
      .then((data) => {
        console.log("data = ", data);

        setPlayers(data);
      });
  }, []);

  console.log("players = ", players);

  return (
    <Fragment>
      <main className="flex flex-col items-center justify-between px-24">
        {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Rocosos de Valencia
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://github.com/hmontero89"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/HM-Logo.png"
                alt="H-M's Logo"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div> */}
      </main>
      <div className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="uppercase font-bold sm:text-sm lg:text-lg sm:pb-2 lg:pb-6">
            Jugadores
          </h2>
          <PlayersList players={players} />
        </div>
      </div>
    </Fragment>
  );
}
