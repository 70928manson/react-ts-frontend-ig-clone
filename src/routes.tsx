import type { RouteObject } from "react-router-dom";
import Home from "./pages/home";
import Following from "./pages/following";
import NotFound from "./pages/notFound";

const routes: RouteObject[] = [
  {
    path: "/react-ts-frontend-ig-clone",
    element: <Home />,
    children: [],
  },
  {
    path: "/react-ts-frontend-ig-clone/following",
    element: <Following />,
    children: [],
  },
  {
    path: "*",
    element: <NotFound />,
    children: [],
  },
];

export default routes;
