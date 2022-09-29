import { Box, CardActions, CardContent, Collapse, Stack, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ExpandMore } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import { getData } from "../../../method";


function Game() {
  let { productID } = useParams();

  const [product, setProduct] = useState<any>({});
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    getData(`products/${productID}`).then((res) => {
      setProduct(res?.data);
    });
  }, [productID]);
  
    return ( 
        <Box sx={{ width: "100%", backgroundColor: "#000", padding: "30px 50px" }}>
      <Box>
        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Link
            to="/store"
            style={{ textDecoration: "none", color: "rgb(204, 204, 204)" }}
          >
            <ArrowBackIcon />
            <Typography variant="h4">Store</Typography>
          </Link>
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontFamily: "GT Ultrabold",
              fontSize: "3.3em",
              letterSpacing: "1px",
            }}
          >
            {product?.name}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={6.5} mt={10} mb={20}>
            <Box
              component={"img"}
              sx={{
                backgroundImage: `url(${product?.avatar})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                padding: "30%",
                borderRadius: "20px",
                maxHeight: "580px",
                maxWidth: "580px",
              }}
            >
            </Box>
          <Box>
            <CardContent>
              <Typography variant="h2" color="#fff">
                About
              </Typography>
              <Typography paragraph color="#fff">
                {product?.about}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                // expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                sx={{ color: "#fff" }}
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph color="#fff">
                  Method:
                </Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
                <Typography paragraph color="#fff">
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and
                  set aside, leaving chicken and chorizo in the pan. Add
                  pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant,
                  about 10 minutes. Add saffron broth and remaining 4 1/2 cups
                  chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph color="#fff">
                  Add rice and stir very gently to distribute. Top with
                  artichokes and peppers, and cook without stirring, until most
                  of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down
                  into the rice, and cook again without stirring, until mussels
                  have opened and rice is just tender, 5 to 7 minutes more.
                  (Discard any mussels that don&apos;t open.)
                </Typography>
                <Typography color="#fff">
                  Set aside off of the heat to let rest for 10 minutes, and then
                  serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Box>
        </Stack>
      </Box>
    </Box>
    );
}

export default Game;