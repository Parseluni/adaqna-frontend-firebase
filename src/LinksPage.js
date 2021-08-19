import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import RedditIcon from "@material-ui/icons/Reddit";
import { Link } from "react-router-dom";
import "./LinksPage.css";

function LinksPage() {
  return (
    <div>
      <Header />

      <div className="app">
        <div>
          <Sidebar />
        </div>

        <div className="links_section">
          <div>
            <h2 className="ada_titles">
              <span style={{ color: "#fc1378" }}>ADA</span> Official Media
            </h2>
            
            <div className="links_official">
            <Link to="https://adadevelopersacademy.org/">
              <div>
                <img src="/adaLogo.png" alt="Ada icon" className="ada_icon" />
              </div>
            </Link>

            <Link
              to="https://www.facebook.com/adadevelopers/?ref=br_rs"
              className="icon"
            >
              <FacebookIcon className="icon" />
            </Link>
            <Link to="https://twitter.com/adaacademy?lang=en" >
              <TwitterIcon />
            </Link>

            <Link
              to="https://www.linkedin.com/company/ada-developers-academy/mycompany/"
              className="icon"
            >
              <LinkedInIcon />
            </Link>
            <Link to="https://www.instagram.com/adadevacademy/">
              <InstagramIcon />
            </Link>

            <Link
              to="https://www.youtube.com/channel/UCA8egkZmcVHktjW5oRIT-DA"
              className="icon"
            >
              <YouTubeIcon />
            </Link>
          </div>
          </div>

          <div>
            <h2 className="ada_titles">
              <span style={{ color: "#fc1378" }}>ADA</span> Unofficial Media
            </h2>

            <div className="links_official">
              <Link to="https://discord.gg/kwXMgrhvxp">
                <div>
                  <img src="/discord.png" alt="Discord icon" className="discord_icon"/>
                </div>
              </Link>
              <Link
                to="https://www.reddit.com/r/AdaDevelopersAcademy/"
                className="icon"
              >
                <RedditIcon />
              </Link>

              <Link
                to="https://www.facebook.com/groups/375662453521919"
                className="icon"
              >
                <FacebookIcon />
              </Link>
            </div>
          </div>

          <div>
            <h2 className="ada_titles">
              <span style={{ color: "#fc1378" }}>ADA</span> Related Blogs
            </h2>
            <nav className="links_official">
              <a href="https://medium.com/@sophia_h_le/applying-to-ada-developers-academy-part-1-why-and-why-not-c5b50e778a46">
                Sophia Le on Medium
              </a>
              <a href="https://medium.com/@lizeth.veraro/applying-and-getting-into-ada-developers-academy-633663c97285">
                Lizeth Veraro on Medium
              </a>
              <a href="https://www.geekwire.com/2015/the-interview-the-pressure-builds-to-get-into-ada-developers-academy/">
                Sally Moore on Geekwire
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinksPage;
