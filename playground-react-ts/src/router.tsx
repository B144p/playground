import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteObject } from "react-router";
import { selectedProject } from "./slices/project/project.slice";
import { IStore } from "./app/store";

const BaseLayout = lazy(() => import("./layouts/BaseLayout"));
const SelectProject = lazy(() => import("./views/app/SelectProject"));

// Routes: Sprite animation
const RyuComp = lazy(() => import("./views/app/sprite-animation/RyuComp"));

const publicRouters: RouteObject = {
  path: "/",
  element: <BaseLayout />,
  children: [{ path: "/", element: <SelectProject /> }],
};

const defaultRouters: RouteObject = {
  path: "/",
  element: <BaseLayout />,
  children: [
    { path: "404", element: <h1>Page not found</h1> },
    { path: "500", element: <h1>Status 500</h1> },
    { path: "*", element: <h1>Out of case</h1> },
  ],
};

export const stackingRingRouters: RouteObject = {
  path: "/",
  element: <BaseLayout />,
  children: [
    { path: "/", element: <h1>stackingRingRouters/</h1> },
    { path: "/check", element: <h1>stackingRingRouters/check</h1> },
  ],
};

export const spriteSheetRouters: RouteObject = {
  path: "/",
  element: <BaseLayout />,
  children: [
    { path: "/", element: <RyuComp /> },
    { path: "/check", element: <h1>spriteSheetRouters/check</h1> },
  ],
};

const routersCase = (type: string | null) => {
  switch (type) {
    case "stacking-ring":
      return stackingRingRouters;
    case "sprite-sheet":
      return spriteSheetRouters;
    default:
      return publicRouters;
  }
};

export const RouterScope = () => {
  const dispatch = useDispatch();
  const { selected } = useSelector((state: IStore) => state.project);

  useEffect(() => {
    dispatch(selectedProject(localStorage.getItem("project")));
  }, []);

  // var response: RouteObject[] = [
  //   routersCase(selected),
  //   defaultRouters,
  // ];

  return [routersCase(selected), defaultRouters];
};
