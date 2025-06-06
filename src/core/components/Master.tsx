import { Outlet } from "react-router-dom";
import { Box } from "@mantine/core";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Master = () => {
  return (
    <Box
      style={{
        height: "100vh",
        overflowX: "hidden", // ✅ allow scroll, prevent side scroll
      }}
    >
      <Header />

      <Box
        component="main"
        style={{
          minHeight: "100vh",
          overflowX: "hidden", // ✅ allow scroll, prevent side scroll
        }}
      >
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};

export default Master;
