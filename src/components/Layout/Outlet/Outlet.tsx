import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { ReactComponent as IconColumns } from "../../../assets/images/columns.svg";
import { ReactComponent as IconGrid } from "../../../assets/images/grid.svg";
import styled from "@emotion/styled";
// import {useAtom} from 'jotai'
// import axios from "axios";
// import { productAtom } from "../../../store/Atom";
import Product from "../Product/Product";
import { ProductContext } from "../../../context/ProductContext";
import { ProductType } from "../../../@type/product";
import { CartContext } from "../../../context/CartContext";
// interface Props {
//   product: ProductType[];
// }
// export const Outlet: React.FC<Props> = ({ product }) => {
//   console.log(product);
export const Outlet = () => {
  const { cart } = useContext(CartContext);
  const [layout, setLayout] = useState<number>(3);
  const { dataUI, setDataUI, allData, filterData, setFilterData } =
    useContext(ProductContext);
  const handlerClearFilter = () => {
    setDataUI(allData);
    setFilterData("None");
  };

  return (
    <Box
      pb={"280px"}
      sx={{ display: "block", flexDirection: "column", width: "100%" }}
    >
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
          mt: "20px",
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
            Filter by: {filterData}
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
            onClick={handlerClearFilter}
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
          <Button
            disableRipple
            sx={{
              height: "48px",
              backgroundColor: "#282828",
              fill: layout === 3 ? "#fff" : "rgb(111, 111, 111)",
              border: "1px transparent",
              borderRadius: "8px",
              m: "0 5px",
              "&: active": {
                transform: "scale(0.9)",
              },
            }}
            onClick={() => setLayout(3)}
          >
            <IconGrid
              style={{
                width: "48px",
                height: "48px",
                cursor: "pointer",
                transition: "all .2s",
              }}
            />
          </Button>
          <Button
            disableRipple
            sx={{
              height: "48px",
              backgroundColor: "#282828",
              fill: layout === 8 ? "#fff" : "rgb(111, 111, 111)",
              border: "1px transparent",
              borderRadius: "8px",
              m: "0 5px",
              "&: active": {
                transform: "scale(0.9)",
              },
            }}
            onClick={() => setLayout(8)}
          >
            <IconColumns
              style={{
                width: "48px",
                height: "48px",
                cursor: "pointer",
                transition: "all .2s",
              }}
            />
          </Button>
        </Box>
      </Box>

      <Box>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {dataUI && dataUI.length > 0
            ? dataUI.map((product, index) => {
                return (
                  <Grid
                    item={true}
                    xs={layout}
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Product
                      id={product.id}
                      to={`/store/${product.id}`}
                      name={product.name}
                      src={product.cover}
                      money={product.price}
                      like={product.isLiked}
                      isAdded={
                        cart.find((item) => {
                          return item.id === product.id;
                        })
                          ? true
                          : false
                      }
                    />
                  </Grid>
                );
              })
            : "NO DATA"}
        </Grid>
      </Box>
    </Box>
  );
};


