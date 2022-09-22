import Githubcat from "../../../assets/images/githubcat.svg";
import Cart from "../../../assets/images/cart.svg";
import { Button, Box, styled } from "@mui/material";
import { Link } from "react-router-dom"

function UserCart() {
  return (
      <Box>
        <Link to="/log-in" style={{textDecoration: 'none'}}>
          <Button
            sx={{
              textTransform: "none",
              color: "#fff",
              gap: "18px",
              marginLeft: "50px",
            }}
          >
            <Icon alt="icon" src={Githubcat} />
            <H3Text>Tung Le</H3Text>
          </Button>
        </Link>
      
        <Link to="/cart" style={{textDecoration: 'none'}}>
          <Button sx={{
              textTransform: "none",
              color: "#fff",
              gap: "16px",
              marginLeft: "30px",
            }}>
            <Icon alt="icon" src={Cart} />
            <H3Text>Cart: 0</H3Text>
          </Button>
        </Link>
      </Box>
  );
}

const Icon = styled("img")({
  width: "24px",
  height: "27px",
});

const H3Text = styled("h3")({
  color: "#fff",
  fontSize: "18px",
  whiteSpace: "nowrap",
});

export default UserCart;
