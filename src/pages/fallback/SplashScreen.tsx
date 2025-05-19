import { Player } from '@lottiefiles/react-lottie-player';
import { Box, Container, Flex, Paper } from '@mantine/core';

/**
 * Component: Splash screen loader
 * Visible when the app booted and loading essential files
 * @returns JSX.Element
 */
function SplashScreen() {
  return (
    <Container fluid display="flex" w="100%" h="100%">
      <Paper flex={1} display="flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Flex align="center" justify="center">
          <Box h={260} w={260} style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Player src="/assets/images/lottiefiles/loader-shield.json" autoplay loop />
          </Box>
        </Flex>
      </Paper>
    </Container>
  );
}

export default SplashScreen;
