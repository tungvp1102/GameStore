import { AppBar, Button, Box, Toolbar, Input } from "@mui/material";
import UserCart from "../UserCart/UserCart";
import Game from "../../../assets/images/game.svg";
import Search from "../../../assets/images/search.svg";
import styled from "@emotion/styled";
import { Link } from "react-router-dom"

function Header() {
  return (
    <AppBar sx={{ backgroundColor: "#000", }}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Box sx={{gap: "30px",}}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button sx={{ textTransform: "none", color: "#fff", gap: "18px" }}>
              <Icon alt="icon" src={Game} />
              <H3Route>Game Store</H3Route>
            </Button>
          </Link>
        </Box>
        <Box>
          <Input
            sx={{
              width: "470px",
              height: "100%",
              borderRadius: "8px",
              backgroundColor: "#262626",
              border: "1px transparent",
              outline: "none",
              paddingLeft: "18px",
              transition: "all .3s",
              color: "#fff",
            }}
            placeholder="Search games..."
          />
          <Button type="submit">
            <Icon src={Search} alt="icon" />
          </Button>
        </Box>
        <UserCart />
      </Toolbar>
    </AppBar>
  );
}

const Icon = styled("img")({
  width: "24px",
  height: "27px",
});

const H3Route = styled("h3")({
  color: "#fff",
  fontSize: "18px",
  whiteSpace: "nowrap",
});

export default Header;
