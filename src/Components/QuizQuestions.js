import React from 'react';
import AnswerCard from './AnswerCard';
// import AnswerCard from './AnswerCard';

const QuizQuestions = ({ques}) => {
    // console.log(ques)
    const {id, question, options} = ques;
    return (
        <div className='bg-slate-200 text-xl mt-10 p-10 rounded-md'>
            <p>Q:{question}</p>
            <div className="flex justify-center mt-16">
                <AnswerCard
                key={id}
                options={options}
                ></AnswerCard>
            </div>
            {/* {this.state.statusShown && (
                <Status correct={this.state.currentQuestionCorrect} />
            )} */}
       </div>
    );
};

export default QuizQuestions;