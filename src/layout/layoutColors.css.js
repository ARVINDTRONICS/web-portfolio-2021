import { css } from "@emotion/core"
import bg from "../../public/assets/bg2.jpg"
import bg1 from "../../public/assets/bg3.jpg"

const styles = css`
  .e404.layout-wrapper .layout-inner {
    background: #fff;
  }
  .e404 .data-section {
    color: #000;
  }
  .aboutme.layout-wrapper .layout-inner {
    background: #eee;
  }
  .aboutme .data-section {
    color: #000;
  }
  .aboutme .hamburgercolr::before,
  .aboutme .hamburgercolr::after,
  .e404 .hamburgercolr::before,
  .e404 .hamburgercolr::after {
    background-color: #000;
  }
  .home.layout-wrapper .layout-inner {
    background: #0e0f11;
    background: #ffffff url(${Math.random() >= 0.5 ? bg : bg1}) center center
      fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .home.layout-wrapper h1,
  .home.layout-wrapper h2 {
    color: #fff;
  }
  .skill.layout-wrapper .layout-inner {
    color: #fff;
    background: #9d316e;
    background: url(${Math.random() >= 0.5 ? bg : bg1}) center center fixed,
      linear-gradient(45deg, #9d316e, #de2d3e);
    background-size: cover;
  }
  .experience.layout-wrapper .layout-inner {
    background: #3a3d98;
    background: url(${Math.random() >= 0.5 ? bg : bg1}) center center fixed,
      linear-gradient(45deg, #6f22b9, #3a3d98);
    background-size: cover;
  }
  .home .hamburgercolr::before,
  .home .hamburgercolr::after,
  .skill .hamburgercolr::before,
  .skill .hamburgercolr::after,
  .experience .hamburgercolr::before,
  .experience .hamburgercolr::after {
    background-color: #fff;
  }
  .home .btn-contact-color,
  .experience .btn-contact-color {
    color: #fff;
  }
  .aboutme .btn-contact-color,
  .e404 .btn-contact-color {
    color: #000;
  }
`

export default styles
