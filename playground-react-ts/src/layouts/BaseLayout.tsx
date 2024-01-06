import { BackwardFilled } from "@ant-design/icons";
import { FloatButton, Layout } from "antd";
import PropTypes from "prop-types";
import { FC, ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { unSelectedProject } from "../slices/project/project.slice";

const {
  // Header,
  Content,
  // Footer,
} = Layout;

interface BaseLayoutProps {
  children?: ReactNode;
}

// const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
const BaseLayout: FC<BaseLayoutProps> = () => {
  const dispatch = useDispatch();
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
          // backgroundColor: '#DDE6ED',
          backgroundColor: "#6496C8",
          display: "flex",
          justifyContent: "center",
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
          onClick={() => dispatch(unSelectedProject())}
          style={{
            top: "3rem",
            left: "3rem",
          }}
        />
      )}
    </Layout>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node,
};

export default BaseLayout;
