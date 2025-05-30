import { Container, Grid, Text, Title, Box } from "@mantine/core";
import { motion } from "framer-motion";
import { useEffect } from "react";

const MotionDiv = motion.div;

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
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  return (
    <Box
      id="about"
      pos="relative"
      style={{
        backgroundColor: "#0a0a0a",
        padding: "60px 0",
        overflow: "hidden",
      }}
    >
      <Box
        pos="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        style={{
          backgroundImage: "url('/bg-about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
          zIndex: 0,
        }}
      />

      <MotionDiv
        style={{ position: "relative", zIndex: 1, color: "#fff" }}
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
            <Grid.Col
              span={{ base: 12, md: 5 }}
              style={{ textAlign: "center" }}
            >
              <Box
                component="img"
                src="/hiren_portfolio.jpg"
                alt="profile"
                style={{
                  width: 150,
                  height: 150,
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "4px solid #00e0ff",
                  boxShadow: "0 0 20px rgba(0, 224, 255, 0.4)",
                }}
              />
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
    </Box>
  );
}
