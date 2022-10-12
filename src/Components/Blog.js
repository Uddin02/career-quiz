import React from "react";

const Blog = () => {
  return (
    <div className="m-10">
      <h1 className="text-2xl text-slate-700 text-center mb-10 underline">Some questions answer about react router</h1>
      <p className="text-2xl text-slate-500">
        1. What is the purpose of react router?
      </p>
      <p className="text-justify text-2xl text-slate-500">
        Ans: React Router, and dynamic, client-side routing, allows us to build
        a single-page web application with navigation without the page
        refreshing as the user navigates. React Router uses component structure
        to call components, which display the appropriate information.By
        preventing a page refresh, and using Router or Link, which is explained
        in more depth below, the flash of a white screen or blank page is
        prevented. This is one increasingly common way of having a more seamless
        user experience.
      </p>

      <p className="text-2xl text-slate-500 mt-10">
        2. How does context API works?
      </p>
      <p className="text-justify text-2xl text-slate-500">
        Ans: Context API provides a way to pass data through the component tree
        without having to pass props down manually at every level. In a typical
        React application, data is passed top-down (parent to child) via props,
        but such usage can be cumbersome for certain types of props (e.g. locale
        preference, UI theme) that are required by many components within an
        application. Context provides a way to share values like these between
        components without having to explicitly pass a prop through every level
        of the tree.
      </p>

      <p className="text-2xl text-slate-500 mt-10">
        3. What do you know about Useref hook?
      </p>
      <p className="text-justify text-2xl text-slate-500">
        Ans: The useRef Hook allows you to persist values between renders. It
        can be used to store a mutable value that does not cause a re-render
        when updated. It can be used to access a DOM element directly.If we
        tried to count how many times our application renders using the useState
        Hook, we would be caught in an infinite loop since this Hook itself
        causes a re-render. To avoid this, we can use the useRef Hook.useRef() only returns one item. It returns an Object called current.
        When we initialize useRef we set the initial value: useRef(0).
        It's like doing this: const count = current: 0. We can access the count by using count.current.
        Run this on your computer and try typing in the input to see the application render count increase.
      </p>
    </div>
  );
};

export default Blog;
