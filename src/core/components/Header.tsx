import { useEffect } from "react";
import { Group, Text, ActionIcon, rem, Flex } from "@mantine/core";
import { IconSunMoon } from "@tabler/icons-react";
import { useLocation, NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const links = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
];

export function Header() {
  const location = useLocation();

  const items = links.map((link) => (
    <NavLink
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={location.pathname === link.link || undefined}
    >
      {link.label}
    </NavLink>
  ));

  return (
    <header className={classes.header}>
      <Flex justify="space-between" align="center" w="100%">
        <Text fw={700} size={rem(16)} className={classes.logo} c="white">
          {"</>"} Hiren Tandel
        </Text>

        <Group gap={20} className={classes.nav} visibleFrom="sm">
          {items}
          <ActionIcon variant="default" radius="xl">
            <IconSunMoon size={18} />
          </ActionIcon>
        </Group>
      </Flex>
    </header>
  );
}
