// src/routes/router.tsx
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";

// Fallback or common pages

// Feature pages (add yours as needed)
// import Dashboard from "../pages/dashboard/Dashboard";
// import About from "../pages/About";
// import Projects from "../pages/Projects";
// import Contact from "../pages/Contact";

// Optional constants
import UiFallback from "../shared/common-ui/ui-fallback/UiFallback";
import { HeroPageContent } from "../shared/constants/shared.constant";
import { MenuLinks, ROUTER_LINKS } from "../shared/constants/menu.constant";
import Master from "../core/components/Master";
import PageNotFound from "../pages/fallback/PageNotFound";
import Hero from "../pages/hero/Hero";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Master />,
        children: [
          {
            index: true, // This makes Hero the default for "/"
            element: <Hero />,
          },
        ],
      },
      {
        path: "/access-denied",
        element: (
          <UiFallback
            title={HeroPageContent.accessDenied.title}
            description={HeroPageContent.accessDenied.description}
            imageUrl={HeroPageContent.accessDenied.imageUrl}
          />
        ),
      },
      {
        path: MenuLinks.UNAUTHORIZED,
        element: (
          <UiFallback
            title="Unauthorized"
            description="You do not have access."
            imageUrl=""
          />
        ),
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
