import React from 'react';

const Answer = (props) => {
    return (
        <div className="bg-gray-800 mx-6 p-5 w-auto mb-4 rounded-md flex items-center">
            <input
                type="radio"
                name="answer"
                value={props.answer}
                className="ml-5 bg-gray-500"
            />
            <label className=" text-white text-lg ml-4">
                {props.answer}
            </label>
        </div>
    );
};

export default Answer;