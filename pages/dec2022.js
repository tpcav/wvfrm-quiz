import questions from "./api/dec2022.json";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";

export default function December2022() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOption = (answer) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ]);
    setSelectedOptions([...selectedOptions]);
    console.log(selectedOptions);
  };

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < questions.length && setCurrentQuestion(nextQues);
  };

  const handleSubmitButton = () => {
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      questions[i].answerOptions.map(
        (answer) =>
          answer.isCorrect &&
          answer.answer === selectedOptions[i]?.answerByUser &&
          (newScore += 1)
      );
    }
    setScore(newScore);
    setShowScore(true);
  };

  return (
    <div className="flex flex-col w-screen px-12 h-screen justify-center items-center bg-zinc-900">
      <Head>
        <title>WVFRM Quiz - Dec 2022</title>
      </Head>
      {showScore ? (
        <div className="text-center">
          <button className="mb-10 mr-4 w-20 py-3 bg-zinc-500 text-white font-medium rounded-lg shadow-sm border border-gray-300 focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 hover:border-gray-400">
            <Link href="/">Home</Link>
          </button>         
          <button className="mb-10 w-20 py-3 bg-zinc-500 text-white font-medium rounded-lg shadow-sm border border-gray-300 focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 hover:border-gray-400">
            <Link href="#">Restart</Link>
          </button>
          <h1 className="text-3xl font-semibold text-center text-white">
            You scored {score} out of {questions.length}
          </h1>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-start w-full">
            <button className="mb-2 mr-4 w-20 py-2 bg-zinc-500 text-white font-medium rounded-lg shadow-sm border border-gray-300 focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 hover:border-gray-400">
              <Link href="/">Home</Link>
            </button>
            <h4 className="mt-10 text-xl text-white/60">
              Question {currentQuestion + 1} of {questions.length}
            </h4>
            <div className="mt-4 text-2xl text-white mb-6">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="flex flex-col w-full">
            {questions[currentQuestion].answerOptions.map((answer, index) => (
              <div
                key={index}
                className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-white/10 rounded-xl bg-white/5"
                onClick={(e) => handleAnswerOption(answer.answer)}
              >
                <input
                  type="radio"
                  name={answer.answer}
                  value={answer.answer}
                  checked={
                    answer.answer ===
                    selectedOptions[currentQuestion]?.answerByUser
                  }
                  onChange={(e) => handleAnswerOption(answer.answer)}
                  className="w-6 h-6 bg-black"
                />
                <p className="ml-6 text-white">{answer.answer}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between w-full mt-10 text-white">
            <button
              onClick={handlePrevious}
              className="w-[49%] py-2 bg-red-400 font-medium rounded-lg border border-red-300 focus-within:ring-4 focus-within:ring-red-500 focus-within:ring-offset-2 hover:border-gray-400"
            >
              Previous
            </button>
            <button
              onClick={
                currentQuestion + 1 === questions.length
                  ? handleSubmitButton
                  : handleNext
              }
              className="w-[49%] py-2 bg-red-400 font-medium rounded-lg border border-red-300 focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 hover:border-gray-400"
            >
              {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}