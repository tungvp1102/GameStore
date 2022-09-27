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
// import { ReactComponent as IconLike } from "../../../assets/images/like.svg";
import { putData, postData } from "../../../method";

const Product = ({ id, to, src, name, money, like }: ProductType) => {
  const [isLike, setIsLike] = useState<boolean>(like);
  const handleLike = () => {
    const res = putData(`/${id}`, {
        isLike: !like,
    });
    res.then((data) => {
        setIsLike(data?.data.isLike);
    })

  }
  return (
    <Card
      sx={{
        minWidth: "280px",
        maxWidth: "500px",
        borderRadius: "12px",
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
      <CardActions>
        <Button
          size="small"
          sx={{
            color: "rgb(153, 153, 153)",
            fontSize: "16px ",
            textTransform: "none",
            gap: "15px",
          }}
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
          {/* <IconLike
            style={{
              height: "18px",
              width: "18px",
              marginTop: "20px",
              fill: isLike ? "red" : "rgb(204, 204, 204)",
            }}
          /> */}
        </Button>
      </CardContent>
    </Card>
  );
};

export default Product;
