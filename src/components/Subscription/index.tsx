import React from "react";
import { Box, Divider, Flex, Spacer } from "@chakra-ui/react";
import { message } from "antd";
import { HashLink as Link } from "react-router-hash-link";
import "./index.css";

export function Subscription() {
  return (
    <Box className="subscriptionContainer">
      {/* <Divider opacity="0.1" /> */}
      <Box className="footerTop">
        <h5>STAY UP TO DATE</h5>
        {/* <ul>
          <li style={{ marginRight: "26px" }}>Explorer</li>
          <li> Community</li>
          <li> Individuals</li>
          <li> Developers</li>
        </ul> */}
      </Box>
      <Flex className="footerFlex">
        <Box className="footerText">
          <Box className="h3">Sign up for newsletter</Box>
          <form action="https://submit-form.com/bvras8Ee">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="input"
              required
            />
            <button
              type="submit"
              className="Send"
              // onClick={() => {
              //   message.success("Submit successfully");
              // }}
            >
              {/* Send */}
            </button>
          </form>
          {/* <input type="text" placeholder="Enter your email" className="input" /> */}
          <Box className="arrowRight"></Box>
        </Box>
        <Spacer className="footerSpacer" />
        <Box className="ficonP">
          <Box marginBottom="10px">
            <Box
              className="footerInstagram footerIcon"
              onClick={() => window.open("https://docs.side.one/", "_blank")}
            />
            <Box
              className="footerMedium footerIcon"
              onClick={() =>
                window.open("https://discord.com/invite/GN99earcFR")
              }
            />
            <Box
              className="footerTwitter footerIcon"
              onClick={() => window.open("https://twitter.com/SideProtocol")}
            />
            <Box
              className="footerM footerIcon"
              onClick={() => window.open("https://www.youtube.com/")}
            />
            <Box
              className="footerGithub footerIcon"
              onClick={() => window.open("https://github.com/sideprotocol")}
            />
          </Box>
          <Box
            className="footerWangzhi"
            onClick={() => {
              window.open("https://medium.com/@SideProtocol", "_blank");
            }}
          >
            © 2022 Side Labs All Rights Reserved
          </Box>
        </Box>

        <Box className="ficonM">
          <Box marginBottom="10px" className="footerIcons">
            <Box
              className="footerInstagram footerIcon"
              onClick={() => window.open("https://docs.side.one/", "_blank")}
            />
            <Box
              className="footerMedium footerIcon"
              onClick={() =>
                window.open("https://discord.com/invite/GN99earcFR")
              }
            />
            <Box
              className="footerTwitter footerIcon"
              onClick={() => window.open("https://twitter.com/SideProtocol")}
            />
            <Box
              className="footerM footerIcon"
              onClick={() => window.open("https://www.youtube.com/")}
            />
            <Box
              className="footerGithub footerIcon"
              onClick={() => window.open("https://github.com/sideprotocol")}
            />
          </Box>
          <Box
            className="footerWangzhi"
            onClick={() => {
              window.open("https://medium.com/@SideProtocol", "_blank");
            }}
          >
            © 2022 Side Labs All Rights Reserved
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
