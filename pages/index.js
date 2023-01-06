import Head from "next/head";
import QuizList from "../dashboard/QuizList";
import Link from "next/link";
import Footer from "../dashboard/Footer";

export default function Home() {

  return (
    <div className="flex flex-col w-screen px-5 h-screen fixed bg-zinc-900 justify-center items-center">
      <Head>
        <title>WVFRM Quiz</title>
      </Head>
      <div className="p-4 m-2 rounded-lg">
        <h1 className="text-3xl text-white font-bold">Waveform Podcast Trivia</h1>
        <p className="mt-4 text-gray-500">Wacky quizzies complied from all of the&nbsp;
          <span><Link href="youtube.com" className="underline text-red-400">Waveform Podcast </Link></span>
          trivia segments.</p>
        <QuizList/>
      </div>

    </div>
  );
}