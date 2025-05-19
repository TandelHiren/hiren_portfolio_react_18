import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <ModalsProvider>
      <Notifications position="top-right" zIndex={1000} />
      <Outlet />
    </ModalsProvider>
  );
};

export default App;
