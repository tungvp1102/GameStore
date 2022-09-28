import { useContext, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ProductType } from "../../../@type/cart";
import IconAdd from "../../../assets/images/add.svg";
import { ReactComponent as IconLike } from "../../../assets/images/like.svg";
import { CartContext } from "../../../context/CartContext"
import { putData, postData } from "../../../method";

const Product = ({ id, to, src, name, money, like }: ProductType) => {
  const [isLike, setIsLike] = useState<boolean>(like);
  const { cart, setCart } = useContext(CartContext);
  const handleLike = () => {
    setIsLike(!isLike);
  }
  const handleAddCart = () => {
    postData("", { id: id, name: name, money: money }).then((res) => setCart([res.data, ...cart]));
  };

  return (
    <Card
      sx={{
        minWidth: "280px",
        maxWidth: "500px",
        borderRadius: "12px",
        width: "100%",
        transition: "all 0.3s",
        border: "1px transparent",
        backgroundColor: "#202020",
      }}
    >
      <Link to={to}>
        <CardMedia
          component="img"
          image={src}
          alt="green iguana"
          sx={{
            minHeight: "160px",
            maxHeight: "280px",
          }}
        />
      </Link>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          size="small"
          sx={{
            color: "rgb(153, 153, 153)",
            fontSize: "16px ",
            textTransform: "none",
            gap: "15px",
          }}
          onClick={handleAddCart}
        >
          Add to cart
          <img
            src={IconAdd}
            alt="icon"
            style={{ height: "14px", width: "14px" }}
          />
        </Button>
        <Typography variant="h6" sx={{ color: "#fff" }}>
          ${money}
        </Typography>
      </CardActions>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link
          to={to}
          style={{
            textDecoration: "none",
            color: "#fff",
            fontSize: "24px ",
          }}
        >
          {name}
        </Link>
        <Button onClick={handleLike}>
          <IconLike
            style={{
              height: "18px",
              width: "18px",
              marginTop: "20px",
              fill: isLike ? "red" : "rgb(204, 204, 204)",
            }}
          />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Product;
