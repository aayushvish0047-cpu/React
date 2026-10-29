import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/index.tsx"),
    route("home", "routes/home.tsx"),
    route("paste", "routes/paste.tsx"),
    route("paste/:id", "routes/view-paste.tsx"),
  ]),
] satisfies RouteConfig;
