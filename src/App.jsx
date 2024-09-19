import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Components/Login"
import Home from "./Components/Home"
import AddBook from "./Components/AddBook"
import EditBook from "./Components/EditBook"
import Book from "./Components/Book"



const App = () => {

  const router = createBrowserRouter( [ {
    path: '/',
    element: <Login />
  }, {
    path: '/home',
    element: <Home />
  }, {
    path: '/addbook',
    element: <AddBook />
  }, {
    path: '/editbook/:id',
    element: <EditBook />
  }, {
    path: '/books',
    element: <Book />
    }, {
    path: '/editbook',
      element:<EditBook  />
  }
  ] )


  return (
    <div>
      < RouterProvider router={router} />
    </div>
  )
}

export default App
