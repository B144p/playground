import { Card, Col, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import GlassCard from "../../components/GlassCard";
import { selectedProject } from "../../slices/project/project.slice";

type Props = {};

type IProject = {
  title: string;
  key: string;
};

export const OpacityColorHex = (color: string, opacity: number) => {
  return "#" + color + Math.floor(opacity * 256).toString(16);
};

const projectList: IProject[] = [
  { title: "Stacking Ring", key: "stacking-ring" },
  { title: "Sprite", key: "sprite-sheet" },
  { title: "React spring", key: "react-spring" },
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
      <GlassCard minHeight="80%" maxWidth="960px">
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
