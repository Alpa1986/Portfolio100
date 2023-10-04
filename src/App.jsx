import { HelmetProvider } from "react-helmet-async";
import "./App.css";
import "./components/hero/HeroComponentStyle.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Contact from "./container/contact/Contact";
import About from "./container/about-me/About";
import Home from "./container/home/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<p>Seite nicht vorhanden</p>} />
    </>
  )
);

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  );
}

export default App;
