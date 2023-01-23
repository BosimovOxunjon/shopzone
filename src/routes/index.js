import Search from "../containers/Search/Search";
import Header from "../containers/Header/Header";
import SignUp from "../containers/SignUp/SignUp";
import Footer from "../containers/Footer/Footer";
import Carousel from "../containers/Carousel/Carousel";
import Home from "../containers/Home/Home";
import Contact from "../containers/Contact/Contact";

export default [
  {
    path: "/signup",
    component: SignUp,
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
    path: "/footer",
    component: Footer,
    key: "footer",
  },
];
