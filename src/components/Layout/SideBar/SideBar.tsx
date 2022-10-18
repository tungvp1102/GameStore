import { ReactComponent as Wishlist } from "../../../assets/images/wishlist.svg";
import { ReactComponent as Ratings } from "../../../assets/images/ratings.svg";
import { ReactComponent as Reviews } from "../../../assets/images/reviews.svg";
import { ReactComponent as Action } from "../../../assets/images/action.svg";
import { ReactComponent as Strategy } from "../../../assets/images/strategy.svg";
import { ReactComponent as RPG } from "../../../assets/images/RPG.svg";
import { ReactComponent as Shooter } from "../../../assets/images/shooter.svg";
import { ReactComponent as Adventure } from "../../../assets/images/adventure.svg";
import { ReactComponent as Puzzle } from "../../../assets/images/puzzle.svg";
import { ReactComponent as Racing } from "../../../assets/images/racing.svg";
import { ReactComponent as Sports } from "../../../assets/images/sports.svg";
import { Box, Button, styled } from "@mui/material";
import { useContext } from "react"
import { ProductContext } from "../../../context/ProductContext"
// import { useAtom } from "jotai";
// import { productAtom } from "../../../store/Atom";

function SideBar() {
  const { setDataUI, dataUI, allData, setFilterData } = useContext(ProductContext);
  
  // const [data , setData] =useAtom(productAtom)
 
  const handleWishList = () => {
    setDataUI(
      allData.filter((item) => {
        return item.isLiked === true;
      })
    );
    setFilterData("Wishlist");
  };
  const handleAction = () => {
    setDataUI(
      allData.filter((item) => {
        return item.genre === 'Action';
      })
    );
    setFilterData("Action");
  };
  const handleStrategy = () => {
    setDataUI(
      allData.filter((item) => {
        return item.genre === 'Strategy';
      })
    );
    setFilterData("Strategy");
  };
  const handleRPG = () => {
    setDataUI(
      allData.filter((item) => {
        return item.genre === 'RPG';
      })
    );
    setFilterData("RPG");
  };
  const handleShooter = () => {
    setDataUI(
      allData.filter((item) => {
        return item.genre === 'Shooter';
      })
    );
    setFilterData("Shooter");
  };
  const handleAdventure = () => {
    setDataUI(
      allData.filter((item) => {
        return item.genre === 'Adventure';
      })
    );
    setFilterData("Adventure");
  };
  const handlePuzzle = () => {
    setDataUI(
      allData.filter((item) => {
        return item.genre === 'Puzzle';
      })
    );
    setFilterData("Puzzle");
  };
  const handleRacing = () => {
    setDataUI(
      allData.filter((item) => {
        return item.genre === 'Racing';
      })
    );
    setFilterData("Racing");
  };
  const handleSports = () => {
    setDataUI(
      allData.filter((item) => {
        return item.genre === 'Sports';
      })
    );
    setFilterData("Sports");
  };
  const handleRatings = () => {
    setDataUI(
      allData.filter((item) => {
        return item.rating >= 80;
      })
    );
    setFilterData("Ratings");
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
              height: "36px",
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
        <Button onClick={handleRatings} sx={{ textTransform: "none", gap: "15px", p: "0" }}>
          <Ratings
            style={{
              width: "31px",
              height: "36px",
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
              height: "36px",
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
          <Button onClick={handleAction} sx={{ textTransform: "none", gap: "15px", p: '0'}}>
          <Action 
            style={{
              width: "31px",
              height: "36px",
              border: "1px transparent",
              borderRadius: "8px",
              padding: "6px 5px 4px",
              cursor: "pointer",
              transition: "all .2s",
              fill: "#fff",
            }}
          />
            <H3Text>Action</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button onClick={handleStrategy} sx={{ textTransform: "none", gap: "15px", p: '0'}}>
          <Strategy
            style={{
              width: "31px",
              height: "36px",
              border: "1px transparent",
              borderRadius: "8px",
              padding: "6px 5px 4px",
              cursor: "pointer",
              transition: "all .2s",
              fill: "#fff",
            }}
          />
            <H3Text>Strategy</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button onClick={handleRPG} sx={{ textTransform: "none", gap: "15px", p: '0'}}>
          <RPG
            style={{
              width: "31px",
              height: "36px",
              border: "1px transparent",
              borderRadius: "8px",
              padding: "6px 5px 4px",
              cursor: "pointer",
              transition: "all .2s",
              fill: "#fff",
            }}
          />
            <H3Text>RPG</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button onClick={handleShooter} sx={{ textTransform: "none", gap: "15px", p: '0'}}>
          <Shooter
            style={{
              width: "31px",
              height: "36px",
              border: "1px transparent",
              borderRadius: "8px",
              padding: "6px 5px 4px",
              cursor: "pointer",
              transition: "all .2s",
              fill: "#fff",
            }}
          />
            <H3Text>Shooter</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button onClick={handleAdventure} sx={{ textTransform: "none", gap: "15px", p: '0'}}>
          <Adventure
            style={{
              width: "31px",
              height: "36px",
              border: "1px transparent",
              borderRadius: "8px",
              padding: "6px 5px 4px",
              cursor: "pointer",
              transition: "all .2s",
              fill: "#fff",
            }}
          />
            <H3Text>Adventure</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button onClick={handlePuzzle} sx={{ textTransform: "none", gap: "15px", p: '0'}}>
          <Puzzle
            style={{
              width: "31px",
              height: "36px",
              border: "1px transparent",
              borderRadius: "8px",
              padding: "6px 5px 4px",
              cursor: "pointer",
              transition: "all .2s",
              fill: "#fff",
            }}
          />
            <H3Text>Puzzle</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button onClick={handleRacing} sx={{ textTransform: "none", gap: "15px", p: '0'}}>
          <Racing
            style={{
              width: "31px",
              height: "36px",
              border: "1px transparent",
              borderRadius: "8px",
              padding: "6px 5px 4px",
              cursor: "pointer",
              transition: "all .2s",
              fill: "#fff",
            }}
          />
            <H3Text>Racing</H3Text>
          </Button>
        </ButtonSideBar>
        <ButtonSideBar>
          <Button onClick={handleSports} sx={{ textTransform: "none", gap: "15px", p: '0'}}>
            <Sports
              style={{
                width: "31px",
                height: "36px",
                border: "1px transparent",
                borderRadius: "8px",
                padding: "6px 5px 4px",
                cursor: "pointer",
                transition: "all .2s",
                fill: "#fff",
              }}
            />
            <H3Text>Sports</H3Text>
          </Button>
        </ButtonSideBar>
      </Box>
  </Box>
  )
}

const ButtonSideBar = styled("div")({
  width: "270px",
  height: "45px",
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
  height:"30px",
  letterSpacing: "1px",
  marginBottom: "12px",
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
