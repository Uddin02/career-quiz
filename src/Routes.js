import { createBrowserRouter } from 'react-router-dom'
import About from './Components/About.js'
import Blog from './Components/Blog.js'
import ErrorPage from './Components/ErrorPage'
import Home from './Components/Home'
import Quiz from './Components/Quiz.js'
import Root from './Components/Root'
import Statistics from './Components/Statistics.js'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      },
      {
        path: 'home',
        element: <Home />,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'quiz',
        element: <Quiz />,
      },
      {
        path: 'quiz/:quizId',
        element: <Quiz />,
        loader: async ({params}) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
      },
      {
        // path: 'book/:id',
        path: 'statistics',
        element: <Statistics/>,
        // loader: ({ params }) =>
        //   fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
    ],
  },
])

export default router