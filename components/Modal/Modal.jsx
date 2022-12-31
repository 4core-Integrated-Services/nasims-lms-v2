import react, { useState } from "react";
import { useModalStore } from "../store/store";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import { demoQuiz } from "../mock/demoQuiz";

export default function Modal() {
  const { isModalOpen, setIsModalOpen } = useModalStore((state) => state);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  function handleCheckCorrectAnswer(isCorrect) {
    if (isCorrect == true) {
      setScore(score + 1);
    }
  }

  function handleClosemodal() {
    setIsModalOpen(false);
    setScore(0);
    setCurrentQuestion(0);
  }

  function handleNextQuestion() {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < demoQuiz.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  const currentProgress = (currentQuestion / demoQuiz.length) * 100;

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-md shadow-lg relative flex flex-col w-full bg-slate-50 py-[6rem] px-[11rem] min-w-[55rem] outline-none focus:outline-none ">
            {!showScore ? (
              <>
                <div className="w-full bg-green-200 rounded-full h-1 mb-4 absolute top-0 left-0 ">
                  <div
                    className="bg-green-500 h-1 rounded-full "
                    style={{
                      width: `${currentProgress}%`,
                    }}
                  ></div>
                </div>

                <div className="container mx-auto ">
                  <div className="flex gap-4 items-center">
                    <span className="flex items-center ">
                      <h4 className="font-[Roboto] text-semibold text-green-500 text-2xl">
                        {currentQuestion + 1}
                      </h4>
                      <BsArrowRightShort className="w-6 h-6 text-green-500" />
                    </span>
                    <h1 className="font-bold text-2xl  text-slate-500 capitalize font-[Roboto]">
                      {demoQuiz[currentQuestion].question}
                    </h1>
                  </div>
                  <div className="mt-10 ml-14">
                    <ul>
                      {demoQuiz[currentQuestion].options.map((option) => {
                        return (
                          <li
                            key={option.id}
                            className="border-green-500 border-2 rounded-md py-1.5 capitalize hover:bg-green-100 transition-all cursor-pointer mb-2 font-medium text-slate-600 leading-loose"
                            onClick={() => {
                              handleCheckCorrectAnswer(option.isCorrect);
                              handleNextQuestion();
                            }}
                          >
                            <span className="bg-green-500 px-2 rounded-sm text-sm py-1 text-white  ml-1">
                              {option.optionLabel}
                            </span>{" "}
                            {option.value}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <div className="justify-center items-center flex  flex-col overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <h1 className="font-bold ml-32 capitalize text-slate-600 text-2xl font-[Roboto]">
                  Your <span className="text-green-500">score</span> is{" "}
                </h1>

                <div className="block ml-32 mt-6">
                  <span className="text-slate-600 font-medium text-lg">
                    {score} of {demoQuiz.length}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleClosemodal}
                  className="bg-green-500 ml-32 mt-4 py-1 px-3 text-white rounded-md hover:bg-green-600 transition-all"
                >
                  Okay
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
