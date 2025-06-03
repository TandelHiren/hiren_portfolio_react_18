import { Box, Text, Title, Grid, Center } from "@mantine/core";
import { useEffect } from "react";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const skills = [
  { name: "React", level: 90, icon: "/icons8-react-native.svg" },
  { name: "Angular", level: 80, icon: "/icons8-angular.svg" },
  { name: "Vue", level: 75, icon: "/icons8-vue-js.svg" },
  { name: "Node.js", level: 85, icon: "/nodejs.svg" },
  { name: "MongoDB", level: 70, icon: "/mongodb.svg" },
  { name: "Git", level: 90, icon: "/git.svg" },
  { name: "VS Code", level: 95, icon: "/icons8-vs-code.svg" },
  { name: "Storybook", level: 70, icon: "/icons8-storybook.svg" },
];

export default function Skills() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `@keyframes rotate { to { transform: rotate(360deg); } }`;
    document.head.appendChild(style);

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
      id="skills"
      py={60}
      px={{ base: 20, sm: 30, md: 50, lg: 80 }}
      style={{
        background: "#0a0a0a",
        color: "#fff",
        overflow: "visible", // ✅ Ensure NO scroll inside
      }}
    >
      <Title order={2} ta="center" mb="xl" c="cyan.4">
        My Skills
      </Title>

      <Grid gutter="xl" justify="center">
        {skills.map((skill, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              style={{
                background: "#121212",
                border: "1px solid #00e0ff33",
                borderRadius: "16px",
                boxShadow: "0 4px 16px rgba(0, 224, 255, 0.2)",
                padding: "16px",
              }}
            >
              <Center mb="sm">
                <Box
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    border: "3px solid #00e0ff55",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <motion.img
                    src={skill.icon}
                    alt={skill.name}
                    width={32}
                    height={32}
                    style={{ animation: "rotate 10s linear infinite" }}
                  />
                </Box>
              </Center>
              <Text ta="center" fw={600} fz="lg" mb="xs" c="cyan">
                {skill.name}
              </Text>
              <Text ta="center" c="gray.4">
                Proficiency: {skill.level}%
              </Text>
            </MotionDiv>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
