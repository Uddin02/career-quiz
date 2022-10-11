import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = () => {
    const viewAnswer = () =>{
        toast('dhasd');
    }
    return (
        <div>
            <h3>This is blog</h3>
            <button onClick={() => viewAnswer()}>click</button>
            <ToastContainer/>
        </div>
    );
};

export default Blog;