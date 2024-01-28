import { BackwardFilled, HomeFilled } from "@ant-design/icons";
import { FloatButton, Layout } from "antd";
import PropTypes from "prop-types";
import { FC, ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { unSelectedProject } from "../slices/project/project.slice";

const { Content } = Layout;

interface BaseLayoutProps {
  children?: ReactNode;
}

const ReactSpringLayout: FC<BaseLayoutProps> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { selected } = useSelector((state: any) => state.project);

  return (
    <Layout
      style={{
        borderRadius: 8,
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      <Content
        style={{
          minHeight: 120,
          lineHeight: "120px",
          color: "#fff",
          backgroundColor: "#6496C8",
        }}
      >
        <Outlet />
      </Content>
      <footer
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translate(-50%)",
        }}
      >
        SwapDynamo Corporation © 2024
      </footer>
      {selected && selected !== "null" && (
        <FloatButton
          shape="circle"
          icon={<BackwardFilled />}
          tooltip={"Select Project"}
          onClick={() => {
            pathname === "/" ? dispatch(unSelectedProject()) : navigate(-1);
          }}
          style={{
            top: "3rem",
            left: "3rem",
          }}
        />
      )}
      <FloatButton.Group trigger="hover">
        {selected && selected !== "null" && (
          <FloatButton
            shape="circle"
            icon={<HomeFilled />}
            tooltip={"Select Project"}
            onClick={() => dispatch(unSelectedProject())}
            style={{
              top: "3rem",
              left: "3rem",
            }}
          />
        )}
      </FloatButton.Group>
    </Layout>
  );
};

ReactSpringLayout.propTypes = {
  children: PropTypes.node,
};

export default ReactSpringLayout;
