type Route = {
  path: string;
  icon?: JSX.Element;
  name: string;
  id: string;
};
type Routes = Route[];

export const navRoutes: Routes = [
  { id: "login-page", name: "Login", path: "/login" },
  {
    id: "register-page",
    name: "Register",
    path: "/register",
  },
];
