import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnswerCard from './AnswerCard';

const QuizQuestions = ({ques}) => {
    // console.log(ques)
    const {id, question, options, correctAnswer} = ques;
    const htmlStr = question;
    const newStr = htmlStr.replace(/(<([^>]+)>)/ig, '');

    const viewAnswer = () =>{
        toast(correctAnswer,{ position: "top-center",theme: "light",});

    }

    return (
        <div className='bg-slate-200 text-xl mt-10 p-10 rounded-md'>
            <div className='flex justify-between items-center'>
                <p className='font-bold'>Q: {newStr}</p>
                <EyeIcon className="h-6 w-6 text-gray-500 cursor-pointer" onClick={() => viewAnswer()}/>
            </div>

            <div className="flex justify-center mt-8">
                <AnswerCard
                key={id}
                options={options}
                correctAnswer={correctAnswer}
                ></AnswerCard>
            </div>
       </div>
       
    );
};

export default QuizQuestions;