import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestions from "./QuizQuestions";

const Quiz = () => {
  const quizQuestion = useLoaderData();
  const { logo, name, questions, total } = quizQuestion.data;
  return (
    <div className="m-10">
      <div className="bg-gradient-to-r from-blue-200 to-cyan-200 p-6   rounded shadow-lg">
            <img
            className="object-contain w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
            src={logo}
            alt=""
            />
            <p className="mb-2 text-xl text-gray-800 text-center font-bold leading-none sm:text-2xl">
            {name}
            </p>
            <p className="mb-2 text-gray-6 00 text-center leading-none sm:text-2xl">
            <small>Total Questions in this topic: {total}</small>
            </p>
      </div>
      <div>
        {
            questions.map(question => <QuizQuestions
            key={question.id}
            ques={question}
            ></QuizQuestions>)
        }
      </div>
    </div>
  );
};

export default Quiz;
