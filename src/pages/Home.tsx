import React, { useState } from "react";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { ResearchReport } from "../components/ResearchReport";
import { Advisory } from "../components/Advisory";
import { PartnerNetwork } from "../components/PartnerNetwork";
import { PortfolioCompanies } from "../components/Protfolio";
import { MeetRootz } from "../components/MeetRootz";
import { Subscription } from "../components/Subscription";
import { RevolvingDoor } from "../components/RevolvingDoor";
import { Interchain } from "../components/Interchain";
import { Want } from "../components/Want";
import arrow from "../assets/image/arrowrRight.svg";
import "./Home.css";

import bg11 from "../assets/image/header/1-1.svg";
import bg12 from "../assets/image/header/1-2.svg";
import bg13 from "../assets/image/header/1-3.svg";
import bg14 from "../assets/image/header/1-4.svg";
import bg21 from "../assets/image/header/2-1.svg";
import bg22 from "../assets/image/header/2-2.svg";
import bg23 from "../assets/image/header/2-3.svg";
import bg31 from "../assets/image/header/3-1.svg";

export function Home() {
  const [active, setActive] = useState(-1);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="Home" style={{ overflow: "clip", background: "#000" }}>
      <div
        className="open"
        onClick={() => {
          setOpenSidebar(true);
        }}
      ></div>

      <div
        className="sidebarIcon"
        style={{ display: openSidebar ? "block" : "none" }}
      >
        <div className="sidebarIconBox">
          <span
            onClick={() => {
              window.open("https://discord.com/invite/GN99earcFR", "_blank");
            }}
            className="disc"
          ></span>
          <span
            className="tuite"
            onClick={() => {
              window.open("https://twitter.com/SideProtocol", "_blank");
            }}
          ></span>
          <span
            className="github"
            onClick={() => {
              window.open("https://github.com/sideprotocol", "_blank");
            }}
          ></span>
        </div>
      </div>

      <div
        className="sidebar"
        style={{ display: openSidebar ? "block" : "none" }}
      >
        <div
          className="close"
          onClick={() => {
            setOpenSidebar(false);
          }}
        ></div>
        <div className="sidebarLogo"></div>
        <div className="sidebarList">
          <div
            className={
              active === 0 ? "sidebarListBox active" : "sidebarListBox"
            }
          >
            <p
              onClick={() => {
                setActive(0);
              }}
            >
              Developers
              <img
                src={arrow}
                alt=""
                className={
                  active === 0
                    ? "sidebarListBoxArrow rotate"
                    : "sidebarListBoxArrow"
                }
              />
            </p>
            <div className="sidebarTooltip">
              <div
                className="sidebarTooltipList"
                onClick={() => {
                  window.open("https://github.com/sideprotocol", "_blank");
                }}
              >
                <img src={bg11} alt="" />
                <div className="sidebarTooltipListText">
                  <h5>Github</h5>
                  <p>Explore our open source contribution</p>
                </div>
              </div>
              <div
                className="sidebarTooltipList"
                onClick={() => {
                  window.open("https://docs.side.one", "_blank");
                }}
              >
                <img src={bg12} alt="" />
                <div className="sidebarTooltipListText">
                  <h5>Documentaion</h5>
                  <p>Explore our docs and wiki</p>
                </div>
              </div>
              <div className="sidebarTooltipList">
                <img src={bg13} alt="" />
                <div className="sidebarTooltipListText">
                  <h5>
                    Validator <span className="comingBg">Coming</span>
                  </h5>
                  <p>Apply to join our validator set</p>
                </div>
              </div>
              <div className="sidebarTooltipList">
                <img src={bg14} alt="" />
                <div className="sidebarTooltipListText">
                  <h5>
                    Builders Registration{" "}
                    <span className="comingBg">Coming</span>
                  </h5>
                  <p>Apply to become of the registered builders</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              active === 1 ? "sidebarListBox active" : "sidebarListBox"
            }
          >
            <p
              onClick={() => {
                setActive(1);
              }}
            >
              Community
              <img
                src={arrow}
                alt=""
                className={
                  active === 1
                    ? "sidebarListBoxArrow rotate"
                    : "sidebarListBoxArrow"
                }
              />
            </p>
            <div className="sidebarTooltip">
              <div
                className="sidebarTooltipList"
                onClick={() => {
                  window.open("https://medium.com/@SideProtocol", "_blank");
                }}
              >
                <img src={bg21} alt="" />
                <div className="sidebarTooltipListText">
                  <h5>Blog</h5>
                  <p>Check out the blog contents from us</p>
                </div>
              </div>
              <div
                className="sidebarTooltipList"
                onClick={() => {
                  window.open(
                    "https://discord.com/invite/GN99earcFR",
                    "_blank"
                  );
                }}
              >
                <img src={bg22} alt="" />
                <div className="sidebarTooltipListText">
                  <h5>Discord</h5>
                  <p>Explore our global community</p>
                </div>
              </div>
              <div
                className="sidebarTooltipList"
                onClick={() => {
                  window.open("https://twitter.com/SideProtocol", "_blank");
                }}
              >
                <img src={bg23} alt="" />
                <div className="sidebarTooltipListText">
                  <h5>Twitter</h5>
                  <p>Stay up to date our latest social posts</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              active === 2 ? "sidebarListBox active" : "sidebarListBox"
            }
          >
            <p
              onClick={() => {
                setActive(2);
              }}
            >
              Explorer
              <img
                src={arrow}
                alt=""
                className={
                  active === 2
                    ? "sidebarListBoxArrow rotate"
                    : "sidebarListBoxArrow"
                }
              />
            </p>
            <div className="sidebarTooltip">
              <div
                className="sidebarTooltipList"
                onClick={() => {
                  window.open("https://ping.pub", "_blank");
                }}
              >
                <img src={bg31} alt="" />
                <div className="sidebarTooltipListText">
                  <h5>Ping Pub</h5>
                  <p>Explore our open source interchain explorer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="home">
        <Header />
      </div>
      <Banner />
      <div id="advisory">
        <Advisory />
      </div>
      <div id="research">
        <ResearchReport />
      </div>
      {/* <div>
        <RevolvingDoor />
      </div> */}
      {/* <PartnerNetwork /> */}
      <Interchain />
      <PortfolioCompanies />
      <div id="meetus">
        <MeetRootz />
      </div>
      <Want />
      <Subscription />
    </div>
  );
}
