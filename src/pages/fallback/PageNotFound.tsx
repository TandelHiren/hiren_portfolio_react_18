import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconRotateClockwise } from "@tabler/icons-react";
import { Link } from "react-router-dom";

/**
 * Component: Page not found Ui
 * @returns React.ReactNode
 */
function PageNotFound() {
  return (
    <Container
      p="md"
      fluid
      display="flex"
      w="100%"
      style={{ textAlign: "center" }}
    >
      <Paper
        flex={1}
        display="flex"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Flex align="center" justify="center">
          <Stack gap="lg" align="center" pos="relative">
            <Box h={160}>
              <Image
                fit="contain"
                h={160}
                w="auto"
                src="/assets/images/fallback-shield.svg"
                alt="shield"
              />
            </Box>
            <Title size={96} c="dark" fw={300} order={1} bottom={-100}>
              404
            </Title>
            <Title size="38px" fw="400" lh="48px" c="dimmed" order={2}>
              We Can’t Find the Page You’re Looking For.
            </Title>
            <Text size="16px" fw="400" lh="30px" c="dimmed" w={600}>
              The page may have been moved or doesn’t exist anymore. Please
              return to our homepage or use the search to find what you need.
            </Text>
            <Button
              variant="outline"
              styles={{ root: { borderColor: "var(--mantine-color-gray-2)" } }}
              color="dark"
              component={Link}
              to="/"
              leftSection={<IconRotateClockwise />}
            >
              Reload page
            </Button>
          </Stack>
        </Flex>
      </Paper>
    </Container>
  );
}

export default PageNotFound;
