import { Box } from "@mui/material";
import { Outlet } from "../../components/Layout/Outlet/Outlet";
import SideBar from "../../components/Layout/SideBar/SideBar";

function Store() {
  return (
    <Box
      sx={{ padding: "110px 40px 0", backgroundColor: "#000", display: 'flex', }}
    >
      <SideBar />
      <Outlet />
    </Box>
  );
}

export default Store;
