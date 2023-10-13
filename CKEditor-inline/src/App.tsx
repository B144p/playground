import BalloonEditorComp from "./testPage/BalloonEditorComp";
import { Space, Card } from "antd";
import { styled } from "styled-components";
import LexicalEditorComp from "./testPage/LexicalEditorComp";
import RemirrorEditorComp from "./testPage/RemirrorEditorComp";
import TooltipEditorComp from "./testPage/TooltipEditorComp";

const CardStyled = styled(Card)`
  & .my-balloon-editor .ck {
    /* border: 1px solid red; */
    width: 80%;
  }
`;

const App = () => {
  return (
    <div
      style={{
        width: "80vw",
        height: "80vh",
        // border: "1px solid black",
      }}
    >
      <Space
        direction="vertical"
        style={{
          // border: '1px solid black'
        }}
      >
        {/* <CardStyled title="Inline"><BalloonEditorComp /></CardStyled> */}
        {/* <CardStyled title="Inline"><LexicalEditorComp /></CardStyled> */}
        {/* <CardStyled title="Inline"><RemirrorEditorComp /></CardStyled> */}
        <CardStyled title="Inline"><TooltipEditorComp /></CardStyled>
      </Space>
    </div>
  );
};

export default App;
