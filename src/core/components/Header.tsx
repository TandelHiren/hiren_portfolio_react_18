import { useEffect, useState } from "react";
import { Flex, Group, rem, Text } from "@mantine/core";
import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import classes from "./Header.module.css";

const links = [
  { label: "Home", target: "hero" },
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Experience", target: "experience" },
  { label: "Projects", target: "projects" },
  { label: "Testimonials", target: "testimonials" },
  { label: "Contact", target: "contact" },
];

export function Header() {
  const [active, setActive] = useState("hero");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) =>
        document.getElementById(link.target)
      );

      const scrollPos = window.scrollY + 100;

      sections.forEach((section, idx) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (scrollPos >= top && scrollPos < bottom) {
            setActive(links[idx].target);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={classes.header}>
      <Flex justify="space-between" align="center" w="100%">
        <Text fw={700} size={rem(16)} className={classes.logo} c="white">
          {"</>"} Hiren Tandel
        </Text>

        <Group gap={20} className={classes.nav} visibleFrom="sm">
          {links.map((link) => (
            <ScrollLink
              key={link.label}
              to={link.target}
              smooth={true}
              duration={500}
              offset={-70}
              className={classes.link}
              data-active={active === link.target || undefined}
            >
              {link.label}
            </ScrollLink>
          ))}
        </Group>
      </Flex>
    </header>
  );
}
