import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../Home";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import Collections from "../Collections";
import Favorites from "../Favorites";
import Orders from "../Orders";
import Cart from "../Cart";
import AddSold from "../AddSold";
import Profile from "../Profile";

const Layout = () => {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      {/* <Contact></Contact> */}
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/collections",
        element: <Collections />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/addsold",
        element: <AddSold />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
       {
        path: "/Contact",
        element: <Contact/>,
      },
    ],
  },
]);

export default router;


