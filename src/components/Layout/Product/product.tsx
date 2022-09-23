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
import IconAdd from "../../../assets/images/add.svg"
import IconLike from "../../../assets/images/like.svg"

const Product = ({ id, to, src, name, money, like } : ProductType) => {
    const [isLike, setIsLike] = useState<boolean>(like);
    return ( 
        <Card>
        </Card> 
    );
}

export default Product;