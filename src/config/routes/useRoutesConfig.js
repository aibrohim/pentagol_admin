import { Clubs } from "modules/clubs";
import { Leagues } from "modules/leagues";
import { useRoutes } from "react-router";

export const useRoutesConfig = () =>
  useRoutes([
    {
      path: "/",
      element: "Main Page",
    },
    {
      path: "/leagues",
      element: <Leagues />,
    },
    {
      path: "/matches",
      element: "Matches",
    },
    {
      path: "/clubs",
      element: <Clubs />,
    },
    {
      path: "/articles",
      element: "Articles",
    },
  ]);
