import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Master from "../core/components/Master";
import About from "../pages/about/About";
import PageNotFound from "../pages/fallback/PageNotFound";
import Hero from "../pages/hero/Hero";
import Skills from "../pages/skills/Skills";
import UiFallback from "../shared/common-ui/ui-fallback/UiFallback";
import { MenuLinks } from "../shared/constants/menu.constant";
import { HeroPageContent } from "../shared/constants/shared.constant";

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
          {
            path: "about",
            element: <About />,
          },
          {
            path: "skills",
            element: <Skills />,
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
