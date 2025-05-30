import { Container, Text, Group } from "@mantine/core";
import classes from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <Group justify="center" gap="xs">
          <Text c="dimmed" size="sm" ta="center">
            © {new Date().getFullYear()} All rights reserved.
          </Text>
        </Group>
      </Container>
    </footer>
  );
}
