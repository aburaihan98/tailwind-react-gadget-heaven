import { createBrowserRouter } from "react-router-dom";
import Analytics from "./components/analytics/Analytics";
import Carts from "./components/dashboard/Carts";
import Dashboard from "./components/dashboard/Dashboard";
import WishLists from "./components/dashboard/WishLists";
import Details from "./components/details/Details";
import Cards from "./components/main/Cards";
import Main from "./components/main/Main";
import Statistics from "./components/statistics/Statistics";
import ErrorPage from "./ErrorPage";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "/",
            element: <Cards />,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/category/:category",
            element: <Cards />,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/:product/:productId",
        element: <Details />,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <Carts />,
          },
          {
            path: "/dashboard/cart",
            element: <Carts />,
          },
          {
            path: "/dashboard/wishlist",
            element: <WishLists />,
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/analytics",
        element: <Analytics />,
        loader: () => fetch("../products.json"),
      },
    ],
  },
]);

export default router;
