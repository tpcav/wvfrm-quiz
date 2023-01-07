import questions from "./api/dec2022.json";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import { AiFillPlayCircle } from 'react-icons/ai';

export default function December2022() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [questionsWithAnswers, setQuestionsWithAnswers] = useState([]);

  function refresh(){
    window.location.reload(true);
  }

  function handleAnswerOption(answer) {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ]);
    setSelectedOptions([...selectedOptions]);
    console.log(selectedOptions);
  }

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
    
      const questionsWithAnswers = questions.map((question, index) => {
        return {
          ...question,
          userAnswer: selectedOptions[index]?.answerByUser,
          isCorrect: question.answerOptions.some(
            (answer) => answer.isCorrect && answer.answer === selectedOptions[index]?.answerByUser
          ),
        };
      });
    
      setQuestionsWithAnswers(questionsWithAnswers);
    };
      


    return (
      <div className="flex flex-col w-screen p-4 h-screen justify-center items-center bg-zinc-900">
        <Head>
          <title>WVFRM Quiz - Dec 2022</title>
        </Head>
        {showScore ? (
      <div className="flex flex-col w-screen p-4 h-screen justify-center items-center bg-zinc-900">
        <div className="fixed top-0 p-4 text-left bg-zinc-900 w-full z-20">
          <div className="flex w-full mt-4">
            <button className="mb-2 mr-4 w-20 py-2 bg-zinc-500 text-white font-medium rounded-lg shadow-sm border border-gray-300 focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 hover:border-gray-400">
              <Link href="/">Home</Link>
            </button>
            <button className="mb-2 w-20 py-2 bg-zinc-500 text-white font-medium rounded-lg shadow-sm border border-gray-300 focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 hover:border-gray-400" onClick={refresh}>
              Restart
            </button>
          </div>
        </div>
    
    <div className="mt-10 h-full z-0">
      <div className="flex flex-col items-center w-full ">
        <h1 className="text-3xl font-semibold text-center text-white mt-20">
          Score: {score}/{questions.length}
        </h1>
        {questions.map((question, index) => {
          const userAnswer = selectedOptions[index]?.answerByUser;

          return (
            <div key={question.id} className="text-lg md:text-xl lg:text-2xl text-white/60 font-semibold w-full h-full w-full md:w-2/3 lg:w-1/2">
              <div className="h-full">
                <div className="flex flex-col items-start w-full">
                  <h4 className="mt-10 text-md md:text-lg text-white/60">
                    Question {index + 1} of {questions.length}
                  </h4>
                  <div className="mt-4 text-lg md:text-xl lg:text-xl text-white mb-2">
                    {question.question}
                  </div>
                </div>
                <div className="flex flex-col w-100">
                {question.answerOptions.map((answer, i) => (
                    <div
                      key={i}
                      className={`text-xs md:text-sm lg:text-md flex items-center w-100 py-3 pl-4 m-2 ml-0 space-x-4 px-4 border-2 cursor-pointer border-white/10 rounded-full bg-${
                        answer.answer === userAnswer && !answer.isCorrect
                          ? 'red-100'
                          : 'white/5'
                      }`}
                    >
                      <input
                        type="radio"
                        name={answer.answer}
                        value={answer.answer}
                        checked={answer.answer === userAnswer}
                        className="w-6 h-6 bg-black"
                      />
                      <p className="ml-20 text-white w-full">{answer.answer}</p>
                      {answer.isCorrect ? (
                        <span className="text-green-500 bg-green-200 p-1 px-2 rounded-full">Correct</span>
                      ) : userAnswer === answer.answer ? (
                        <span className="text-red-500 bg-red-200 p-1 px-2 rounded-full">Incorrect</span>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          );
        })}
      </div>
    </div>
  </div>
) : (
          <div className="mt-20 h-full flex flex-col w-full items-center">
            <div className="fixed top-0 p-4 text-left w-full z-20">
              <div className="flex w-full mt-4">
                <button className="mb-2 mr-4 w-20 py-2 bg-zinc-500 text-white font-medium rounded-lg shadow-sm border border-gray-300 focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 hover:border-gray-400">
                  <Link href="/">Home</Link>
                </button>
              </div>
            </div>

            <div className="h-full w-full md:w-2/3 lg:w-1/2">
                      
              <div className="flex flex-col items-start w-full">
                <h4 className="text-md md:text-lg text-white/60 font-bold">
                  Question {currentQuestion + 1} of {questions.length}
                </h4>
                <div className="inline mt-4 text-md md:text-lg lg:text-xl text-white mb-2 font-bold">
                    {questions[currentQuestion].question}
                </div>
              </div>
              <div className="flex flex-col w-full">
                {questions[currentQuestion].answerOptions.map((answer, index) => (
                  <div
                    key={index}
                    className="text-xs md:text-sm lg:text-md flex items-center w-full py-3 pl-4 m-2 ml-0 space-x-4 px-4 border-2 cursor-pointer border-white/10 rounded-full bg-white/5"
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
                      className="w-6 h-6"
                    />
                    <p className="ml-20 text-white">{answer.answer}</p>
                  </div>
                ))}
              </div>
              
          </div>
          <div className="flex fixed bottom-0 mb-6 p-4 justify-between w-full md:w-2/3 lg:w-1/2 mt-2 text-white text-center">
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
        </div>
      )}
    </div>
  );
}