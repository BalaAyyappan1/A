import './App.css'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import Layout from './components/ReUsable/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Poojas from './pages/Poojas'
import Contact from './pages/Contact'
import Payment from './pages/Payment'
import Kandam from './pages/Kandam'
import Online from './pages/Online'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },           
     { path: "services/kandams-Chapters", element: <Kandam /> },
      { path: "services/online-prediction", element: <Online /> },
      { path: "about-us", element: <About /> },     
      { path: "poojas-homam", element: <Poojas /> }, 
      { path: "contact", element: <Contact /> },
      { path: "payment", element: <Payment /> },
      {
        path: "blog",
        element: <Home scrollTo="blog" />
      },
      {
        path: "testimonial",
        element: <Home scrollTo="testimonial" />
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
