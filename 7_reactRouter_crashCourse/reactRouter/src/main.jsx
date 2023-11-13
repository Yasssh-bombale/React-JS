import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github, { fetchUsers } from "./components/Github/Github";
import Demo from "./components/Demo/Demo";

// * Two types of creating an Routes --->

// ?  1)
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },

//       {
//         path: "contact-us",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// ?  2)

// * Usually below syntax is easier and recomended;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="about/demo" element={<Demo />} />

      <Route path="contact-us" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
      <Route loader={fetchUsers} path="github" element={<Github />} />

      {/* There is an <Outlet/> component present in the <Layout/> component by which we are able to render subchildrens in there outlet part ...header and footer are permanent and outlet means layout childrens */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
