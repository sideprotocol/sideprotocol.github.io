import React from "react";
import { Box, Button, Divider, Flex, Spacer } from "@chakra-ui/react";
import "./index.css";

export function Want() {
  return (
    <Box className="WantContainer">
      <Box className="WantBox">
        <Box
          className="WantText"
          onClick={() => {
            window.open("https://discord.com/invite/GN99earcFR", "_blank");
          }}
        >
          Want to get involved?
        </Box>
        {/* <Box className="WantButton">Join the Community</Box> */}
        <Box
          className="button WantButton  button--rayen button--border-thick button--text-thick"
          data-text="Join the Community"
          onClick={() => {
            window.open("https://discord.com/invite/GN99earcFR", "_blank");
          }}
        >
          <span>Join the Community</span>
        </Box>
      </Box>
    </Box>
  );
}
