type Route = {
  path: string;
  icon?: JSX.Element;
  name: string;
  id: string;
  showOnLogIn: boolean;
};
type Routes = Route[];

export const navRoutes: Routes = [
  { id: "login-page", name: "Login", path: "/login", showOnLogIn: true },
  {
    id: "register-page",
    name: "Register",
    path: "/register",
    showOnLogIn: false,
  },
];
