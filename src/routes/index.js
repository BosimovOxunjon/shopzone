import Search from "../containers/Search/Search";
import Header from "../containers/Header/Header";
import SignUp from "../containers/SignUp/SignUp";
import Footer from "../containers/Footer/Footer";
import Carousel from "../containers/Carousel/Carousel";
import Home from "../containers/Home/Home";
import Contact from "../containers/Contact/Contact";
import SignIn from "../containers/SignIn/SignIn";
import Products from "../containers/Products/Products";
import Discount from "../containers/Discount/Discount";

export default [
  {
    path: "/signup",
    component: SignUp,
    key: "signup",
  },
  {
    path: "/signin",
    component: SignIn,
    key: "signup",
  },
  {
    path: "/contact",
    component: Contact,
    key: "contact",
  },
  {
    path: "/header",
    component: Header,
    key: "header",
  },
  {
    path: "/home",
    component: Home,
    key: "home",
  },
  {
    path: "/search",
    component: Search,
    key: "search",
  },
  {
    path: "/carousel",
    component: Carousel,
    key: "carousel",
  },
  {
    path: "/products",
    component: Products,
    key: "products",
  },
  {
    path: "/discount",
    component: Discount,
    key: "discount",
  },
  {
    path: "/footer",
    component: Footer,
    key: "footer",
  },
];
