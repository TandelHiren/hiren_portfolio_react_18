import { ActionIcon, Tooltip, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

const ThemeToggler = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Tooltip
      label={`Change to ${colorScheme === "light" ? "dark" : "light"} mode`}
      transitionProps={{ transition: "pop", duration: 200 }}
    >
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        variant="default"
        aria-label="Toggle color scheme"
      >
        {colorScheme === "light" ? (
          <IconMoon size={18} />
        ) : (
          <IconSun size={18} />
        )}
      </ActionIcon>
    </Tooltip>
  );
};

export default ThemeToggler;
