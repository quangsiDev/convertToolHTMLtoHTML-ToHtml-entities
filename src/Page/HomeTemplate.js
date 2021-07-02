import React, { useState } from "react";

import { Route, Redirect, NavLink } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  ContactsOutlined,
  AppstoreOutlined,
  FireOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "./index.css";

export default function AdminTemplate({ Component, ...props }) {
  const { Header, Sider, Content } = Layout;
  const { SubMenu } = Menu;
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <Layout style={{ minHeight: "100vh" }} className="relative z-50">
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                  <NavLink to="/admin" activeClassName="selected">
                    Dashboard
                  </NavLink>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  icon={<AppstoreOutlined />}
                  title="Category"
                >
                  <Menu.Item key="3">
                    <NavLink to="/admin-category/1" activeClassName="selected">
                      <i className="mr-3 fab fa-css3"></i> CSS
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <NavLink to="/admin-category/2" activeClassName="selected">
                      <i className="mr-3 fab fa-js"></i> Javascript
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <NavLink to="/admin-category/3" activeClassName="selected">
                      <i className="mr-3 fab fa-react"></i> React
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="8">
                    {" "}
                    <NavLink to="/admin-category/4" activeClassName="selected">
                      <i className="mr-3 fab fa-angular"></i> Angular
                    </NavLink>
                  </Menu.Item>
                </SubMenu>
                <Menu.Item key="6" icon={<UserOutlined />}>
                  <NavLink to="/admin-users" activeClassName="selected">
                    Users
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="7" icon={<ContactsOutlined />}>
                  Enterprise
                </Menu.Item>
                <Menu.Item key="8" icon={<FireOutlined />}>
                  <NavLink to="/admin-challenge" activeClassName="selected">
                    Challenge
                  </NavLink>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout bg-content">
              <Header className="site-layout-background flex justify-between items-center px-10 text-white">
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: toggle,
                  }
                )}
              </Header>
              <Content
                className="site-layout-background "
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  minHeight: 280,
                }}
              >
                <Component {...propsComponent} />
              </Content>
            </Layout>
          </Layout>
        );
      }}
    />
  );
}
