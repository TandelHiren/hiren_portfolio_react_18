import { useState, useEffect } from "react";
import {
  Container,
  Title,
  Text,
  Button,
  rem,
  Box,
  Image,
  Stack,
} from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import { useIntersection } from "@mantine/hooks";
import classes from "./Hero.module.css";
import { notifications } from "@mantine/notifications";

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

  const handleDownload = () => {
    notifications.show({
      title: "Thanks!",
      message: "Your resume is downloading...",
      color: "teal",
    });
  };

  return (
    <Box
      ref={ref}
      className={`${classes.heroSection} ${isVisible ? classes.fadeIn : ""}`}
    >
      <Box className={classes.backgroundImage} />

      <Container size="lg" className={classes.container}>
        <Box className={classes.centerContent}>
          <Box className={classes.imageCircleWrapper}>
            <Box className={classes.imageCircle}>
              <Image
                src="src/assets/images/hiren_portfolio.jpg"
                alt="Hiren Tandel"
                className={classes.heroImage}
                radius="xl"
              />
            </Box>

            <svg viewBox="0 0 200 200" className={classes.rotatingRing}>
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100
         m -90, 0
         a 90,90 0 1,1 180,0
         a 90,90 0 1,1 -180,0"
                />
              </defs>
              <text>
                <textPath href="#circlePath" startOffset="0%">
                  PROFESSIONAL WEB DEVELOPER • HIREN TANDEL • 7+ YEARS
                  EXPERIENCE •
                </textPath>
              </text>
            </svg>
          </Box>

          <Stack align="center" gap="md" mt="xl">
            <Title className={classes.mainTitle} order={1} size={rem(42)}>
              I'm Hiren Tandel
            </Title>

            <Box className={classes.typingBox}>
              <Text className={classes.typedText} c="#00e6e6" size="xl">
                {typedText}
                <span className={classes.blink}>|</span>
              </Text>
            </Box>

            <Button
              component="a"
              href="./Hiren_Tandel_Resume.pdf"
              download
              size="md"
              className={classes.hireButton}
              leftSection={<IconDownload size={18} />}
              onClick={handleDownload}
            >
              Hire Me
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
