import { Box } from "@mui/material";
import SideBar from "../../components/Layout/SideBar/SideBar";
import { Outlet } from "../../components/Layout/Outlet/Outlet";
import { useEffect,useState } from "react";
import React from "react";
import axios from "axios";
import { ProductType } from "../../@type/product";

// interface Props {
//   product:an
// }
function Browse() {
  
  // const [data ,setData] = useState<ProductType[]>([])
  // useEffect(()=>{
  //     const getData = async() =>{
  //       const res = await axios.get("https://6322fc6aa624bced30839d40.mockapi.io/products")
  //       setData(res.data)
  //     }

  //    getData()
  // },[])
  
  return ( 
    
    <Box sx={{ padding: "110px 40px 0", backgroundColor: "#000", display: 'flex', }}>
      <SideBar />
      <Outlet />
    </Box>
  );
}

export default Browse;
