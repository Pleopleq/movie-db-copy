import Routes from "../Interfaces/routes";
import HomePage from "../pages/Home";
import SingleMovie from "../pages/SingleMovie";

const routes: Routes[] = [
  {
    path: "/",
    name: "Home Page",
    component: HomePage,
    exact: true,
  },
  {
    path: "/movie/:id",
    name: "Single Movie",
    component: SingleMovie,
    exact: true,
  },
];

export default routes;
