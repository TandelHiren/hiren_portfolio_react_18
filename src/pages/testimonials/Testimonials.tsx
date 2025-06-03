import {
  Box,
  Title,
  Text,
  Avatar,
  Card,
  Group,
  Container,
  SimpleGrid,
  Center,
  type CardProps,
} from "@mantine/core";
import {
  IconQuote,
  IconStar,
  IconStarHalf,
  IconStarOff,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { forwardRef } from "react";

// ✅ Motion-enabled Card using forwardRef to avoid TypeScript errors
const MotionCard = motion(
  forwardRef<HTMLDivElement, CardProps>((props, ref) => (
    <Card ref={ref} {...props} />
  ))
);

const testimonials = [
  {
    quote:
      "Hiren's ability to translate complex requirements into intuitive UI is exceptional. Always delivers clean, scalable code!",
    name: "Kevel Patel",
    role: "Manager",
    company: "Intoxa Lock",
    avatar: "./vishal_patel.svg",
    rating: 5,
  },
  {
    quote:
      "A strong team player with a sharp eye for detail. Hiren significantly improved the performance of our HRMS modules.",
    name: "Vishal Patel",
    role: "Tech Lead",
    company: "Aekatra",
    avatar: "./vishal_patel.svg",
    rating: 3.5,
  },
  {
    quote:
      "From microfrontend architecture to UI polish, Hiren's contribution was vital to our project's success.",
    name: "Khyati Patel",
    role: "Manager",
    company: "National Auto Care",
    avatar: "./khyati_patel.jpg",
    rating: 4,
  },
];

// ⭐ Helper to render stars
const getStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<IconStar key={i} size={18} color="gold" />);
    } else if (rating + 0.5 === i) {
      stars.push(<IconStarHalf key={i} size={18} color="gold" />);
    } else {
      stars.push(<IconStarOff key={i} size={18} color="#666" />);
    }
  }
  return stars;
};

export default function Testimonials() {
  return (
    <Box
      id="testimonials"
      py={60}
      px={{ base: 20, sm: 30, md: 50, lg: 100 }}
      style={{ backgroundColor: "#0a0a0a", color: "#fff" }}
    >
      <Container size="lg">
        <Title order={2} ta="center" mb="xl" c="cyan.4">
          Testimonial
        </Title>
        <Text ta="center" c="gray.4" mb="xl">
          Don't just take our word for it – see what actual users of our service
          have to say about their experience.
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
          {testimonials.map((t, index) => (
            <MotionCard
              key={index}
              shadow="lg"
              radius="md"
              p="xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              style={{
                backgroundColor: "#161616",
                color: "#fff",
                textAlign: "center",
                border: "1px solid #00e0ff33",
                boxShadow: "0 6px 20px rgba(0, 224, 255, 0.12)",
                transition: "all 0.3s ease",
              }}
            >
              <Center mb="sm">
                <IconQuote size={28} color="cyan" />
              </Center>
              <Text fz="sm" c="gray.3" mb="lg" style={{ minHeight: 100 }}>
                “{t.quote}”
              </Text>

              <Center mb="xs" style={{ gap: 4 }}>
                {getStars(t.rating)}
              </Center>

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
            </MotionCard>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
