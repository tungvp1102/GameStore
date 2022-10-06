import { Box, Button, Paper } from "@mui/material";
import { deleteData } from "../../method";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Header from "../../components/Layout/Header/Header";
import { CartType } from "../../@type/cart";
import { Stack } from "@mui/system";
import IconCross from "../../assets/images/cross.svg"
import styled from "@emotion/styled";

function Cart() {
    const { cart, setCart } = useContext(CartContext);
    const handleDelete = (id: number) => {
        deleteData(`cart/${id}`);
        setCart(cart.filter((item) => item.id !== id));
      };

    return ( 
        <Box mt={10}>
            <Header />
            <Box>
                <Stack>
                    {cart && cart.length > 0 ?
                        cart?.map((game: CartType) => {
                            return (
                                <Paper key={game.id}>
                                    {game.name}
                                    <Button type="submit" onClick={() => handleDelete(game.id)}>
                                        <Icon alt="icon" src={IconCross} />
                                    </Button>
                                </Paper>
                            );
                        })
                    : "..."}
                </Stack>
            </Box>
        </Box> 
    );
}

const Icon = styled("img")({
    width: "24px",
    height: "27px",
  });

export default Cart;