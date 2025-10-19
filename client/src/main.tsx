import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Layout from "./ui/Layout.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Product from "./pages/Product.tsx";
import Category from "./pages/Category.tsx";
import Profile from "./pages/Profile.tsx";
import Favourite from "./pages/Favourite.tsx";
import Cart from "./pages/Cart.tsx";
import Cancel from "./pages/Cancel.tsx";
import NotFound from "./pages/NotFound.tsx";
import Orders from "./pages/Orders.tsx";
import Success from "./pages/Success.tsx";

const RouterLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/favourite",
        element: <Favourite />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/cancel",
        element: <Cancel />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={Router} />
);
