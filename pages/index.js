import Head from "next/head";
import QuizList from "../dashboard/QuizList";
import Link from "next/link";

export default function Home() {

  return (
    <div className="mt-12 sm:p-0 md:px-32 lg:px-48">
      <Head>
        <title>WVFRM Quiz</title>
      </Head>
      <div className="ml-10 flex w-screen place-items-center justify-left blur-sm">
        <img className="rounded-full" src='https://yt3.googleusercontent.com/7WTMzbQbGnHcH0Zf__O0tpko5ZRei2fnUlkR3HZery9CXVIqB5iIdDXX4fVjGwkpPK7MPGUhGQ=s900-c-k-c0x00ffffff-no-rj' alt="Waveform Podcast Logo" width="30" height="30" />
      </div>
      <div className="p-6 m-4 rounded-lg">
        <div className="text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">WVFRM Podcast Trivia</h1>
          <p className="mt-4 pr-20 text-left text-gray-500">A wacky trivia set complied from all of the&nbsp;
            <span><Link href="https://www.youtube.com/c/Waveform" className="underline text-red-400">Waveform Podcast</Link></span>
            &nbsp;trivia segments.
          </p>
        </div>
      
        <QuizList/>
      </div>
    </div>
  );
}