import { useState, useEffect } from "react";
import {
  Container,
  Stack,
  Title,
  Text,
  Button,
  Group,
  ThemeIcon,
  rem,
  Box,
  Flex,
  Image,
} from "@mantine/core";
import { useIntersection } from "@mantine/hooks";
import {
  IconBrandGit,
  IconBrandLinkedin,
  IconBrandReact,
  IconBrandRedux,
  IconBrandTypescript,
  IconCode,
  IconDownload,
} from "@tabler/icons-react";
import classes from "./Hero.module.css";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { ref, entry } = useIntersection({ threshold: 0.2 });

  const phrases = [
    "Senior Frontend Developer",
    "Microfrontend Expert",
    "TypeScript Fan",
    "Clean Code Advocate",
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentPhrase = phrases[currentPhraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
      } else if (isDeleting) {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
      } else {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [typedText, currentPhraseIndex, isDeleting]);

  const isVisible = entry?.isIntersecting;

  return (
    <Box
      ref={ref}
      className={`${classes.heroSection} ${isVisible ? classes.fadeIn : ""}`}
    >
      <Box className={classes.backgroundImage} />
      <Box className={classes.circleBlue} />
      <Box className={classes.circleGreen} />

      <Container size="lg" className={classes.container}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap="xl"
        >
          <Stack gap="xl" maw={600}>
            <Box>
              <Text className={classes.introText}>Hello, I'm</Text>

              <Title
                order={1}
                className={classes.mainTitle}
                size={rem(60)}
                fw={900}
              >
                Hiren Tandel
              </Title>

              <Text className={classes.subText} mt="md">
                Crafting Scalable Frontends with React & Precision
              </Text>

              <Box className={classes.typingBox}>
                <Text className={classes.typedText} fw={700}>
                  {typedText}
                  <span className={classes.blink}>|</span>
                </Text>
              </Box>
            </Box>

            <Group mt="xl">
              <Button
                component="a"
                href="https://drive.google.com/drive/folders/10s5_1OHqvTpgrRnWcC-vwyKavY3J0u6A?authuser=0"
                target="_blank"
                size="lg"
                leftSection={<IconDownload size={18} />}
              >
                Download Resume
              </Button>
              <Button
                component="a"
                href="https://www.linkedin.com/in/hirenkumar-tandel-a41a88129/"
                target="_blank"
                variant="outline"
                size="lg"
                leftSection={<IconBrandLinkedin size={18} />}
              >
                Connect on LinkedIn
              </Button>
            </Group>
          </Stack>

          <Box className={`${classes.heroImageWrapper} ${classes.float}`}>
            <Box className={classes.heroGlow} />
            <Box w={350} h={350} className={classes.heroImage}>
              <Image
                radius="xl"
                src="src/assets/images/hiren_portfolio.jpg"
                alt="Hiren Tandel"
                className={classes.heroImage}
              />
            </Box>
          </Box>
        </Flex>

        <Group justify="center" gap="xl" mt={60}>
          <ThemeIcon
            size={60}
            radius="xl"
            variant="light"
            className={`${classes.techIcon} ${classes["float-4s"]}`}
          >
            <IconBrandReact size={30} />
          </ThemeIcon>
          <ThemeIcon
            size={50}
            radius="xl"
            variant="light"
            className={`${classes.techIcon} ${classes["float-5s"]}`}
          >
            <IconBrandTypescript size={25} />
          </ThemeIcon>
          <ThemeIcon
            size={70}
            radius="xl"
            variant="light"
            className={`${classes.techIcon} ${classes["float-6s"]}`}
          >
            <IconBrandRedux size={35} />
          </ThemeIcon>
          <ThemeIcon
            size={55}
            radius="xl"
            variant="light"
            className={`${classes.techIcon} ${classes["float-4_5s"]}`}
          >
            <IconCode size={28} />
          </ThemeIcon>
          <ThemeIcon
            size={45}
            radius="xl"
            variant="light"
            className={`${classes.techIcon} ${classes["float-5_5s"]}`}
          >
            <IconBrandGit size={22} />
          </ThemeIcon>
        </Group>
      </Container>
    </Box>
  );
}
