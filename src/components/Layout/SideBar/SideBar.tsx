import { ReactComponent as Wishlist } from "../../../assets/images/wishlist.svg";
import { ReactComponent as Ratings } from "../../../assets/images/ratings.svg";
import { ReactComponent as Reviews } from "../../../assets/images/reviews.svg";
import Action from "../../../assets/images/action.svg";
import Strategy from "../../../assets/images/strategy.svg";
import RPG from "../../../assets/images/RPG.svg";
import Shooter from "../../../assets/images/shooter.svg";
import Adventure from "../../../assets/images/adventure.svg";
import Puzzle from "../../../assets/images/puzzle.svg";
import Racing from "../../../assets/images/racing.svg";
import Sports from "../../../assets/images/sports.svg";
import { Box, Button, styled } from "@mui/material";
import { useContext } from "react"
import { ProductContext } from "../../../context/ProductContext"

function SideBar() {
  const { dataWishlist, setDataUI, dataUI } = useContext(ProductContext);
  const handleWishList = () => {
    setDataUI(dataWishlist);
  };

  return(
  <Box mt={0}>
    <Box>
      <H3Title>Filters</H3Title>
      <ButtonSideBar>
        <Button onClick={handleWishList} sx={{ textTransform: "none", gap: "15px", p: "0" }}>
          <Wishlist
            style={{
              width: "31px",
              height: "37px",
              border: "1px transparent",
              borderRadius: "8px",
              padding: "2px 5px 4px",
              cursor: "pointer",
              transition: "all .2s",
              fill: "#fff",
            }}
          />
          <H3Text>Wishlist</H3Text>
        </Button>
      </ButtonSideBar>
      <ButtonSideBar>
        <Button sx={{ textTransform: "none", gap: "15px", p: "0" }}>
          <Ratings
            style={{
              width: "31px",
              height: "37px",
              border: "1px transparent",
              borderRadius: "8px",
              padding: "2px 5px 4px",
              cursor: "pointer",
              transition: "all .2s",
              fill: "#fff",
            }}
          />
          <H3Text>Ratings</H3Text>
        </Button>
      </ButtonSideBar>
      <ButtonSideBar>
        <Button sx={{ textTransform: "none", gap: "15px", p: "0" }}>
          <Reviews
            style={{
              width: "31px",
              height: "37px",
              border: "1px transparent",
              borderRadius: "8px",
              padding: "6px 5px 4px",
              cursor: "pointer",
              transition: "all .2s",
              fill: "#fff",
            }}
          />
          <H3Text>Reviews</H3Text>
        </Button>
      </ButtonSideBar>
    </Box>

    <Box>
        <H3Title>Genres</H3Title>
        <ButtonSideBar>
          <Button sx={{ textTransform: "none", gap: "15px", p: '0'}}>
          <Icon src={Action} alt="icon"/>
            <H3Text>Action</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button sx={{ textTransform: "none", gap: "15px", p: '0'}}>
          <Icon src={Strategy} alt="icon"/>
            <H3Text>Strategy</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button sx={{ textTransform: "none", gap: "15px", p: '0'}}>
          <Icon src={RPG} alt="icon"/>
            <H3Text>RPG</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button sx={{ textTransform: "none", gap: "15px", p: '0'}}>
          <Icon src={Shooter} alt="icon"/>
            <H3Text>Shooter</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button sx={{ textTransform: "none", gap: "15px", p: '0'}}>
          <Icon src={Adventure} alt="icon"/>
            <H3Text>Adventure</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button sx={{ textTransform: "none", gap: "15px", p: '0'}}>
          <Icon src={Puzzle} alt="icon"/>
            <H3Text>Puzzle</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button sx={{ textTransform: "none", gap: "15px", p: '0'}}>
          <Icon src={Racing} alt="icon"/>
            <H3Text>Racing</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button sx={{ textTransform: "none", gap: "15px", p: '0'}}>
            <Icon src={Sports} alt="icon"/>
            <H3Text>Sports</H3Text>
          </Button>
        </ButtonSideBar>
      </Box>
  </Box>
  )
}

const Icon = styled("img")({
  width: "39px",
  height: "43px",
  border: "1px transparent",
  borderRadius: "8px",
  padding: "6px 5px 4px",
  cursor: "pointer",
  transition: "all .2s",
  fill: "#fff",
});

const ButtonSideBar = styled("div")({
  width: "270px",
  paddingTop: "10px",
  background: "#000",
  cursor: "pointer",
  display: "flex",
  "& svg": {
    backgroundColor: "rgb(45, 45, 45)",
  },
  "&:hover": {
    "& svg": {
      backgroundColor: "#fff",
      "& path": {
        fill: "#000",
      },
    },
  },
});

const H3Title = styled("h3")({
  color: "#fff",
  fontSize: "25px",
  letterSpacing: "1px",
  marginBottom: "22px",
  marginTop: "22px",
  whiteSpace: "nowrap",
});

const H3Text = styled("h3")({
  fontSize: "20px",
  cursor: "pointer",
  color: "#fff",
  whiteSpace: "nowrap",
});

export default SideBar;
