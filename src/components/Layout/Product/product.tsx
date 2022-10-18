import { useContext, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ProductType as ProductTypeCart } from "../../../@type/cart";
import IconAdd from "../../../assets/images/add.svg";
import { ReactComponent as IconLike } from "../../../assets/images/like.svg";
import { CartContext, handleAddCart } from "../../../context/CartContext";
import { ProductContext, handleLike } from "../../../context/ProductContext";
import { Navigate } from "react-router-dom";
import { ProductType } from "../../../@type/product";
// import { putData, postData } from "../../../method";
// import { useAtom } from "jotai";
// import { productAtom } from "../../../store/Atom";

const Product = ({
  id,
  to,
  src,
  name,
  money,
  like,
  isAdded,
}: ProductTypeCart) => {
  let navigate = useNavigate();
  const [add, setAdd] = useState<boolean>(isAdded);
  const [isLike, setIsLike] = useState<boolean>(like);
  const { cart, setCart } = useContext(CartContext);
  const { allData, setAllData } = useContext(ProductContext);
  const [product, setProduct] = useState<ProductType>(allData[id]);

  // const [data , setData] =useAtom(productAtom)
  const handleAddCartProduct = () => {
    setAdd(true);
    handleAddCart(id, allData, setAllData, cart, setCart);
  };
  const handleLikeCart = () => {
    setProduct({ ...product, isLiked: !product.isLiked });
    handleLike(product.id, allData, setAllData);
  };
  useEffect(() => {
    setProduct(allData[id]);
  }, [id]);

  return (
    <Card
      sx={{
        minWidth: "280px",
        maxWidth: "500px",
        borderRadius: "12px",
        transition: "all 0.3s",
        border: "1px transparent",
        backgroundColor: "#202020",
      }}
    >
      <Link to={to}>
        <CardMedia
          component="img"
          image={product.cover}
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
          onClick={handleAddCartProduct}
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
        <Button onClick={handleLikeCart}>
          <IconLike
            style={{
              height: "18px",
              width: "18px",
              marginTop: "20px",
              fill: product.isLiked ? "red" : "rgb(204, 204, 204)",
            }}
          />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Product;
