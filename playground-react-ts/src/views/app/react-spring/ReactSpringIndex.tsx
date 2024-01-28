import { Card, Col, Row } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import GlassCard from "../../../components/GlassCard";

type Props = {};

type IProject = {
  title: string;
  path: string;
};

const projectList: IProject[] = [
  { title: "Parallax", path: "/parallax" },
];

const ReactSpringIndex: FC<Props> = () => {
  const navigate = useNavigate();
  const onSelectProject = (path: string) => {
    navigate(path);
  };

  return (
    <GlassCard minHeight="80%" maxWidth="960px">
      <h1>Please select your project.</h1>
      <Row gutter={[8, 8]}>
        {projectList.map((item) => {
          return (
            <Col key={item.path} xs={24} sm={12} md={8} lg={6}>
              <Card
                style={{
                  cursor: "pointer",
                }}
                onClick={() => onSelectProject(item.path)}
              >
                {item.title}
              </Card>
            </Col>
          );
        })}
      </Row>
    </GlassCard>
  );
};

export default ReactSpringIndex;
