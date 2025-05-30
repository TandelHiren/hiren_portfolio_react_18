import {
  Box,
  Title,
  Text,
  Avatar,
  Card,
  Group,
  Container,
  Center,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconQuote } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "Hiren's ability to translate complex requirements into intuitive UI is exceptional. Always delivers clean, scalable code!",
    name: "Kevel Patel",
    role: "Manager",
    company: "Intoxa Lock",
    avatar: "./vishal_patel.svg",
  },
  {
    quote:
      "A strong team player with a sharp eye for detail. Hiren significantly improved the performance of our HRMS modules.",
    name: "Vishal Patel",
    role: "Tech Lead",
    company: "Aekatra",
    avatar: "./vishal_patel.svg",
  },
  {
    quote:
      "From microfrontend architecture to UI polish, Hiren's contribution was vital to our project's success.",
    name: "Khyati Patel",
    role: "Manager",
    company: "National Auto Care",
    avatar: "./khyati_patel.jpg",
  },
];

export default function Testimonials() {
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  return (
    <Box
      id="testimonials"
      py={60}
      px={{ base: 20, sm: 30, md: 50, lg: 100 }}
      style={{ backgroundColor: "#0a0a0a", color: "#fff" }}
    >
      <Container size="md">
        <Title order={2} ta="center" mb="xl" c="cyan.4">
          Testimonials
        </Title>

        <Carousel
          withIndicators
          height="auto"
          slideSize="100%"
          align="center"
          loop
          plugins={[autoplay.current]}
          styles={{
            indicator: {
              backgroundColor: "#555",
              "&[data-active]": { backgroundColor: "cyan" },
            },
          }}
        >
          {testimonials.map((t, index) => (
            <Carousel.Slide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  shadow="xl"
                  radius="md"
                  p="xl"
                  style={{
                    backgroundColor: "#161616",
                    color: "#fff",
                    minHeight: 320,
                    maxWidth: 500,
                    width: "100%",
                    textAlign: "center",
                    boxShadow: "0 8px 24px rgba(0, 224, 255, 0.15)",
                  }}
                >
                  <Center mb="sm">
                    <IconQuote size={32} color="cyan" />
                  </Center>
                  <Text fz="sm" c="gray.3" mb="lg">
                    "{t.quote}"
                  </Text>
                  <Group justify="center" mt="md">
                    <Avatar src={t.avatar} radius="xl" size="md" />
                    <Box>
                      <Text fw={600} fz="sm">
                        {t.name}
                      </Text>
                      <Text fz="xs" c="gray.5">
                        {t.role}, {t.company}
                      </Text>
                    </Box>
                  </Group>
                </Card>
              </motion.div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}
