import { useEffect, useState } from "react";
import { Flex, Group, Text, rem, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
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
  const [opened, { toggle }] = useDisclosure(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10); // Set to true when user scrolls
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = active;

      for (let link of links) {
        const section = document.getElementById(link.target);
        if (section) {
          const rect = section.getBoundingClientRect();
          const offset = 150;
          if (rect.top <= offset && rect.bottom > offset) {
            currentSection = link.target;
            break;
          }
        }
      }

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${classes.header} ${isScrolled ? classes.scrolled : ""}`}
    >
      <Flex justify="space-between" align="center" w="100%">
        <Text fw={700} size={rem(16)} className={classes.logo} c="white">
          {"</>"} Hiren Tandel
        </Text>

        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className={classes.burger}
          aria-label="Toggle navigation"
        />

        <Group
          gap={20}
          className={`${classes.nav} ${opened ? classes.open : ""}`}
          visibleFrom="sm"
        >
          {links.map((link) => (
            <ScrollLink
              key={link.label}
              to={link.target}
              smooth={true}
              duration={500}
              offset={-70}
              className={classes.link}
              data-active={active === link.target || undefined}
              onClick={() => opened && toggle()}
            >
              {link.label}
            </ScrollLink>
          ))}
        </Group>
      </Flex>
    </header>
  );
}
