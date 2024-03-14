import { styled } from "styled-components";

const widthHex = 200;
const heighHex = (2 * widthHex) / Math.sqrt(3);
const gapHex = 2;

const LoaderDivStyle = styled.div`
  border: 1px solid red;
  scale: 1;
  &.socket {
    position: fixed;
    z-index: 20;
    width: 100vw;
    height: 100vh;
    /* background-color: #333333; */
    background-color: white;

    /* height = (30vmax/root3) */

    .hex-brick {
      background: #000000;
      /* width: 30px;
      height: 17px; */
      /* height: calc(2.5vmax/1.732); */
      /* height: calc(30px/1.732); */
      width: ${widthHex}px;
      height: ${heighHex / 2}px;
      border-radius: ${widthHex * 0.01}px;
      position: absolute;
      /* top: 5px; */
      top: ${heighHex / 6}px;
      animation-name: fade00;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      -webkit-animation-name: fade00;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
    }

    .h2 {
      transform: rotate(60deg);
      -webkit-transform: rotate(60deg);
    }

    .h3 {
      transform: rotate(-60deg);
      -webkit-transform: rotate(-60deg);
    }

    .gel {
      /* width: 30px;
      height: 30px; */
      width: ${widthHex}px;
      aspect-ratio: 1;
      transition: all 0.3s;
      -webkit-transition: all 0.3s;
      position: absolute;
      top: 50%;
      left: 50%;
      /* border: 1px solid green; */
    }

    .center-gel {
      // margin-left & top = width/2
      /* margin-left: -15px;
      margin-top: -15px; */
      margin-left: ${-widthHex / 2}px;
      margin-top: ${-heighHex / 2}px;
      animation-name: pulse00;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      -webkit-animation-name: pulse00;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
    }

    .c1 {
      /* display: none; */
      margin-left: ${widthHex / 2}px;
      margin-top: ${-heighHex / 2}px;
    }

    .c2 {
      /* display: none; */
      margin-left: ${widthHex * 0}px;
      margin-top: ${-heighHex / 2 - (heighHex * 3) / 4}px;
    }

    .c3 {
      /* display: none; */
      margin-left: -${widthHex * 1}px;
      margin-top: ${-heighHex / 2 - (heighHex * 3) / 4}px;
    }

    .c4 {
      /* display: none; */
      margin-left: -${widthHex / 2 + widthHex}px;
      margin-top: ${-heighHex / 2}px;
    }

    .c5 {
      /* display: none; */
      margin-left: -${widthHex * 1}px;
      margin-top: ${heighHex / 4}px;
    }

    .c6 {
      /* display: none; */
      margin-left: ${widthHex * 0}px;
      margin-top: ${heighHex / 4}px;
    }

    .r1 {
      animation-name: pulse00;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-delay: 0.2s;
      -webkit-animation-name: pulse00;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-delay: 0.2s;
    }

    .r2 {
      animation-name: pulse00;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-delay: 0.4s;
      -webkit-animation-name: pulse00;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-delay: 0.4s;
    }

    .r3 {
      animation-name: pulse00;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-delay: 0.6s;
      -webkit-animation-name: pulse00;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-delay: 0.6s;
    }

    .r1 > .hex-brick {
      animation-name: fade00;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-delay: 0.2s;
      -webkit-animation-name: fade00;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-delay: 0.2s;
    }

    .r2 > .hex-brick {
      animation-name: fade00;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-delay: 0.4s;
      -webkit-animation-name: fade00;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-delay: 0.4s;
    }

    .r3 > .hex-brick {
      animation-name: fade00;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-delay: 0.6s;
      -webkit-animation-name: fade00;
      -webkit-animation-duration: 2s;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-delay: 0.6s;
    }

    @keyframes pulse00 {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }

      50% {
        -webkit-transform: scale(0.01);
        transform: scale(0.01);
      }

      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }

    @keyframes fade00 {
      0% {
        background: #252525;
      }

      50% {
        background: #000000;
      }

      100% {
        background: #353535;
      }
    }
  }
`;

const HexagonalIndex = () => {
  const HexagonalBlock = () => {
    return (
      <>
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </>
    );
  };

  const HexagonalRow = ({ row }: { row: number }) => {
    const centerIndex = [...Array(row * 6).keys()];
    const startIndex = ((row - 1) * (row - 1 + 1) * 6) / 2;
    return centerIndex.map((index) => (
      <div
        className={`gel c${startIndex + index + 1} r${row}`}
        key={`row-${row}-${index}`}
      >
        <HexagonalBlock />
      </div>
    ));
  };

  return (
    <LoaderDivStyle className="socket">
      <div className="gel center-gel">
        <HexagonalBlock />
      </div>

      {/* {[...Array(3).keys()].map(row => 
            <HexagonalRow row={row+1} />
          )} */}

      <HexagonalRow row={1} />
    </LoaderDivStyle>
  );
};

export default HexagonalIndex;
