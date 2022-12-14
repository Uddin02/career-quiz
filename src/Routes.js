import { createBrowserRouter } from 'react-router-dom'
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
        path: 'blog',
        element: <Blog />,
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
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      },
    ],
  },
])

export default router