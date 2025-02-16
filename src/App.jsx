import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { routes } from "../routes";

function App() {
  const appRouter = createBrowserRouter(routes);
  return <RouterProvider router={appRouter}></RouterProvider>;
}

export default App;
