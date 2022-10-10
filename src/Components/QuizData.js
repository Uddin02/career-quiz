import React from "react";
import { Link } from "react-router-dom";

const QuizData = ({ quizData }) => {
  const { id, name, logo } = quizData;
  // console.log(name)
  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200 p-6 rounded shadow-lg">
      <img
        className="object-contain w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
        src={logo}
        alt=""
      />
      <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">{name}</p>

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
