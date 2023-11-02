import Image from 'next/image';
import PlayersList from './components/players-list';
import { Fragment } from 'react';

export const metadata = {
  title: 'Rocosos de Valencia',
  description: 'La App oficial de los Rocosos!',
}

export default function Home() {
  return (
    <Fragment>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
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
              By{' '}
              <Image
                src="/HM-Logo.png"
                alt="H-M's Logo"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
  
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/rocosos_perro.png"
            alt="Logo Rocosos de Valencia"
            width={180}
            height={37}
            priority
          />
        </div>
      </main>
      <div className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className='uppercase font-bold sm:text-sm lg:text-lg sm:pb-2 lg:pb-6'>Jugadores</h2>
          <PlayersList />
        </div>
      </div>
    </Fragment>
  )
}
