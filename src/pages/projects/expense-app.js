import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import mainImg from "../../images/Expense-App-SC-2019.png"
import "../../styles/main.css"
import { FaTimesCircle } from "react-icons/fa"

const Section = styled.div`
  height: 100vh;
  background-color: #000;
`

const MainButton = styled.button`
  position: relative;
  left: 50%;
  transform: translate(-100%);
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
    background-color: #fff;
    border-color: #fff;
    color: #f76c6c;
  }
  &:before {
    content: "";
    position: absolute;
    background: #fff;
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

const BackImage = styled.div`
  postion: absolute;
  z-index: 1;
  height: 100vh;
  opacity: 0.3;
  background-color: #000;
  background-image: url(${mainImg});
  background-repeat: no-repeat;
  background-size: cover;
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
  margin-left: 2.7em;
  width: 90%;
  color: white;
  font-size: 20px;
  font-weight: 400;
`

const Header = styled.div`
  position: absolute;
  background-color: #f76c6c;
  padding: 2em 0;
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  bottom: 0vh;
  height: 50vh;
  z-index: 2;
`

const Projects = () => (
  <div>
    <Link to="#portfolio">
      <FaTimesCircle className="exit" />
    </Link>
    <Section>
      <Header>
        <Welcome>Expense App</Welcome>
        <ContentOne>
          The expense app is a single page application that allows you to keep
          track of daily expenses. It comes complete with filtering and sorting.
          It was built using React, Redux, Firebase, Express, Material UI, and
          Styled Components.
        </ContentOne>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://bd-expense-app.herokuapp.com/"
        >
          <MainButton style={{ marginRight: "10px" }}>Deployed App</MainButton>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/brettdoyle44/expense-app"
        >
          <MainButton style={{ marginLeft: "10px" }}>Main Repo</MainButton>
        </a>
      </Header>
      <BackImage />
    </Section>
  </div>
)

export default Projects
