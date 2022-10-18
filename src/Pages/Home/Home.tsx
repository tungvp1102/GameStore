import { AppBar, Button, Typography, Box, Toolbar } from "@mui/material";
import videoHome from "../../assets/images/pyke.mp4";
import Game from "../../assets/images/game.svg";
import GameBlack from "../../assets/images/gameblack.svg";
import Browse from "../../assets/images/browse.svg";
import UserCart from "../../components/Layout/UserCart/UserCart";
import Enter from "../../assets/images/enter.svg";
import Dice from "../../assets/images/dice.svg";
import Githublogo from "../../assets/images/githublogo.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Notfound from "../../assets/images/notfound.svg";
import Notfoundquery from "../../assets/images/notfoundquery.svg";
import Gitt from "../../assets/images/git.svg";
import Performance from "../../assets/images/performance.svg";
import Whatruns from "../../assets/images/whatruns.png";
import Sources from "../../assets/images/sources.svg";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box>
      <Box
        sx={{
          position: "fixed",
          minHeight: "100%",
          minWidth: "100%",
          right: "0",
          bottom: "0",
          padding: "none",
          overflow: "hidden",
        }}
      >
        <video autoPlay loop muted>
          <source type="video/mp4" src={videoHome} />
        </video>
      </Box>

      <AppBar
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          height: "54px",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ gap: "30px" }}>
            <Link to="/404" style={{ textDecoration: "none" }}>
              <Button
                sx={{ textTransform: "none", color: "#fff", gap: "18px" }}
              >
                <IconPage alt="icon" src={Game} />
                <H3Text>Game Store</H3Text>
              </Button>
            </Link>
            <Link to="/browse" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  gap: "18px",
                  marginLeft: "50px",
                }}
              >
                <IconPage alt="icon" src={Browse} />
                <H3Text>Browse Store</H3Text>
              </Button>
            </Link>
          </Box>
          <UserCart />
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          height: 1,
          width: 1,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box mt={"88px"}>
          <Box
            ml={"40px"}
            sx={{
              height: "px",
              maxWidth: "545px",
              padding: "22px 35px 55px 50px",
              borderRadius: "30px",
              display: "inline-block",
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(250,250,250, 0.285)",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#fff",
                fontSize: "90px",
                whiteSpace: "nowrap",
                fontWeight: "700",
              }}
            >
              Game Store
            </Typography>
            <Typography variant="h4" sx={{ color: "#fff", fontSize: "19px" }}>
              The best destination to buy new games to competitive prices. 24
              hour support, "best price" guarantee and a flawless UX. Wish for
              more? Tell us below — or check out our&nbsp;
              <Typography
                variant="h5"
                align="center"
                sx={{
                  color: "#45c1bc",
                  cursor: "pointer",
                  fontSize: "19px",
                  display: "inline-block",
                }}
              >
                careers
              </Typography>
            </Typography>
          </Box>
          <Box
            ml={"40px"}
            mt={"20px"}
            sx={{
              height: "50px",
              maxWidth: "590px",
              padding: "10px 20px",
              borderRadius: "30px",
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(250,250,250, 0.285)",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <ButtonPage>
              <Icon alt="icon" src={Enter} />
              <H3TextPage>Browse</H3TextPage>
            </ButtonPage>
            <ButtonPage>
              <Icon alt="icon" src={Dice} />
              <H3TextPage>Play Dice</H3TextPage>
            </ButtonPage>
            <ButtonPage>
              <Icon alt="icon" src={Githublogo} />
              <H3TextPage>Github</H3TextPage>
            </ButtonPage>
            <ButtonPage>
              <Icon alt="icon" src={Linkedin} />
              <H3TextPage>Linkedln</H3TextPage>
            </ButtonPage>
          </Box>
        </Box>

        <Box
          mt={"44px"}
          mr={"40px"}
          sx={{
            height: "400px",
            maxWidth: "260px",
            padding: "2px 30px 10px",
            borderRadius: "30px",
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(250,250,250, 0.285)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "26px",
              marginBottom: "14px",
              color: "#fff",
              textAlign: "center",
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            Quick Navigation
          </Typography>
          <ButtonNavigation>
            <Button href="/" sx={{ textTransform: "none", gap: "15px" }}>
              <Icon alt="icon" src={GameBlack} />
              <H3TextPage>Game Page</H3TextPage>
            </Button>
          </ButtonNavigation>
          <ButtonNavigation>
            <Button href="/" sx={{ textTransform: "none", gap: "15px" }}>
              <Icon alt="icon" src={Notfound} />
              <H3TextPage>404 Page</H3TextPage>
            </Button>
          </ButtonNavigation>
          <ButtonNavigation>
            <Button href="/" sx={{ textTransform: "none", gap: "15px" }}>
              <Icon alt="icon" src={Notfoundquery} />
              <H3TextPage>404 Query</H3TextPage>
            </Button>
          </ButtonNavigation>
          <ButtonNavigation>
            <Button href="/" sx={{ textTransform: "none", gap: "15px" }}>
              <Icon alt="icon" src={Gitt} />
              <H3TextPage>Commit Log</H3TextPage>
            </Button>
          </ButtonNavigation>
          <ButtonNavigation>
            <Button href="/" sx={{ textTransform: "none", gap: "15px" }}>
              <Icon alt="icon" src={Performance} />
              <H3TextPage>Performance</H3TextPage>
            </Button>
          </ButtonNavigation>
          <ButtonNavigation>
            <Button href="/" sx={{ textTransform: "none", gap: "15px" }}>
              <Icon alt="icon" src={Whatruns} />
              <H3TextPage>Technologies</H3TextPage>
            </Button>
          </ButtonNavigation>
          <ButtonNavigation>
            <Button href="/" sx={{ textTransform: "none", gap: "15px" }}>
              <Icon alt="icon" src={Sources} />
              <H3TextPage>OurSouce</H3TextPage>
            </Button>
          </ButtonNavigation>
        </Box>
      </Box>
    </Box>
  );
}

const IconPage = styled("img")({
  width: "24px",
  height: "27px",
});

const H3Text = styled("h3")({
  color: "#fff",
  fontSize: "18px",
  whiteSpace: "nowrap",
});

const Icon = styled("img")({
  width: "18px",
  height: "18px",
});

const H3TextPage = styled("h3")({
  color: "#000",
  fontSize: "15px",
  whiteSpace: "nowrap",
});

const ButtonPage = styled("button")({
  marginTop: "5px",
  textTransform: "none",
  gap: "12px",
  width: "135px",
  height: "40px",
  backgroundColor: "#fff",
  border: "1px transparent",
  borderRadius: "18px",
  color: "#000",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  fontSize: "16px",
  padding: "10px 28px",
  transition: "all .3s",
  "&:hover": {
    background: "#45c1bc",
  },
});

const ButtonNavigation = styled("div")({
  width: "165px",
  height: "21px",
  backgroundColor: "#fff",
  border: "1px transparent",
  borderRadius: "18px",
  color: "#000",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  fontSize: "16px",
  padding: "10px 28px",
  transition: "all .3s",
  "&:hover": {
    background: "#45c1bc",
  },
});

export default Home;
