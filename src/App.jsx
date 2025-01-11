import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";
import MainLayout from "./Component/Layouts/MainLayout/MainLayout";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Portfilio from "./Component/About/Portfilio";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "portfolio", element: <Portfilio /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
