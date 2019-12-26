import React from "react"

import Navigation from "../components/navbar"
import Work from "../components/work"
import About from "../components/about"
import Footer from "../components/footer"

import { Link } from "react-scroll"
import styled, { createGlobalStyle } from "styled-components"
import "../styles/star.css"
import "bootstrap/dist/css/bootstrap.min.css"

const GlobalStyle = createGlobalStyle`
  background-color: #e7f0ff;
`

const BackImage = styled.div`
  postion: absolute;
  z-index: 1;
  height: 100vh;
  background-color: #24305e;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB3aWR0aD0nNjAwJyBoZWlnaHQ9JzYwMCcgdmlld0JveD0nMCAwIDE1MCAxNTAnPg0KPGZpbHRlciBpZD0naScgeD0nMCcgeT0nMCc+DQoJPGZlQ29sb3JNYXRyaXggdHlwZT0nbWF0cml4JyB2YWx1ZXM9JzEgMCAwIDAgMCAgMCAxIDAgMCAwICAwIDAgMSAwIDAgIDAgMCAwIDAgMCcgLz4NCjwvZmlsdGVyPg0KPGZpbHRlciBpZD0nbicgeD0nMCcgeT0nMCc+DQoJPGZlVHVyYnVsZW5jZSB0eXBlPSd0dXJidWxlbmNlJyBiYXNlRnJlcXVlbmN5PScuNycgcmVzdWx0PSdmdXp6JyBudW1PY3RhdmVzPScyJyBzdGl0Y2hUaWxlcz0nc3RpdGNoJy8+DQoJPGZlQ29tcG9zaXRlIGluPSdTb3VyY2VHcmFwaGljJyBpbjI9J2Z1enonIG9wZXJhdG9yPSdhcml0aG1ldGljJyBrMT0nMCcgazI9JzEnIGszPSctNzMnIGs0PScuMDEnIC8+DQo8L2ZpbHRlcj4NCjxyZWN0IHdpZHRoPScxMDIlJyBoZWlnaHQ9JzEwMiUnIGZpbGw9JyMyNDMwNWUnLz4NCjxyZWN0IHg9Jy0xJScgeT0nLTElJyB3aWR0aD0nMTAyJScgaGVpZ2h0PScxMDIlJyBmaWxsPScjZmZmZmZmJyBmaWx0ZXI9J3VybCgjbiknIG9wYWNpdHk9JzEnLz4NCjxyZWN0IHg9Jy0xJScgeT0nLTElJyB3aWR0aD0nMTAyJScgaGVpZ2h0PScxMDIlJyBmaWxsPScjMjQzMDVlJyBmaWx0ZXI9J3VybCgjaSknIG9wYWNpdHk9JzEnLz4NCjwvc3ZnPg==");
`

const StarContainer = styled.div`
  width: 80%;
  height: 90%;
  transform: rotateZ(45deg);
`

const Header = styled.div`
  position: absolute;
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  top: 25vh;
  z-index: 2;
`

const Welcome = styled.h1`
  font-family: "Ubuntu", sans-serif;
  text-align: center;
  font-size: 60px;
  line-height: 60px;
  text-transform: uppercase;
  color: white;
  font-weight: 900;
`

const ContentOne = styled.p`
  font-family: "Ubuntu", sans-serif;
  text-align: center;
  color: white;
  text-transform: uppercase;
  font-size: 26px;
  font-weight: 400;
`

const MainButton = styled.button`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  background-color: rgba(0, 0, 0, 0);
  font-size: 18px;
  border: 3px solid #fff;
  border-radius: 5px;
  text-transform: uppercase;
  padding: 10px;
  overflow: hidden;
  color: #fff;
  width: 250px;
  cursor: pointer;
  transition: 0.08s ease-in;
  -o-transition: 0.08s ease-in;
  -ms-transition: 0.08s ease-in;
  -moz-transition: 0.08s ease-in;
  -webkit-transition: 0.08s ease-in;
  &:hover {
    background-color: #f76c6c;
    border-color: #f76c6c;
  }
  &:before {
    content: "";
    position: absolute;
    background: #f76c6c;
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    z-index: -1;
    -webkit-transition: top 0.09s ease-in;
  }
  &:hover:before {
    top: 0;
  }
`

const IndexPage = () => (
  <div>
    <Header>
      <Welcome>hello and welcome</Welcome>
      <ContentOne>
        my name is <strong>brett</strong> and I build things with code.
      </ContentOne>
      <MainButton>
        <Link
          to="navigation"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
        >
          See My Work
        </Link>
      </MainButton>
    </Header>

    <BackImage>
      <StarContainer>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </StarContainer>
    </BackImage>
    <Navigation />
    <div id="portfolio" />
    <Work />
    <About />
    <Footer />
    <GlobalStyle />
  </div>
)

export default IndexPage
