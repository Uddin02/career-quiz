import React from "react";
import { useLoaderData } from "react-router-dom";
import Images from "../images/image.png";
import QuizData from "./QuizData";

const Home = () => {
  const quizTopics = useLoaderData();
  const quizDatas = quizTopics.data;

  return (
    <div>
      <div className="m-10 lg:flex items-center">
        <img className="w-6/12 h-auto" src={Images} alt="" />
        <p className="text-justify sm:pt-5 md:pl-2 text-2xl text-slate-500">
          We are proud to have you. Here you can examine yourself by the most common interview quetions. In our quiz section you will get four core topics of web development. The internet connects everyone nowadays and web development is a huge part of our society. If you want to be well-known throughout the world then you should probably develop your own website or a web page.
        </p>
      </div>
      <h1 className='text-center font-bold text-sky-400 text-lg mb-10'>You can examine yourself by simply select a topic!!</h1>
      <div className='m-10 grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
        {quizDatas.map((quizData) => (
          <QuizData key={quizData.id} quizData={quizData}></QuizData>
        ))}
      </div>
    </div>
  );
};

export default Home;
