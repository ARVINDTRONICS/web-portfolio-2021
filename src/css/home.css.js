import { css } from "@emotion/core"
import mediaQueryGenerator from "../utils/mediaQGen"

const [media52Dot5em, media36em] = mediaQueryGenerator([
  { type: "min", size: "52.5" },
  { type: "max", size: "36" },
])
const styles = {
  blackColor: css`
    color: #000;
  `,
  dataSection: css`
    height: 100%;
    color: #fff;
  `,
  dataContainer: css`
    margin: 0 auto;
    padding: 0 3rem;
    max-width: 1000px;
    height: 100%;
  `,
  dataContent: css`
    position: relative;
    top: 20%;
    ${media36em} {
      h1,
      h2 {
        font-size: 1.5em;
        text-align: center;
      }
    }
    .Typewriter {
      font-size: 1.5em;
      ${media36em} {
        font-size: 1em;
      }
    }
  `,
  dataTopbar: css`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    height: 80px;
    z-index: 1;
    p {
      float: left;
      line-height: 0px;
      font-size: 0.74rem;
      font-family: sans-serif;
      padding: 39.5px 0;
      font-weight: 700;
    }
  `,
}

export default styles
