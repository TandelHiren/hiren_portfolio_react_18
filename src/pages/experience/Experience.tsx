import { Box, Title, Text, Container, Grid } from "@mantine/core";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    year: "Dec 2021 — Present",
    description:
      "Associate L2 at 1Rivet, contributing to scalable web solutions using React.js, Mantine, and other frontend technologies. Explored and implemented backend integration with Node.js. Integrated and managed access control using Keycloak IAM. Provided architectural solutions and contributed to application development using Vue.js. Explored Storybook for UI component isolation and documentation, and created a functional POC for team onboarding.",
    location: "Location: Valsad, Gujarat, India",
  },
  {
    year: "Feb 2018 — Dec 2021",
    description:
      "Associate L1 at 1Rivet, working on CSS, JavaScript, and enhancing frontend architecture for enterprise apps.",
    location: "Location: Valsad, Gujarat, India",
  },
  {
    year: "Sep 2017 — Feb 2018",
    description:
      "Internship Trainee at 1Rivet, developed projects using HTML and CSS while gaining hands-on frontend development experience.",
    location: "Location: Valsad, Gujarat, India",
  },
];

function TimelineItem({ exp, index }: any) {
  const isRight = index % 2 === 0;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        // marginBottom: 80,
        display: "flex",
        justifyContent: isRight ? "flex-end" : "flex-start",
      }}
    >
      <Grid style={{ width: "100%" }}>
        <Grid.Col
          span={{ base: 12, md: 6 }}
          offset={{ md: isRight ? 6 : 0 }}
          style={{
            display: "flex",
            justifyContent: isRight ? "flex-start" : "flex-end",
          }}
        >
          <Box
            style={{
              textAlign: isRight ? "left" : "right",
              maxWidth: 420,
              paddingInlineStart: isRight ? 5 : 0,
              paddingInlineEnd: isRight ? 0 : 5,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Text fw={700} fz="lg" c="cyan" mb={8}>
                {exp.year}
              </Text>
              <Text fz="sm" c="gray.4">
                {exp.description}
              </Text>
              <Text fz="sm" c="gray.4" mt={4}>
                {exp.location}
              </Text>
            </motion.div>
          </Box>
        </Grid.Col>
      </Grid>

      {/* Timeline circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          top: 14,
          left: "calc(50% - 10px)",
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "#0a0a0a",
          border: "4px solid #00e0ff",
          zIndex: 2,
        }}
      />
    </div>
  );
}

export default function Experience() {
  return (
    <Box
      id="experience"
      py={60}
      px={{ base: 20, sm: 30, md: 50, lg: 100 }}
      style={{ backgroundColor: "#0a0a0a", color: "#fff" }}
    >
      <Container size="lg">
        <Title order={2} ta="center" mb="xl" c="cyan.4">
          Work Experience
        </Title>

        <Box pos="relative" style={{ marginTop: 60 }}>
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: 2,
              backgroundColor: "#00e0ff",
              zIndex: 1,
            }}
          />

          {experiences.map((exp, index) => (
            <TimelineItem key={index} exp={exp} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
