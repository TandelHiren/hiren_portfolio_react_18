import { Flex, Group, rem, Text } from "@mantine/core";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./Header.module.css";

// const links = [
//   { link: "/", label: "Home" },
//   { link: "/about#about", label: "About" },
//   { link: "/skills#skills", label: "Skill" },
// ];

export function Header() {
  const location = useLocation();

  // const items = links.map((link) => {
  //   const [path] = link.link.split("#");

  //   return (
  //     <NavLink
  //       key={link.label}
  //       to={link.link}
  //       className={classes.link}
  //       data-active={location.pathname === path || undefined}
  //     >
  //       {link.label}
  //     </NavLink>
  //   );
  // });

  return (
    <header className={classes.header}>
      <Flex justify="space-between" align="center" w="100%">
        <Text fw={700} size={rem(16)} className={classes.logo} c="white">
          {"</>"} Hiren Tandel
        </Text>

        {/* <Group gap={20} className={classes.nav} visibleFrom="sm">
          {items}
        </Group> */}
      </Flex>
    </header>
  );
}
