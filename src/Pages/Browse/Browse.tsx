import { Box } from "@mui/material";
import SideBar from "../../components/Layout/SideBar/SideBar";
import { Outlet } from "../../components/Layout/Outlet/Outlet";

function Browse() {
  return ( 
    <Box sx={{ display: 'flex'}}>
      <SideBar />
      <Outlet />
    </Box>
  );
}

export default Browse;
