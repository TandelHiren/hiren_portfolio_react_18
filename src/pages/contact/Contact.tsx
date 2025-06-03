import {
  Box,
  Container,
  Title,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: (value) => (value.length < 2 ? "Name is too short" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      message: (value) => (value.length < 10 ? "Please enter a message" : null),
    },
  });

  return (
    <Box
      id="contact"
      ref={ref}
      py={60}
      px={{ base: 20, sm: 30, md: 50, lg: 100 }}
      style={{ backgroundColor: "#0a0a0a", color: "#fff" }}
    >
      <Container size="sm">
        <Title
          order={2}
          ta="center"
          mb="sm"
          style={{
            background: "linear-gradient(to right, #6a11cb, #00e0ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Get In Touch
        </Title>
        <Text ta="center" c="gray.4" mb="xl">
          Have a question or want to work together? Drop me a message!
        </Text>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <form
            onSubmit={form.onSubmit((values) => {
              console.log("Form submitted:", values);
              // Optionally integrate with EmailJS, Formspree, etc.
            })}
          >
            <TextInput
              label="Your Name"
              placeholder="Hiren Tandel"
              {...form.getInputProps("name")}
              mb="md"
              withAsterisk
              styles={{ input: { backgroundColor: "#161616", color: "#fff" } }}
            />

            <TextInput
              label="Email"
              placeholder="you@example.com"
              {...form.getInputProps("email")}
              mb="md"
              withAsterisk
              styles={{ input: { backgroundColor: "#161616", color: "#fff" } }}
            />

            <Textarea
              label="Message"
              placeholder="Your message here..."
              autosize
              minRows={4}
              maxRows={10}
              {...form.getInputProps("message")}
              withAsterisk
              mb="md"
              styles={{
                input: {
                  backgroundColor: "#161616",
                  color: "#fff",
                },
              }}
            />

            <Group justify="center" mt="xl">
              <Button
                type="submit"
                variant="gradient"
                gradient={{ from: "#00e0ff", to: "#6a11cb" }}
              >
                Send Message
              </Button>
            </Group>
          </form>
        </motion.div>
      </Container>
    </Box>
  );
}
