import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import AuthPage from './pages/Auth/AuthPage'

function App() {

  const router = createBrowserRouter(
    [

    {
      path:'/auth',
      element:<AuthPage/>
    },
    {
      path:'/',
      element:<HomePage/>
    }
     
    ]
  )

  return <RouterProvider router={router}></RouterProvider>
}

export default App
