import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Answer = (props) => {

    const {answer, correctAnswer} = props;
    // console.log(correctAnswer)
 
    const correct = () => toast.success('Your answer is Correct',{
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
   
        const wrong = () => toast.error('Oops! You select a wrong answer',{
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  
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
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Answer;