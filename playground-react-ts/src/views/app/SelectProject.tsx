import { Card, Col, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { selectedProject } from "../../slices/project/project.slice";

type Props = {};

type IProject = {
  title: string;
  key: string;
};

const OpacityColorHex = (color: string, opacity: number) => {
  return "#" + color + Math.floor(opacity * 256).toString(16);
};

const GlassCard = styled(Card)`
  width: min(100%, 960px);
  min-height: 80%;
  position: absolute;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  box-shadow: 0 4px 30px ${OpacityColorHex("000000", 0.1)};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const projectList: IProject[] = [
  { title: "Stacking Ring", key: "stacking-ring" },
  { title: "Sprite", key: "sprite-sheet" },
  // { title: "Empty", key: "" },
];

const SelectProject: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const onSelectProject = (key: string) => {
    dispatch(selectedProject(key));
  };

  return (
    <Row
      style={{
        width: "90%",
        margin: "2rem",
        display: "flex",
        justifyContent: "center",
      }}
      justify="center"
    >
      <h1 style={{ fontSize: "10rem" }}>Test Text</h1>
      <GlassCard>
        <h1>Please select your project.</h1>
        <Row gutter={[8, 8]}>
          {projectList.map((item) => {
            return (
              <Col key={item.key} xs={24} sm={12} md={8} lg={6}>
                <Card
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => onSelectProject(item.key)}
                >
                  {item.title}
                </Card>
              </Col>
            );
          })}
        </Row>
      </GlassCard>
    </Row>
  );
};

export default SelectProject;
