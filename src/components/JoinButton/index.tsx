import React from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import "./index.css";

export function JoinButton({ handleClick }: { handleClick: any }) {
  return (
    <Box className="JoinButtonBox" cursor="pointer" onClick={handleClick}>
      <Box className="JoinButtonBg">
        <Box className="joinButton">Join Waitlist</Box>
      </Box>
    </Box>
  );
}
