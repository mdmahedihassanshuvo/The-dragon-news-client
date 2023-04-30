import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../pages/Categoriy/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/news/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import PrivateRoute from "./PrivateRoute";
import Tarms from "../pages/Shared/Tarms/Tarms";

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginLayout></LoginLayout>,
      children: [
        {
          path: '/',
          element: <Navigate to="/category/0"></Navigate>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <SignUp></SignUp>
        },
        {
          path: '/terms',
          element: <Tarms></Tarms>
        }
      ]
    },
    {
      path: "category",
      element: <Main></Main>,
      children: [
        {
          path: ":id",
          element: <Category></Category>,
          // element: ,
          loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
        }
      ]
    },
    {
      path: 'news',
      element:<NewsLayout></NewsLayout>,
      children: [
        {
          path: ':id',
          element: <PrivateRoute><News></News></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    }
  
  ]);

  export default router;