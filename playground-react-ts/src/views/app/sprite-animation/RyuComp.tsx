import React from "react";
import "./style/ryuComp.scss";
import styled, { keyframes } from "styled-components";
import { SpriteAnimator } from "react-sprite-animator";

const ryuAnimation = keyframes`
  from { background-position: 0 0%; }
  to { background-position: 0 100%; }
`;
const RyuStyledComp = styled.div`
  height: 267px;
  width: 435px;
  background: url(http://bennet.org/images/codepen/ryu-sprite-demo.png);
  animation: ${ryuAnimation} 3.5s steps(45) infinite;
`;

type Props = {};

const RyuComp: React.FC<Props> = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div>
        <div id="ryu" />
        <p>Pure Css</p>
      </div>
      <div>
        <RyuStyledComp />
        <p>Styled component</p>
      </div>
      <div>
        <SpriteAnimator
          sprite="http://bennet.org/images/codepen/ryu-sprite-demo.png"
          width={435}
          height={267}
          direction="vertical"
          // fps={45/3.5}
          // fps={13}
          frameCount={45}
        />
        <p>react-sprite-animator</p>
      </div>
    </div>
  );
};

export default RyuComp;
