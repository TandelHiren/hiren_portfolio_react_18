// src/core/components/Master.tsx
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Master = () => {
  return (
    <>
      <Header />

      <main>
        {/* <Container> */}
        <Outlet />
        {/* </Container> */}
      </main>

      <Footer />
    </>
  );
};

export default Master;
