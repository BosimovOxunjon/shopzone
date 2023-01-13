import Search from "../containers/Search/Search";
import Header from "../containers/Header/Header";
import SignUp from "../containers/SignUp/SignUp";
import Footer from "../containers/Footer/Footer";

export default [
  {
    path: "/signup",
    component: SignUp,
    key: "signup",
  },
  {
    path: "/header",
    component: Header,
    key: "header",
  },
  {
    path: "/search",
    component: Search,
    key: "search",
  },
  {
    path: "/footer",
    component: Footer,
    key: "footer",
  },
];
