import {
  Box,
  Title,
  Text,
  Container,
  Card,
  Anchor,
  Group,
  SimpleGrid,
  Avatar,
  Divider,
  ActionIcon,
  Tooltip,
  Badge,
  type CardProps,
} from "@mantine/core";
import { IconExternalLink, IconStar, IconEye } from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { useRef, forwardRef } from "react";

// ✅ Type-safe MotionCard using forwardRef
const MotionCard = motion(
  forwardRef<HTMLDivElement, CardProps>((props, ref) => (
    <Card ref={ref} {...props} />
  ))
);

const projects = [
  {
    title: "IAM (Identity and Access Management)",
    author: "Hiren Tandel",
    username: "@hiren1217",
    avatar: "/avatars/hiren.jpg",
    description:
      "Developed a custom IAM system with tenant-based role & permission control, secure login, modular architecture, and Mantine v7 UI.",
    badges: ["ReactJS", "RTK", "Mantine v7"],
    link: "https://github.com/your-github/iam-project",
  },
  {
    title: "Aekatra",
    author: "Hiren Tandel",
    username: "@hiren1217",
    avatar: "/avatars/hiren.jpg",
    description:
      "Built core HRMS modules including payroll, timesheets, and leave using Nx microfrontend architecture with RTK Query.",
    badges: ["ReactJS", "TypeScript", "RTK"],
    link: "https://github.com/your-github/aekatra",
  },
  {
    title: "Spotwash",
    author: "Hiren Tandel",
    username: "@hiren1217",
    avatar: "/avatars/hiren.jpg",
    description:
      "Car wash app for zone-based booking and real-time scheduling. Built responsive UI and booking flows.",
    badges: ["HTML", "CSS", "Angular"],
    link: "https://github.com/your-github/spotwash",
  },
  {
    title: "Easy Enroll",
    author: "Hiren Tandel",
    username: "@hiren1217",
    avatar: "/avatars/hiren.jpg",
    description:
      "Appointment system for DUI programs with vehicle/user validation, real-time scheduling, and guided UI flow using Mantine v5.",
    badges: ["ReactJS", "Mantine v5"],
    link: "https://github.com/your-github/easy-enroll",
  },
  {
    title: "1Automation",
    author: "Hiren Tandel",
    username: "@hiren1217",
    avatar: "/avatars/hiren.jpg",
    description:
      "Built reusable automation scripts for multiple projects. Improved QA coverage and reliability.",
    badges: ["HTML", "SCSS", "Angular"],
    link: "",
  },
  {
    title: "Intoxalock",
    author: "Hiren Tandel",
    username: "@hiren1217",
    avatar: "/avatars/hiren.jpg",
    description:
      "DUI device booking app with confirmations, scheduling, and location integration.",
    badges: ["HTML", "SASS", "Angular"],
    link: "https://www.intoxalock.com/",
  },
  {
    title: "FHLB NY",
    author: "Hiren Tandel",
    username: "@hiren1217",
    avatar: "/avatars/hiren.jpg",
    description:
      "Migrated Credit Banking SPA from Power Builder with enhanced team efficiency through modern UI.",
    badges: ["HTML", "SCSS", "Angular"],
    link: "https://www.fhlbny.com/",
  },
  {
    title: "Republic of Congo (ROC)",
    author: "Hiren Tandel",
    username: "@hiren1217",
    avatar: "/avatars/hiren.jpg",
    description:
      "Built a VAT taxation system for the DRC government using Angular monorepo to streamline tax operations.",
    badges: ["HTML", "SCSS", "Angular"],
    link: "",
  },
  {
    title: "Proposal Builder (NAC)",
    author: "Hiren Tandel",
    username: "@hiren1217",
    avatar: "/avatars/hiren.jpg",
    description:
      "Generated dynamic proposal PDFs based on client input and product configuration in real time.",
    badges: ["HTML", "SCSS", "Angular"],
    link: "https://github.com/your-github/proposal-builder",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Box
      id="projects"
      ref={ref}
      py={60}
      px={{ base: 20, sm: 30, md: 50, lg: 100 }}
      style={{ backgroundColor: "#0a0a0a", color: "#fff" }}
    >
      <Container size="lg">
        <Title order={2} ta="center" mb="xl" c="cyan.4">
          My Projects
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
          {projects.map((project, index) => (
            <MotionCard
              key={index}
              shadow="lg"
              radius="md"
              padding="lg"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              style={{
                backgroundColor: "#161616",
                color: "#fff",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 4px 16px rgba(0, 224, 255, 0.2)",
              }}
            >
              <Box>
                <Text fw={700} fz="md" mb="xs" style={{ color: "#00e0ff" }}>
                  {project.title}
                </Text>
                <Group gap="xs" mb="sm">
                  <Avatar src={project.avatar} size="sm" radius="xl" />
                  <Box>
                    <Text fw={600} fz="sm">
                      {project.author}
                    </Text>
                    <Text fz="xs" c="gray.5">
                      {project.username}
                    </Text>
                  </Box>
                </Group>
                <Tooltip label={project.description} multiline>
                  <Text
                    fz="sm"
                    mb="sm"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.description}
                  </Text>
                </Tooltip>
                <Group gap={4} mb="sm" wrap="wrap">
                  {project.badges.map((tech, i) => (
                    <Badge key={i} size="xs" variant="light" color="cyan">
                      {tech}
                    </Badge>
                  ))}
                </Group>
              </Box>

              <Divider my="sm" />
              <Group justify="space-between">
                <Group gap="xs">
                  <Tooltip label="Star this project">
                    <ActionIcon variant="subtle" color="gray">
                      <IconStar size={16} />
                    </ActionIcon>
                  </Tooltip>
                  <Tooltip label="Views">
                    <ActionIcon variant="subtle" color="gray">
                      <IconEye size={16} />
                    </ActionIcon>
                  </Tooltip>
                </Group>
                <Anchor
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  c="cyan"
                  fz="sm"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  View <IconExternalLink size={14} />
                </Anchor>
              </Group>
            </MotionCard>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
