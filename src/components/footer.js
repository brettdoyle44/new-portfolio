import React from "react"
import "../styles/social.css"
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaDiscord,
} from "react-icons/fa"
import styled from "styled-components"

const Wrapper = styled.div`
  height: 20vh;
  background-color: #f76c6c;
`

const Footer = () => (
  <div>
    <Wrapper>
      <ul>
        <li>
          <a href="#">
            <FaGithub className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaLinkedinIn className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaEnvelope className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTwitter className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaDiscord className="icon" />
          </a>
        </li>
      </ul>
    </Wrapper>
  </div>
)

export default Footer
