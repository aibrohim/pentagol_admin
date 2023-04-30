import {
  IconBuildingStadium,
  IconNews,
  IconUsersGroup,
  IconWorld,
} from "@tabler/icons-react";
import { Layout as AntdLayout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Sider } = AntdLayout;

const navItems = [
  {
    key: "/articles",
    icon: <IconNews />,
    label: "Articles",
  },
  {
    key: "/clubs",
    icon: <IconUsersGroup />,
    label: "Clubs",
  },
  {
    key: "/leagues",
    icon: <IconWorld />,
    label: "Leagues",
  },
  {
    key: "/matches",
    icon: <IconBuildingStadium />,
    label: "Matches",
  },
].map((item) => ({
  ...item,
  label: <Link to={`${item.key}`}>{item.label}</Link>,
}));

export const Layout = ({ children }) => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <AntdLayout hasSider style={{ height: "100vh" }}>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Menu
          mode="inline"
          items={navItems}
          defaultSelectedKeys={pathname}
          style={{ height: "100%" }}
        />
      </Sider>
      <AntdLayout
        className="site-layout"
        style={{
          marginLeft: 200,
          height: "100%",
        }}
      >
        {children}
      </AntdLayout>
    </AntdLayout>
  );
};
