import React from "react";
import { Link } from "react-router-dom";

const QuizData = ({ quizData }) => {
  // console.log(quizData)
  const { id, name, logo, total } = quizData;
  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200 p-6 rounded shadow-lg">
      <img
        className="object-contain w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
        src={logo}
        alt=""
      />
      <div>
        <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">Topic Name: {name}</p>
        <p className="text-slate-500"><small>Total quetions in this topic: {total}</small></p>
      </div>

      <Link to={`/quiz/${id}`}>
        <button
          type="button"
          className="px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-cyan-300 text-white hover:bg-cyan-400"
        >
          Lets's Start Quiz
        </button>
      </Link>
    </div>
  );
};

export default QuizData;
