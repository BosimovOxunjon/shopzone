import Header from "../containers/Header/Header";
import SignUp from "../containers/SignUp/SignUp";

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
];
