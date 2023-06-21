import React, { useEffect, useState } from "react";
import { Box, Divider, Flex } from "@chakra-ui/react";
import { Button, Popover, Tooltip } from "antd";
import { HashLink as Link } from "react-router-hash-link";
import "./index.css";
import bg from "../../assets/image/logo.png";
import bg11 from "../../assets/image/header/1-1.svg";
import bg12 from "../../assets/image/header/1-2.svg";
import bg13 from "../../assets/image/header/1-3.svg";
import bg14 from "../../assets/image/header/1-4.svg";
import bg21 from "../../assets/image/header/2-1.svg";
import bg22 from "../../assets/image/header/2-2.svg";
import bg23 from "../../assets/image/header/2-3.svg";
import bg31 from "../../assets/image/header/3-1.svg";

const popover1 = [
  {
    url: bg11,
    title: "Github",
    text: "Explore our open source contribution",
    openUrl: "https://github.com/sideprotocol"
  },
  {
    url: bg12,
    title: "Documentaion",
    text: "Explore our docs and wiki",
    openUrl: "https://docs.side.one"
  },
  {
    url: bg13,
    title: "Validator",
    text: "Apply to join our validator set",
    coming: true,
    openUrl: ""
  },
  {
    url: bg14,
    title: "Builders Registration",
    text: "Apply to become of the registered builders",
    coming: true,
    openUrl: ""
  }
];

const popover2 = [
  {
    url: bg21,
    title: "Blog",
    text: "Check out the blog contents from us",
    openUrl: "https://medium.com/@SideProtocol"
  },
  {
    url: bg22,
    title: "Discord",
    text: "Explore our global community",
    openUrl: "https://discord.com/invite/GN99earcFR"
  },
  {
    url: bg23,
    title: "Twitter",
    text: "Stay up to date our latest social posts",
    openUrl: "https://twitter.com/SideProtocol"
  }
];

const popover3 = [
  {
    url: bg31,
    title: "Ping Pub",
    text: "Explore our open source interchain explorer",
    openUrl: "https://ping.pub"
  }
];

const openPage = (url: string) => {
  if (url) window.open(url, "_blank");
};

const explorerTooltip = (data: any) => {
  return (
    <Box className="explorerTooltip">
      {data.map((item: any, index: number) => (
        <Box
          className="explorerTooltipList"
          key={index}
          onClick={() => {
            openPage(item.openUrl);
          }}
        >
          <img src={item.url} alt="" />
          <Box className="explorerTooltipListText">
            <h5>
              {item.title}
              {item.coming && <span className="comingBg">Coming</span>}
            </h5>
            <p>{item.text}</p>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box
      className={
        scroll
          ? "headerContainer animated fadeInRight scroll"
          : "headerContainer animated fadeInRight"
      }
    >
      <Box className="headerContent">
        <Box className="headerFlex">
          <Link to={"/"}>
            <Box className="headerLogo" />
          </Link>
          <Box className="headerLinkContainer">
            <Link
              to={"/"}
              className="headerLink marginL"
              // className="headerLink button--nina button--text-thick button--text-upper button--size-s"
              data-text="Developers"
            >
              {/* <span>D</span>
              <span>e</span>
              <span>v</span>
              <span>e</span>
              <span>l</span>
              <span>o</span>
              <span>p</span>
              <span>e</span>
              <span>r</span>
              <span>s</span> */}
              <Popover placement="bottom" content={explorerTooltip(popover1)}>
                Developers
              </Popover>
            </Link>
            {/* <Link
              to={"/"}
              className="headerLink button--nina button--text-thick button--text-upper button--size-s"
              data-text="Individuals"
            >
              <span>I</span>
              <span>n</span>
              <span>d</span>
              <span>i</span>
              <span>v</span>
              <span>i</span>
              <span>d</span>
              <span>u</span>
              <span>a</span>
              <span>l</span>
              <span>s</span>
            </Link> */}
            <Link
              to={"/"}
              // className="headerLink headerLink button--nina button--text-thick button--text-upper button--size-s"
              className="headerLink marginL"
              data-text="Community"
            >
              {/* <span>C</span>
              <span>o</span>
              <span>m</span>
              <span>m</span>
              <span>u</span>
              <span>n</span>
              <span>i</span>
              <span>t</span>
              <span>v</span> */}
              <Popover placement="bottom" content={explorerTooltip(popover2)}>
                Community
              </Popover>
            </Link>
            <Link
              to={"/"}
              className="headerLink marginL"
              // className="headerLink headerLink button--nina button--text-thick button--text-upper button--size-s"
              data-text="Explorer"
            >
              <Popover placement="bottom" content={explorerTooltip(popover3)}>
                Explorer
              </Popover>
            </Link>
            {/* <Link to={"/"} className="headerLink launchButton">
              Launch App
            </Link> */}

            <Link to={"/"} className="headerLink mag">
              <span
                onClick={() => {
                  window.open(
                    "https://discord.com/invite/GN99earcFR",
                    "_blank"
                  );
                }}
                className="disc"
              ></span>
            </Link>
            <Link to={"/"} className="headerLink ">
              <span
                className="tuite"
                onClick={() => {
                  window.open("https://twitter.com/SideProtocol", "_blank");
                }}
              ></span>
            </Link>
            <Link to={"/"} className="headerLink github">
              <span
                className="github"
                onClick={() => {
                  window.open("https://github.com/sideprotocol", "_blank");
                }}
              ></span>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
