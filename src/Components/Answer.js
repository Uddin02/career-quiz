import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Answer = (props) => {

    const {answer, correctAnswer} = props;
    // console.log(correctAnswer)
 
    const correct = () => toast.success('Your answer is Correct',{
        position: "top-center",theme: "light",});
   
        const wrong = () => toast.error('Oops! Your answer is incorrect',{ position: "top-center",theme: "light",});
  
    const answerHandler = answer => {
        // console.log(answer)
        if(answer === correctAnswer){
            correct();
        }else{
            wrong();
        }
    }

    return (
        <div className="bg-gray-800 mx-6 p-5 w-auto mb-4 rounded-md flex items-center">
            <input
                type="radio"
                name="answer"
                value={answer}
                className="ml-5 bg-gray-500 h-6 w-6 cursor-pointer"
                onClick={() => answerHandler(answer)}    
            />
            <label className=" text-white text-lg ml-4">
                {answer}
            </label>
        </div>
    );
};

export default Answer;