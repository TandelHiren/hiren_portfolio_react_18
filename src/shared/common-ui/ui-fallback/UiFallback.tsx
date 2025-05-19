import { Player } from "@lottiefiles/react-lottie-player";
import { Box, Container, SimpleGrid, Stack, Text, Title } from "@mantine/core";

import classes from "./UiFallback.module.css";
import { useColorTheme } from "./hooks/useColorTheme.hook";

export function UiFallback({
  title,
  description,
  imageUrl,
  goBack = true,
}: {
  title: string;
  description: string;
  imageUrl: string;
  goBack?: boolean;
}) {
  const { setThemeColor } = useColorTheme();
  return (
    <Container h="100%" size="xl">
      <Box className={classes.root}>
        <SimpleGrid
          className={classes.hero}
          bg={setThemeColor("dark.7", "white")}
          style={{
            boxShadow: `${setThemeColor(
              "0px 0px 2px var(--mantine-color-gray-6)",
              "none"
            )}`,
          }}
          spacing={80}
          cols={2}
        >
          <Stack>
            <Title className={classes.title}>{title}</Title>
            <Text c="dimmed" size="lg">
              {description}
            </Text>
            {/* {goBack && (
              <Button
                variant="outline"
                size="md"
                mt="xl"
                className={classes.control}
                onClick={() => {
                }}
              >
                Try Re-Login
              </Button>
            )} */}
          </Stack>
          <Player style={{ width: "100%" }} autoplay loop src={imageUrl} />
        </SimpleGrid>
      </Box>
    </Container>
  );
}

export default UiFallback;
