import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteObject } from "react-router";
import { IStore } from "./app/store";
import { selectedProject } from "./slices/project/project.slice";

const BaseLayout = lazy(() => import("./layouts/BaseLayout"));
const ReactSpringLayout = lazy(() => import("./layouts/ReactSpringLayout"));
const SelectProject = lazy(() => import("./views/app/SelectProject"));

// Routes: Sprite animation
const RyuComp = lazy(() => import("./views/app/sprite-animation/RyuComp"));

// Routes: React spring
const ReactSpringIndex = lazy(
  () => import("./views/app/react-spring/ReactSpringIndex")
);
const ParallaxIndex = lazy(
  () => import("./views/app/react-spring/parallax/ParallaxIndex")
);
const ParallaxVertical = lazy(
  () => import("./views/app/react-spring/parallax/vertical/ParallaxVertical")
);
const ParallaxHorizontal = lazy(
  () =>
    import("./views/app/react-spring/parallax/horizontal/ParallaxHorizontal")
);
const ParallaxSticky = lazy(
  () => import("./views/app/react-spring/parallax/sticky/ParallaxSticky")
);

// Routes: React hexagonal
const HexagonalIndex = lazy(
  () => import("./views/app/hexagonal/HexagonalIndex")
);

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

export const reactSpringRouters: RouteObject = {
  path: "/",
  element: <ReactSpringLayout />,
  children: [
    { path: "/", element: <ReactSpringIndex /> },
    { path: "/parallax", element: <ParallaxIndex /> },
    { path: "/parallax/vertical", element: <ParallaxVertical /> },
    { path: "/parallax/horizontal", element: <ParallaxHorizontal /> },
    { path: "/parallax/sticky", element: <ParallaxSticky /> },
  ],
};

export const hexagonalRouters: RouteObject = {
  path: "/",
  element: <BaseLayout />,
  children: [
    { path: "/", element: <HexagonalIndex /> },
  ],
};

const routersCase = (type: string | null) => {
  switch (type) {
    case "hexagonal":
      return hexagonalRouters;
    case "stacking-ring":
      return stackingRingRouters;
    case "sprite-sheet":
      return spriteSheetRouters;
    case "react-spring":
      return reactSpringRouters;
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
