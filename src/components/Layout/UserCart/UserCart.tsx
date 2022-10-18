import Githubcat from "../../../assets/images/githubcat.svg";
import IconCart from "../../../assets/images/cart.svg";
import { Button, Box, styled } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";

function UserCart() {
  const { cart } = useContext(CartContext);
  let navigate = useNavigate();
  return (
    <Box>
      <Button
        sx={{
          textTransform: "none",
          color: "#fff",
          gap: "18px",
          marginLeft: "50px",
        }}
        onClick={() => {
          navigate("/log-in");
        }}
      >
        <Icon alt="icon" src={Githubcat} />
        <H3Text>Tung Le</H3Text>
      </Button>

      <Button
        sx={{
          textTransform: "none",
          color: "#fff",
          gap: "16px",
          marginLeft: "30px",
        }}
        onClick={() => {
          navigate("/cart");
        }}
      >
        <Icon alt="icon" src={IconCart} />
        <H3Text>Card: {cart.length}</H3Text>
      </Button>
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
