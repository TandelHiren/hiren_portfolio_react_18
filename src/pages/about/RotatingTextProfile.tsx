import { Box } from "@mantine/core";
import { useEffect } from "react";

export default function RotatingIconProfile() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes rotateIcons {
        100% {
          transform: rotate(360deg);
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <Box pos="relative" w={250} h={250} mx="auto">
      {/* Circular rotating icon container */}
      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "250px",
          height: "250px",
          animation: "rotateIcons 12s linear infinite",
        }}
      >
        {[
          { src: "/icons8-react-native.svg", angle: 0 },
          { src: "/icons8-angular.svg", angle: 72 },
          { src: "/icons8-vue-js.svg", angle: 144 },
          { src: "/icons8-storybook.svg", angle: 216 },
          { src: "/icons8-vs-code.svg", angle: 288 },
        ].map((icon, i) => {
          const radius = 100;
          const radians = (icon.angle * Math.PI) / 180;
          const x = 125 + radius * Math.cos(radians) - 16;
          const y = 125 + radius * Math.sin(radians) - 16;

          return (
            <img
              key={i}
              src={icon.src}
              alt={`icon-${i}`}
              width={32}
              height={32}
              style={{
                position: "absolute",
                top: `${y}px`,
                left: `${x}px`,
              }}
            />
          );
        })}
      </Box>

      {/* Profile Image Centered */}
      <Box
        component="img"
        src="/hiren_portfolio.jpg"
        alt="profile"
        style={{
          width: 140,
          height: 140,
          objectFit: "cover",
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "4px solid #00e0ff",
        }}
      />
    </Box>
  );
}
