import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, IconButton, Typography } from "@mui/material";

interface GameInfoProps {
  playerScore: number;
  computerScore: number;
  rounds: number;
  playerChoice: string | null;
  computerChoice: string | null;
  result: string | null;
}

const GameInfo: React.FC<GameInfoProps> = ({ 
  playerScore, 
  computerScore, 
  rounds, 
  playerChoice, 
  computerChoice, 
  result 
}) => {
    const navigate = useNavigate();


  return (
    <div
    style={{
      color: "white",
      backgroundColor: "rgb(16, 18, 35)",
      paddingTop: "50px",
    }}
  >
    <div className="game">
      <p className="game_title">Basearps ID</p>
      <p className="game_cont">
      “Wait, Do you know you can have a reusable identity online that anyone can use to verify you easily?
      Either you are a farmer, a student, a worker, a business owner, a freelancer, a professional, a retiree, a child, a teenager, a young adult, a middle-aged adult, or an elderly person, you can have a reusable identity online that anyone can use to verify you easily.
      Curious? Click verify me!
      </p>

      <button
          className="btn"
          style={{
            margin: "auto",
            color: "black",
          }}
          onClick={() => {
            navigate("/verify");
          }}
        >
          Verify me!
        </button>

        <br
          style={{
            color: "rgba(143, 143, 144, 0.14) 2px solid",
            marginBottom: "2rem",
            height: "2px",
          }}
        />
      </div>

      <div className="game">
        <p className="game_title">Are you a Philantropist or you love to help the needy??</p>
        <p className="game_cont">
          At Basearps, we believe in the power of giving. We are a community-driven platform that allows you to donate to verified needy people and organizations.
          That is why we have a Ecommerce section where you can donate to verified needy people and organizations.
        </p>
        {/* <ul
          style={{
            width: "fit-content",
            margin: "40px auto ",
            fontSize: "18px",
          }}
        >
          <li>
            If you choose Rock, you will win against Scissors but lose against
            Paper.
          </li>
          <li>
            If you choose Scissors, you will win against Paper but lose against
            Rock.
          </li>
          <li>
            If you choose Paper, you will win against Rock but lose against
            Scissors.
          </li>
        </ul> */}

        <button
          className="btn"
          style={{
            margin: "auto",
            color: "black",
          }}
          onClick={() => {
            navigate("/needy");
          }}
        >
          Play Now
        </button>

        <br
          style={{
            color: "rgba(143, 143, 144, 0.14) 2px solid",
            marginBottom: "2rem",
            height: "2px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
            maxWidth: "900px",
            margin: "100px auto",
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              "& img": {
                margin: { xs: "auto 0px", sm: "auto 0px" },
                height: { xs: "32px", sm: "32px", md: "32px" },
              },
            }}
            onClick={() => {
              navigate("/");
            }}
          >

          </Box>
        </div>
      </div>

      <div className="game">
        <p className="game_title">E-commerce for the needy</p>
        <p className="game_cont">
          Follow these steps:
        </p>
        <ul
          style={{
            width: "fit-content",
            margin: "40px auto ",
            fontSize: "18px",
          }}
        >
          <li>
            Connect your wallet.
          </li>
          <li>
            Choose token you want to bridge and network.
          </li>
          <li>
            Choose the token and network you want the token to be.
          </li>
        </ul>

        <button
          className="btn"
          style={{
            margin: "auto",
            color: "black",
          }}
          onClick={() => {
            navigate("/basearpsveri");
          }}
        >
          Donate now!
        </button>

        <br
          style={{
            color: "rgba(143, 143, 144, 0.14) 2px solid",
            marginBottom: "2rem",
            height: "2px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
            maxWidth: "900px",
            margin: "100px auto",
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              "& img": {
                margin: { xs: "auto 0px", sm: "auto 0px" },
                height: { xs: "32px", sm: "32px", md: "32px" },
              },
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <img alt="" src="./logo192.png" />
            <Typography
              sx={{
                display: { xs: "none", sm: "flex" },
                fontSize: { sm: "14px", md: "14px" },
                fontWeight: "400",
                margin: "auto 0.3rem",
                color: "white",
              }}
            >
              Basearps
            </Typography>
          </Box>
          <p
            style={{
              width: "fit-content",
              fontSize: "14px",
            }}
          >
            Copyright © Basearps
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;