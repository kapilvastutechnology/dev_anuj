import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayout from "./components/RootLayout.jsx";
import Home from "./features/home/Home.jsx";
import AddPost from "./features/posts/AddPost.jsx";
import UpdatePost from "./features/posts/UpdatePost.jsx";

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [

        {
          index: true,
          element: <Home/>
        },

        {
          path: 'add-post',
          element:<AddPost/>
        },
        
        {
          path: 'update.post/:id',
          element: <UpdatePost />
        }

      ]
    }
  ])
  return <RouterProvider router={router} />
}