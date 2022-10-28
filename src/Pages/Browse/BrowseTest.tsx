// import { ReactComponent as Wishlist } from "../../assets/images/wishlist.svg";
// import { ReactComponent as Ratings } from "../../assets/images/ratings.svg";
// import { ReactComponent as Reviews } from "../../assets/images/reviews.svg";
// import { ReactComponent as Action } from "../../assets/images/action.svg";
// import { ReactComponent as Strategy } from "../../assets/images/strategy.svg";
// import { ReactComponent as RPG } from "../../assets/images/RPG.svg";
// import { ReactComponent as Shooter } from "../../assets/images/shooter.svg";
// import { ReactComponent as Adventure } from "../../assets/images/adventure.svg";
// import { ReactComponent as Puzzle } from "../../assets/images/puzzle.svg";
// import { ReactComponent as Racing } from "../../assets/images/racing.svg";
// import { ReactComponent as Sports } from "../../assets/images/sports.svg";
// import { ReactComponent as IconColumns } from "../../assets/images/columns.svg";
// import { ReactComponent as IconGrid } from "../../assets/images/grid.svg";
// import { Box, Button, Grid, styled, Typography } from "@mui/material";
// import { useContext } from "react";
// import { ProductContext } from "../../context/ProductContext";
// // import SideBar from "../../components/Layout/SideBar/SideBar";
// // import { Outlet } from "../../components/Layout/Outlet/Outlet";
// // import React from "react";
// import { useEffect, useState } from "react";

// import { ProductType } from "../../@type/product";
// import { CartContext } from "../../context/CartContext";
// import Product from "../../components/Layout/Product/Product";
// import { Outlet } from "react-router-dom";

// function Browse() {
//   // const [data ,setData] = useState<ProductType[]>([])
//   // useEffect(()=>{
//   //     const getData = async() =>{
//   //       const res = await axios.get("https://6322fc6aa624bced30839d40.mockapi.io/products")
//   //       setData(res.data)
//   //     }

//   //    getData()
//   // },[])
//   const { allData } = useContext(ProductContext);
//   const [dataUI, setDataUI] = useState<ProductType[]>([]);
//   const [filterData, setFilterData] = useState<string>("none");
//   const { cart } = useContext(CartContext);
//   const [layout, setLayout] = useState<number>(3);
//   const handlerClearFilter = () => {
//     setDataUI(allData);
//     setFilterData("None");
//   };
//   useEffect(() => {
//     setDataUI(allData);
//   }, []);

//   const handleWishList = () => {
//     setDataUI(
//       allData.filter((item) => {
//         return item.isLiked === true;
//       })
//     );
//     setFilterData("Wishlist");
//   };
//   const handleAction = () => {
//     setDataUI(
//       allData.filter((item) => {
//         return item.genre === "Action";
//       })
//     );
//     setFilterData("Action");
//   };
//   const handleStrategy = () => {
//     setDataUI(
//       allData.filter((item) => {
//         return item.genre === "Strategy";
//       })
//     );
//     setFilterData("Strategy");
//   };
//   const handleRPG = () => {
//     setDataUI(
//       allData.filter((item) => {
//         return item.genre === "RPG";
//       })
//     );
//     setFilterData("RPG");
//   };
//   const handleShooter = () => {
//     setDataUI(
//       allData.filter((item) => {
//         return item.genre === "Shooter";
//       })
//     );
//     setFilterData("Shooter");
//   };
//   const handleAdventure = () => {
//     setDataUI(
//       allData.filter((item) => {
//         return item.genre === "Adventure";
//       })
//     );
//     setFilterData("Adventure");
//   };
//   const handlePuzzle = () => {
//     setDataUI(
//       allData.filter((item) => {
//         return item.genre === "Puzzle";
//       })
//     );
//     setFilterData("Puzzle");
//   };
//   const handleRacing = () => {
//     setDataUI(
//       allData.filter((item) => {
//         return item.genre === "Racing";
//       })
//     );
//     setFilterData("Racing");
//   };
//   const handleSports = () => {
//     setDataUI(
//       allData.filter((item) => {
//         return item.genre === "Sports";
//       })
//     );
//     setFilterData("Sports");
//   };
//   const handleRatings = () => {
//     setDataUI(
//       allData.filter((item) => {
//         return item.rating >= 80;
//       })
//     );
//     setFilterData("Ratings");
//   };

//   return (
//     <Box
//       sx={{ padding: "110px 40px 0", backgroundColor: "#000", display: "flex" }}
//     >
//       {/* siderBar start */}
//       <Box mt={0}>
//         <Box>
//           <H3Title>Filters</H3Title>
//           <ButtonSideBar>
//             <Button
//               onClick={handleWishList}
//               sx={{ textTransform: "none", gap: "15px", p: "0" }}
//             >
//               <Wishlist
//                 style={{
//                   width: "31px",
//                   height: "36px",
//                   border: "1px transparent",
//                   borderRadius: "8px",
//                   padding: "2px 5px 4px",
//                   cursor: "pointer",
//                   transition: "all .2s",
//                   fill: "#fff",
//                 }}
//               />
//               <H3Text>Wishlist</H3Text>
//             </Button>
//           </ButtonSideBar>
//           <ButtonSideBar>
//             <Button
//               onClick={handleRatings}
//               sx={{ textTransform: "none", gap: "15px", p: "0" }}
//             >
//               <Ratings
//                 style={{
//                   width: "31px",
//                   height: "36px",
//                   border: "1px transparent",
//                   borderRadius: "8px",
//                   padding: "2px 5px 4px",
//                   cursor: "pointer",
//                   transition: "all .2s",
//                   fill: "#fff",
//                 }}
//               />
//               <H3Text>Ratings</H3Text>
//             </Button>
//           </ButtonSideBar>
//           <ButtonSideBar>
//             <Button sx={{ textTransform: "none", gap: "15px", p: "0" }}>
//               <Reviews
//                 style={{
//                   width: "31px",
//                   height: "36px",
//                   border: "1px transparent",
//                   borderRadius: "8px",
//                   padding: "6px 5px 4px",
//                   cursor: "pointer",
//                   transition: "all .2s",
//                   fill: "#fff",
//                 }}
//               />
//               <H3Text>Reviews</H3Text>
//             </Button>
//           </ButtonSideBar>
//         </Box>

//         <Box>
//           <H3Title>Genres</H3Title>
//           <ButtonSideBar>
//             <Button
//               onClick={handleAction}
//               sx={{ textTransform: "none", gap: "15px", p: "0" }}
//             >
//               <Action
//                 style={{
//                   width: "31px",
//                   height: "36px",
//                   border: "1px transparent",
//                   borderRadius: "8px",
//                   padding: "6px 5px 4px",
//                   cursor: "pointer",
//                   transition: "all .2s",
//                   fill: "#fff",
//                 }}
//               />
//               <H3Text>Action</H3Text>
//             </Button>
//           </ButtonSideBar>
//           <ButtonSideBar>
//             <Button
//               onClick={handleStrategy}
//               sx={{ textTransform: "none", gap: "15px", p: "0" }}
//             >
//               <Strategy
//                 style={{
//                   width: "31px",
//                   height: "36px",
//                   border: "1px transparent",
//                   borderRadius: "8px",
//                   padding: "6px 5px 4px",
//                   cursor: "pointer",
//                   transition: "all .2s",
//                   fill: "#fff",
//                 }}
//               />
//               <H3Text>Strategy</H3Text>
//             </Button>
//           </ButtonSideBar>
//           <ButtonSideBar>
//             <Button
//               onClick={handleRPG}
//               sx={{ textTransform: "none", gap: "15px", p: "0" }}
//             >
//               <RPG
//                 style={{
//                   width: "31px",
//                   height: "36px",
//                   border: "1px transparent",
//                   borderRadius: "8px",
//                   padding: "6px 5px 4px",
//                   cursor: "pointer",
//                   transition: "all .2s",
//                   fill: "#fff",
//                 }}
//               />
//               <H3Text>RPG</H3Text>
//             </Button>
//           </ButtonSideBar>
//           <ButtonSideBar>
//             <Button
//               onClick={handleShooter}
//               sx={{ textTransform: "none", gap: "15px", p: "0" }}
//             >
//               <Shooter
//                 style={{
//                   width: "31px",
//                   height: "36px",
//                   border: "1px transparent",
//                   borderRadius: "8px",
//                   padding: "6px 5px 4px",
//                   cursor: "pointer",
//                   transition: "all .2s",
//                   fill: "#fff",
//                 }}
//               />
//               <H3Text>Shooter</H3Text>
//             </Button>
//           </ButtonSideBar>
//           <ButtonSideBar>
//             <Button
//               onClick={handleAdventure}
//               sx={{ textTransform: "none", gap: "15px", p: "0" }}
//             >
//               <Adventure
//                 style={{
//                   width: "31px",
//                   height: "36px",
//                   border: "1px transparent",
//                   borderRadius: "8px",
//                   padding: "6px 5px 4px",
//                   cursor: "pointer",
//                   transition: "all .2s",
//                   fill: "#fff",
//                 }}
//               />
//               <H3Text>Adventure</H3Text>
//             </Button>
//           </ButtonSideBar>
//           <ButtonSideBar>
//             <Button
//               onClick={handlePuzzle}
//               sx={{ textTransform: "none", gap: "15px", p: "0" }}
//             >
//               <Puzzle
//                 style={{
//                   width: "31px",
//                   height: "36px",
//                   border: "1px transparent",
//                   borderRadius: "8px",
//                   padding: "6px 5px 4px",
//                   cursor: "pointer",
//                   transition: "all .2s",
//                   fill: "#fff",
//                 }}
//               />
//               <H3Text>Puzzle</H3Text>
//             </Button>
//           </ButtonSideBar>
//           <ButtonSideBar>
//             <Button
//               onClick={handleRacing}
//               sx={{ textTransform: "none", gap: "15px", p: "0" }}
//             >
//               <Racing
//                 style={{
//                   width: "31px",
//                   height: "36px",
//                   border: "1px transparent",
//                   borderRadius: "8px",
//                   padding: "6px 5px 4px",
//                   cursor: "pointer",
//                   transition: "all .2s",
//                   fill: "#fff",
//                 }}
//               />
//               <H3Text>Racing</H3Text>
//             </Button>
//           </ButtonSideBar>
//           <ButtonSideBar>
//             <Button
//               onClick={handleSports}
//               sx={{ textTransform: "none", gap: "15px", p: "0" }}
//             >
//               <Sports
//                 style={{
//                   width: "31px",
//                   height: "36px",
//                   border: "1px transparent",
//                   borderRadius: "8px",
//                   padding: "6px 5px 4px",
//                   cursor: "pointer",
//                   transition: "all .2s",
//                   fill: "#fff",
//                 }}
//               />
//               <H3Text>Sports</H3Text>
//             </Button>
//           </ButtonSideBar>
//         </Box>
//       </Box>
//       {/* siderBar end */}

//       <Box
//         pb={"280px"}
//         sx={{ display: "block", flexDirection: "column", width: "100%" }}
//       >
//         <Box>
//           <Typography
//             variant="h1"
//             sx={{
//               color: "#fff",
//               fontSize: "60px",
//               letterSpacing: "1px",
//               fontWeight: "700",
//               mb: "10px",
//             }}
//           >
//             Trending and interesting
//           </Typography>
//           <Typography
//             variant="h3"
//             sx={{
//               color: "#fff",
//               fontSize: "16px",
//               letterSpacing: "1px",
//             }}
//           >
//             Based on player counts and ratings
//           </Typography>
//         </Box>

//         <Box
//           sx={{
//             mt: "20px",
//             mb: "28px",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <Box>
//             <Button
//               sx={{
//                 color: "#fff",
//                 textTransform: "none",
//                 backgroundColor: "#262626",
//                 border: "1px transparent",
//                 borderRadius: "12px",
//                 transition: "all 0.3s",
//                 height: "40px",
//                 padding: "8px 22px",
//                 fontSize: "14px",
//               }}
//             >
//               Filter by: {filterData}
//             </Button>
//             <Button
//               sx={{
//                 ml: "10px",
//                 color: "#fff",
//                 textTransform: "none",
//                 backgroundColor: "#262626",
//                 border: "1px transparent",
//                 borderRadius: "12px",
//                 transition: "all 0.3s",
//                 height: "40px",
//                 padding: "8px 22px",
//                 fontSize: "14px",
//               }}
//               onClick={handlerClearFilter}
//             >
//               Clear Filter
//             </Button>
//           </Box>

//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <Typography
//               variant="h3"
//               sx={{
//                 color: "#696969",
//                 fontSize: "16px",
//               }}
//             >
//               Display options:
//             </Typography>
//             <Button
//               disableRipple
//               sx={{
//                 height: "48px",
//                 backgroundColor: "#282828",
//                 fill: layout === 3 ? "#fff" : "rgb(111, 111, 111)",
//                 border: "1px transparent",
//                 borderRadius: "8px",
//                 m: "0 5px",
//                 "&: active": {
//                   transform: "scale(0.9)",
//                 },
//               }}
//               onClick={() => setLayout(3)}
//             >
//               <IconGrid
//                 style={{
//                   width: "48px",
//                   height: "48px",
//                   cursor: "pointer",
//                   transition: "all .2s",
//                 }}
//               />
//             </Button>
//             <Button
//               disableRipple
//               sx={{
//                 height: "48px",
//                 backgroundColor: "#282828",
//                 fill: layout === 8 ? "#fff" : "rgb(111, 111, 111)",
//                 border: "1px transparent",
//                 borderRadius: "8px",
//                 m: "0 5px",
//                 "&: active": {
//                   transform: "scale(0.9)",
//                 },
//               }}
//               onClick={() => setLayout(8)}
//             >
//               <IconColumns
//                 style={{
//                   width: "48px",
//                   height: "48px",
//                   cursor: "pointer",
//                   transition: "all .2s",
//                 }}
//               />
//             </Button>
//           </Box>
//         </Box>

//         <Box>
//           <Grid
//             container
//             spacing={2}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "flex-start",
//             }}
//           >
//             {dataUI && dataUI.length > 0
//               ? dataUI.map((product, index) => {
//                   return (
//                     <Grid
//                       item={true}
//                       xs={layout}
//                       key={index}
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                       }}
//                     >
//                       <Product
//                         id={product.id}
//                         to={`/store/${product.id}`}
//                         name={product.name}
//                         src={product.cover}
//                         money={product.price}
//                         like={product.isLiked}
//                         isAdded={
//                           cart.find((item) => {
//                             return item.id === product.id;
//                           })
//                             ? true
//                             : false
//                         }
//                       />
//                     </Grid>
//                   );
//                 })
//               : "NO DATA"}
//           </Grid>
//         </Box>
//       </Box>
//       <Outlet />
//     </Box>
//   );
// }

// const ButtonSideBar = styled("div")({
//   width: "270px",
//   height: "45px",
//   paddingTop: "10px",
//   background: "#000",
//   cursor: "pointer",
//   display: "flex",
//   "& svg": {
//     backgroundColor: "rgb(45, 45, 45)",
//   },
//   "&:hover": {
//     "& svg": {
//       backgroundColor: "#fff",
//       "& path": {
//         fill: "#000",
//       },
//     },
//   },
// });

// const H3Title = styled("h3")({
//   color: "#fff",
//   fontSize: "25px",
//   height: "30px",
//   letterSpacing: "1px",
//   marginBottom: "12px",
//   marginTop: "22px",
//   whiteSpace: "nowrap",
// });

// const H3Text = styled("h3")({
//   fontSize: "20px",
//   cursor: "pointer",
//   color: "#fff",
//   whiteSpace: "nowrap",
// });

// export default Browse;
