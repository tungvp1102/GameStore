import React from "react";
import { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import IconColumns from "../../../assets/images/columns.svg";
import IconGrid from "../../../assets/images/grid.svg";
import styled from "@emotion/styled";

export const Outlet = () => {
  const [layout, setLayout] = useState<number>(3);
  return (
    <Box pb={"280px"} sx={{ display: "block" }}>
      <Box>
        <Typography
          variant="h1"
          sx={{
            color: "#fff",
            fontSize: "60px",
            letterSpacing: "1px",
            fontWeight: "700",
            mb: "10px",
          }}
        >
          Trending and interesting
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            fontSize: "16px",
            letterSpacing: "1px",
          }}
        >
          Based on player counts and ratings
        </Typography>
      </Box>

      <Box
        sx={{
          mt: "28px",
          mb: "28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Button
            sx={{
              color: "#fff",
              textTransform: "none",
              backgroundColor: "#262626",
              border: "1px transparent",
              borderRadius: "12px",
              transition: "all 0.3s",
              height: "40px",
              padding: "8px 22px",
              fontSize: "14px",
            }}
          >
            Filter by: None
          </Button>
          <Button
            sx={{
              ml: "10px",
              color: "#fff",
              textTransform: "none",
              backgroundColor: "#262626",
              border: "1px transparent",
              borderRadius: "12px",
              transition: "all 0.3s",
              height: "40px",
              padding: "8px 22px",
              fontSize: "14px",
            }}
          >
            Clear Filter
          </Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h3"
            sx={{
              color: "#696969",
              fontSize: "16px",
            }}
          >
            Display options:
          </Typography>
          <Button onClick={() => setLayout(3)}>
            <Icon src={IconGrid}/>
          </Button>
          <Button onClick={() => setLayout(8)}>
            <Icon src={IconColumns}/>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const Icon = styled("img")({
  width: "48px",
  height: "48px",
  cursor: "pointer",
  transition: "all .2s",
  fill: "#fff",
});
