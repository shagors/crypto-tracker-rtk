import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./components/Homepage";
import Cryptocurrencies from "./components/Cryptocurrencies";
import CryptoDetails from "./components/CryptoDetails";
import Exchanges from "./components/Exchanges";
import News from "./components/News";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "homepage",
        element: <Homepage />,
      },
      {
        path: "cryptocurrencies",
        element: <Cryptocurrencies />,
      },
      {
        path: "crypto/:coinId",
        element: <CryptoDetails />,
      },
      {
        path: "exchanges",
        element: <Exchanges />,
      },
      {
        path: "news",
        element: <News />,
      },
    ],
  },
]);
