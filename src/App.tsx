import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./pages/Home";
import { Canvas } from "./components/Canvas/canvas";
import "./assets/css/animate.min.css";
import "./App.css";
import "antd/dist/antd.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);

function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ChakraProvider>
      {!isMobile && <Canvas />}
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
