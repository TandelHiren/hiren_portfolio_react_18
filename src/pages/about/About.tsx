import { Container, Grid, Text, Title, Box } from "@mantine/core";
import { motion } from "framer-motion";
import { useEffect } from "react";

const MotionDiv = motion.div;
const MotionImg = motion.img;

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function About() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes rotateOrbit {
        100% {
          transform: rotate(360deg);
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const rotatingIcons = [
    { src: "/icons8-react-native.svg", angle: 0 },
    { src: "/icons8-angular.svg", angle: 72 },
    { src: "/icons8-vue-js.svg", angle: 144 },
    { src: "/icons8-storybook.svg", angle: 216 },
    { src: "/icons8-vs-code.svg", angle: 288 },
  ];

  return (
    <MotionDiv
      id="about"
      style={{
        backgroundColor: "#0a0a0a",
        color: "#fff",
        padding: "60px 0",
      }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Container size="md">
        <Title order={2} mb="lg" ta="center" c="cyan.4">
          About Me
        </Title>

        <Grid align="center" gutter="xl">
          <Grid.Col span={{ base: 12, md: 5 }} style={{ textAlign: "center" }}>
            {/* 🔁 Orbiting and rotating icons around profile image */}
            <Box pos="relative" w={250} h={250} mx="auto">
              {/* Orbit container rotating around center */}
              <Box
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  animation: "rotateOrbit 12s linear infinite",
                }}
              >
                {rotatingIcons.map((icon, i) => {
                  const radius = 100;
                  const radians = (icon.angle * Math.PI) / 180;
                  const x = 125 + radius * Math.cos(radians) - 16;
                  const y = 125 + radius * Math.sin(radians) - 16;

                  return (
                    <MotionImg
                      key={i}
                      src={icon.src}
                      alt={`icon-${i}`}
                      width={32}
                      height={32}
                      style={{
                        position: "absolute",
                        top: `${y}px`,
                        left: `${x}px`,
                      }}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "linear",
                      }}
                    />
                  );
                })}
              </Box>

              {/* Profile Image in center */}
              <Box
                component="img"
                src="/hiren_portfolio.jpg"
                alt="profile"
                style={{
                  width: 120,
                  height: 120,
                  objectFit: "cover",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  border: "4px solid #00e0ff",
                }}
              />
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 7 }}>
            <Text fz="md" c="gray.4" mb="md">
              I'm a passionate{" "}
              <Text span c="cyan.4">
                Frontend Developer
              </Text>{" "}
              with experience in building interactive and scalable web
              applications. I specialize in crafting beautiful UIs with React,
              and bring designs to life using modern tools and clean code.
            </Text>
            <Text fz="md" c="gray.4">
              I enjoy learning new technologies, contributing to team success,
              and solving real-world problems through code.
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </MotionDiv>
  );
}
