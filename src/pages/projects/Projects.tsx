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
} from "@mantine/core";
import { IconExternalLink, IconStar, IconEye } from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "IAM (Identity and Access Management)",
    author: "Hiren Tandel",
    username: "@hiren1217",
    avatar: "/avatars/hiren.jpg",
    description:
      "Developed a custom Identity and Access Management system enabling user authentication, tenant-specific role and permission management, and secure token-based access control. Utilized domain-driven strategy to structure application logic around core business domains such as users, roles, clients, and permissions for better scalability and maintainability. Implemented secure login flows, session handling, and modular role-based access control using RTK for predictable and centralized state management. Designed intuitive, accessible, and responsive UIs using Mantine v7, empowering admins to manage identity settings with ease. Delivered a scalable and secure access management solution tailored for enterprise-grade applications.",
    badges: ["ReactJS", "RTK", "Mantine v7"],
    link: "https://github.com/your-github/iam-project",
  },
  {
    title: "Aekatra",
    author: "Hiren Tandel",
    username: "@hiren1217",
    avatar: "/avatars/hiren.jpg",
    description:
      "Developed and maintained key modules of an HRMS product, including project management, payroll, timesheet, and leave management. Implemented microfrontend architecture using Nx with ReactJS and integrated IAM-based authentication and role management. Enhanced application performance and modularity by optimizing state management with RTK Query and code-splitting. Collaborated closely with cross-functional teams to ensure scalable, secure, and user-friendly solutions.",
    badges: ["ReactJS", "TypeScript", "RTK"],
    link: "https://github.com/your-github/aekatra",
  },
  {
    title: "Spotwash",
    author: "Hiren Tandel",
    username: "@hiren1217",
    avatar: "/avatars/hiren.jpg",
    description:
      "Car wash appointment system enabling users to easily book services based on availability and zone selection. Implemented interactive UI components for real-time slot selection and dynamic zone-based service filtering. Ensured responsive design and smooth navigation to enhance customer experience across devices. Optimized booking workflows and integrated appointment management features to streamline operations for service providers.",
    badges: ["HTML", "CSS", "Angular"],
    link: "https://github.com/your-github/spotwash",
  },
  {
    title: "Easy Enroll",
    author: "Hiren Tandel",
    username: "@hiren1217",
    avatar: "/avatars/hiren.jpg",
    description:
      "Developed a user-centric appointment system for DUI-affected individuals to enroll in car device installation programs. Captured and validated initial requirements related to the vehicle and user eligibility before scheduling an appointment. Designed a step-by-step guided UI using Mantine v5. Integrated real-time appointment scheduling, notifications, and session handling.",
    badges: ["ReactJS", "Mantine v5"],
    link: "https://github.com/your-github/easy-enroll",
  },
  {
    title: "1Automation",
    author: "Hiren Tandel",
    username: "@hiren1217",
    avatar: "/avatars/hiren.jpg",
    description:
      "Automated the testing process by generating reusable scripts for multiple projects. Streamlined QA workflows and improved testing coverage.",
    badges: ["HTML", "SCSS", "Angular"],
    link: "https://github.com/your-github/1automation",
  },
  {
    title: "Intoxalock",
    author: "Hiren Tandel",
    username: "@hiren1217",
    avatar: "/avatars/hiren.jpg",
    description:
      "Developed a web app to allow users to book appointments for DUI device installations. Integrated real-time confirmations, scheduling, and location mapping.",
    badges: ["HTML", "SASS", "Angular"],
    link: "https://github.com/your-github/intoxalock",
  },
  {
    title: "FHLB NY",
    author: "Hiren Tandel",
    username: "@hiren1217",
    avatar: "/avatars/hiren.jpg",
    description:
      "Migrated Credit Banking application from Power Builder to modern SPA. Improved internal team productivity through efficient UI design.",
    badges: ["HTML", "SCSS", "Angular"],
    link: "https://github.com/your-github/fhlb",
  },
  {
    title: "Republic of Congo (ROC)",
    author: "Hiren Tandel",
    username: "@hiren1217",
    avatar: "/avatars/hiren.jpg",
    description:
      "Developed a VAT taxation system using Angular workspaces and monorepo structure. Boosted the DRC government's tax collection capabilities.",
    badges: ["HTML", "SCSS", "Angular"],
    link: "https://github.com/your-github/roc",
  },
  {
    title: "Proposal Builder for National Autocare",
    author: "Hiren Tandel",
    username: "@hiren1217",
    avatar: "/avatars/hiren.jpg",
    description:
      "Enabled agents to generate dynamic, client-specific proposal booklets. Integrated real-time product and pricing data.",
    badges: ["HTML", "SCSS", "Angular"],
    link: "https://github.com/your-github/proposal-builder",
  },
  {
    title: "National Auto Care",
    author: "Hiren Tandel",
    username: "@hiren1217",
    avatar: "/avatars/hiren.jpg",
    description:
      "Designed and built the NAC website and multiple acquisition landing pages using Webflow.",
    badges: ["Webflow", "CSS", "NoCode API"],
    link: "https://github.com/your-github/nac",
  },
  {
    title: "Product Configurator",
    author: "Hiren Tandel",
    username: "@hiren1217",
    avatar: "/avatars/hiren.jpg",
    description:
      "Created an admin tool to manage product configurations, mappings, and discount codes. Simplified data management for coverage planning.",
    badges: ["HTML", "SCSS", "Vue.js"],
    link: "https://github.com/your-github/product-configurator",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Box
      id="projects"
      ref={ref}
      //   py={60}
      //   px={{ base: 20, sm: 30, md: 50, lg: 100 }}
      style={{ backgroundColor: "#0a0a0a", color: "#fff" }}
    >
      <Container size="lg">
        <Title order={2} ta="center" mb="xl" c="cyan.4">
          My Projects
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card
                shadow="lg"
                radius="md"
                padding="lg"
                style={{
                  backgroundColor: "#161616",
                  color: "#fff",
                  height: 340,
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
                  <Group gap={4} mb="sm">
                    {project.badges.map((tech, i) => (
                      <Badge key={i} size="xs" variant="light" color="cyan">
                        {tech}
                      </Badge>
                    ))}
                  </Group>
                </Box>
                <Divider my="sm" />
                <Group justify="apart">
                  <Group gap="xs">
                    <Tooltip label="Star">
                      <ActionIcon variant="subtle" color="gray">
                        <IconStar size={16} />
                      </ActionIcon>
                    </Tooltip>
                    <Tooltip label="View">
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
                    style={{ display: "flex", alignItems: "center", gap: 4 }}
                  >
                    View <IconExternalLink size={14} />
                  </Anchor>
                </Group>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
