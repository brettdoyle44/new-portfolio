import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Navigation from "../components/navbar"
import Work from "../components/work"

import styled from "styled-components"
import "../images/star.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import img from "../images/vincentiu-solomon-ln5drpv_ImI-unsplash.jpg"

// const GlobalStyle = createGlobalStyle`
//   body {
//     background: black;
//   }
// `
const BackImage = styled.div`
  postion: relative;
  margin-top: -225px;
  z-index: 1;
  height: 100vh;
  background-color: #24305e;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB3aWR0aD0nNjAwJyBoZWlnaHQ9JzYwMCcgdmlld0JveD0nMCAwIDE1MCAxNTAnPg0KPGZpbHRlciBpZD0naScgeD0nMCcgeT0nMCc+DQoJPGZlQ29sb3JNYXRyaXggdHlwZT0nbWF0cml4JyB2YWx1ZXM9JzEgMCAwIDAgMCAgMCAxIDAgMCAwICAwIDAgMSAwIDAgIDAgMCAwIDAgMCcgLz4NCjwvZmlsdGVyPg0KPGZpbHRlciBpZD0nbicgeD0nMCcgeT0nMCc+DQoJPGZlVHVyYnVsZW5jZSB0eXBlPSd0dXJidWxlbmNlJyBiYXNlRnJlcXVlbmN5PScuNycgcmVzdWx0PSdmdXp6JyBudW1PY3RhdmVzPScyJyBzdGl0Y2hUaWxlcz0nc3RpdGNoJy8+DQoJPGZlQ29tcG9zaXRlIGluPSdTb3VyY2VHcmFwaGljJyBpbjI9J2Z1enonIG9wZXJhdG9yPSdhcml0aG1ldGljJyBrMT0nMCcgazI9JzEnIGszPSctNzMnIGs0PScuMDEnIC8+DQo8L2ZpbHRlcj4NCjxyZWN0IHdpZHRoPScxMDIlJyBoZWlnaHQ9JzEwMiUnIGZpbGw9JyMyNDMwNWUnLz4NCjxyZWN0IHg9Jy0xJScgeT0nLTElJyB3aWR0aD0nMTAyJScgaGVpZ2h0PScxMDIlJyBmaWxsPScjZmZmZmZmJyBmaWx0ZXI9J3VybCgjbiknIG9wYWNpdHk9JzEnLz4NCjxyZWN0IHg9Jy0xJScgeT0nLTElJyB3aWR0aD0nMTAyJScgaGVpZ2h0PScxMDIlJyBmaWxsPScjMjQzMDVlJyBmaWx0ZXI9J3VybCgjaSknIG9wYWNpdHk9JzEnLz4NCjwvc3ZnPg==");
`

const StarContainer = styled.div`
  width: 100%;
  height: 100%;
  transform: rotateZ(45deg);
`

const HiHeader = styled.div`
  font-family: "Ubuntu", sans-serif;
  font-size: 60px;
  line-height: 60px;
  position: relative;
  text-transform: uppercase;
  top: 25vh;
  text-align: center;
  color: white;
  font-weight: 900;
  z-index: 2;
`

const ContentOne = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-size: 26px;
  font-weight: 400;
`

const MainButton = styled.button`
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  font-size: 18px;
  border: 3px solid #fff;
  border-radius: 15px;
  text-transform: uppercase;
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
    <HiHeader>
      hello and welcome
      <br />
      <ContentOne>
        my name is <strong>brett</strong> and I build things with code.
      </ContentOne>
      <MainButton>Get To Know Me</MainButton>
    </HiHeader>

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
    <Work />
  </div>
)

export default IndexPage
