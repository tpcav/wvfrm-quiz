import Head from "next/head";
import QuizList from "../dashboard/QuizList";
import Link from "next/link";

export default function Home() {

  return (
    <div className="mt-12">
      <Head>
        <title>WVFRM Quiz</title>
      </Head>
      <div className="p-6 m-4 rounded-lg">
        <div className="text-left">
          <h1 className="text-3xl text-white font-bold">WVFRM Podcast Trivia</h1>
          <p className="mt-4 text-gray-500">A wacky trivia set complied from all of the&nbsp;
            <span><Link href="https://www.youtube.com/c/Waveform" className="underline text-red-400">Waveform Podcast</Link></span>
            &nbsp;trivia segments.
          </p>
        </div>
        
        <QuizList/>
      </div>
    </div>
  );
}