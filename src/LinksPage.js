import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
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
              <span style={{ color: "#fc1378" }}>ADA</span> - <em>Related Blogs</em>
            </h2>
            <nav className="links_official">
              <a href="https://medium.com/@sophia_h_le/applying-to-ada-developers-academy-part-1-why-and-why-not-c5b50e778a46" rel="noreferrer" target="_blank">
                <img src="/Sophia.png" alt="Sophia Le blog on Medium" className="blog_icon" />
              </a>
              <a href="https://medium.com/@lizeth.veraro/applying-and-getting-into-ada-developers-academy-633663c97285" rel="noreferrer" target="_blank">
              <img src="/Lizeth.png" alt="Lizeth Veraro blog on Medium" className="blog_icon" />
              </a>
              <a href="https://www.geekwire.com/2015/the-interview-the-pressure-builds-to-get-into-ada-developers-academy/" rel="noreferrer" target="_blank">
                <img src="/Sally.png" alt="Sally Moore blog on Geekwire" className="blog_icon" />
              </a>
            </nav>
          </div>

          <div>
            <h2 className="ada_titles">
              <span style={{ color: "#fc1378" }}>ADA</span> - <em>Official Media</em>
            </h2>
            
            <div className="links_official">

            <a href="https://adadevelopersacademy.org/" rel="noreferrer" target="_blank">
              <div>
                <img src="/adaLogo.png" alt="Ada icon" className="main_icon" />
              </div>
            </a>

            <a href="https://www.instagram.com/adadevacademy/" rel="noreferrer" target="_blank">
              <img src="/instagram.svg" alt="Instagram icon" className="main_icon" />
            </a>

            <a href="https://www.facebook.com/adadevelopers/?ref=br_rs" rel="noreferrer" target="_blank">
                <img src="/facebook.png" alt="Facebook icon" className="main_icon" />
            </a>

            <a href="https://twitter.com/adaacademy?lang=en" rel="noreferrer" target="_blank">
              <img src="/twitter.png" alt="Twitter icon" className="main_icon" />
            </a>

            <a href="https://www.linkedin.com/company/ada-developers-academy/mycompany/" rel="noreferrer" target="_blank">
                <img src="/linkedin.png" alt="LinkedIn icon" className="main_icon" />
            </a>

            <a href="https://www.youtube.com/channel/UCA8egkZmcVHktjW5oRIT-DA" rel="noreferrer" target="_blank">
                <img src="/youtube.png" alt="Youtube icon" className="main_icon" />
            </a>
            </div>
          </div>

          <div>
            <h2 className="ada_titles">
              <span style={{ color: "#fc1378" }}>ADA</span> - <em>Unofficial Media</em>
            </h2>

            <div className="links_official">
              <a href="https://discord.gg/kwXMgrhvxp" rel="noreferrer" target="_blank">
                <div>
                  <img src="/discord.png" alt="Discord icon" className="discord_icon"/>
                </div>
              </a>
              <a href="https://www.reddit.com/r/AdaDevelopersAcademy/" rel="noreferrer" target="_blank">
                <img src="/reddit.png" alt="Reddit icon" className="main_icon" />
              </a>

              <a href="https://www.facebook.com/groups/375662453521919" rel="noreferrer" target="_blank">
                <img src="/facebook.png" alt="Facebook icon" className="main_icon" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LinksPage;
