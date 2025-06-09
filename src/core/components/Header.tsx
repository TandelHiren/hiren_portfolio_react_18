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

  // Detect if header should have scrolled background
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Use IntersectionObserver for section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActive(id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -70% 0px", // Adjust this to match your header height
        threshold: 0.1,
      }
    );

    links.forEach((link) => {
      const section = document.getElementById(link.target);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
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
