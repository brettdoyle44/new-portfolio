import React from "react"
import styled from "styled-components"
import { FaCloudDownloadAlt } from "react-icons/fa"

const Section = styled.div`
  height: 60vh;
  background-color: #fff;
`

const Header = styled.div`
  background-color: #fff;
  padding: 2em 0;
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`

const Welcome = styled.h1`
  font-family: "Ubuntu", sans-serif;
  text-align: center;
  font-size: 60px;
  line-height: 60px;
  text-transform: uppercase;
  color: #24305e;
  font-weight: 900;
`

const ContentOne = styled.p`
  font-family: "Ubuntu", sans-serif;
  text-align: center;
  margin-left: 2.7em;
  width: 90%;
  color: #24305e;
  font-size: 20px;
  font-weight: 400;
`

const MainButton = styled.button`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  background-color: rgba(0, 0, 0, 0);
  font-size: 18px;
  border: 3px solid #24305e;
  border-radius: 5px;
  text-transform: uppercase;
  padding: 10px;
  overflow: hidden;
  color: #24305e;
  width: 250px;
  cursor: pointer;
  transition: 0.08s ease-in;
  -o-transition: 0.08s ease-in;
  -ms-transition: 0.08s ease-in;
  -moz-transition: 0.08s ease-in;
  -webkit-transition: 0.08s ease-in;
  &:hover {
    background-color: #24305e;
    border-color: #24305e;
    color: #f76c6c;
  }
  &:before {
    content: "";
    position: absolute;
    background: #24305e;
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

const About = () => (
  <div>
    <Section>
      <Header>
        <Welcome>About Me</Welcome>
        <ContentOne>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </ContentOne>
        <MainButton>
          <FaCloudDownloadAlt
            style={{
              fontSize: "1.5em",
              marginRight: "5px",
              verticalAlign: "top",
            }}
          />{" "}
          Download Resume
        </MainButton>
      </Header>
    </Section>
  </div>
)

export default About
