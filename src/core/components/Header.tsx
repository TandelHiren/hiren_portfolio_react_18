import { useState } from "react";
import { Burger, Container, Group, Text, ActionIcon, rem } from "@mantine/core";
import { IconSunMoon } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";

const links = [
  { link: "#home", label: "Home" },
  { link: "#about", label: "About" },
  { link: "#tech", label: "Tech Stack" },
  { link: "#experience", label: "Experience" },
  { link: "#education", label: "Education" },
  { link: "#projects", label: "Projects" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <Group gap="xs" justify="flex-start">
          <Text fw={700} size={rem(16)} className={classes.logo}>
            {"</>"} Hiren Tandel
          </Text>
        </Group>

        <Group gap={20} className={classes.nav} visibleFrom="sm">
          {items}
        </Group>

        <Group gap="sm">
          <ActionIcon variant="filled" radius="xl" color="primary">
            <IconSunMoon size={18} />
          </ActionIcon>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </Container>
    </header>
  );
}
