import { useCallback, useMemo } from "react";
import { Box, Text, Container, Paper, Button } from "@mantine/core";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadImageShape } from "tsparticles-shape-image";
import { Typewriter } from "react-simple-typewriter";
import About from "../about/About";
import Experience from "../experience/Experience";
import Skills from "../skills/Skills";

export default function HeroSection() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
    await loadImageShape(engine);
  }, []);

  const MemoizedParticles = useMemo(
    () => (
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          particles: {
            number: {
              value: 16,
              density: { enable: true, area: 800 },
            },
            color: { value: "#CCC" },
            shape: {
              type: ["image", "circle"],
              image: [
                { src: "/icons8-angular.svg", height: 20, width: 23 },
                { src: "/icons8-react-native.svg", height: 20, width: 20 },
                { src: "/icons8-vue-js.svg", height: 20, width: 20 },
                { src: "/icons8-storybook.svg", height: 20, width: 20 },
                { src: "/icons8-vs-code.svg", height: 20, width: 20 },
              ],
            },
            size: {
              value: { min: 10, max: 25 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 10,
                sync: false,
              },
            },
            opacity: {
              value: 0.3,
              random: true,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              outModes: { default: "out" },
            },
            links: { enable: false },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "bubble" },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 100,
                size: 30,
                duration: 2,
                opacity: 0.8,
                speed: 2,
              },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: "none", // 👈 avoids blocking mouse/text
        }}
      />
    ),
    [particlesInit]
  );

  return (
    <>
      <Box
        pos="relative"
        h="100vh"
        w="100%"
        style={{ backgroundColor: "#000", overflow: "hidden" }}
      >
        {MemoizedParticles}

        <Container
          h="100%"
          w="100%"
          pos="relative"
          style={{
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Text fz={48} fw={900} c="white">
            I'm a{" "}
            <span style={{ color: "#00e0ff" }}>
              <Typewriter
                words={[
                  "Web Developer",
                  "Designer",
                  "Creator",
                  "Problem Solver",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </Text>
          {/* Subtitle with background blur to increase visibility */}
          <Paper
            mt="xs"
            px="md"
            py={6}
            radius="md"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(5px)",
              zIndex: 3,
            }}
          >
            <Text fz="lg" c="gray.3">
              Building interactive, scalable frontend applications.
            </Text>
          </Paper>
        </Container>
      </Box>
      <About />
      <Skills />
      <Experience />
    </>
  );
}
