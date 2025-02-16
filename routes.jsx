import AppLayout from "./src/components/AppLayout";
import Body from "./src/components/Body";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";

export const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
];
