import React, { useState } from "react";

import { Route, Redirect, NavLink } from "react-router-dom";
import { Modal, Button } from "antd";
import imgType1 from "../assets/type1.PNG";
import imgType2 from "../assets/type2.PNG";
import imgType3 from "../assets/type3.PNG";
import imgType4 from "../assets/type4.PNG";
// import Navbar from "../../../components/Navbar/Navbar";
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
// import "./index.css";

export default function HomeTemplate({ Component, ...props }) {
  const { Header, Sider, Content } = Layout;
  const { SubMenu } = Menu;
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  // start modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imgExample, setImgExample] = useState(imgType1);

  const handelSetImgExample = (value) => {
    setImgExample(value);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // end modal
  console.log("window.location.pathname", window.location.pathname);
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <Layout style={{ minHeight: "100vh" }} className="relative z-50">
            <Sider
              style={
                {
                  // overflow: "auto",
                  // height: "100vh",
                  // position: "fixed",
                  // left: 0,
                }
              }
              trigger={null}
              collapsible
              collapsed={collapsed}
              collapsedWidth={0}
            >
              <div className="logo" />
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}
                className="font-medium rounded-sm ring-blue-400"
              >
                <Menu.Item key="1" className="">
                  <NavLink to="/data/fill_inblank" activeClassName="selected">
                    <i className="mr-3 fab fa-css3"></i>Fill_inblank
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="4">
                  <NavLink
                    to="/data/fill_inblank_html_css"
                    activeClassName="selected"
                  >
                    <i className="mr-3 fab fa-js"></i> Fill_inblank_html_css
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="8">
                  {" "}
                  <NavLink
                    to="/data/fill_inblank_input"
                    activeClassName="selected"
                  >
                    <i className="mr-3 fab fa-angular"></i>Fill_inblank_input
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="5">
                  <NavLink
                    to="/data/multiple_choice"
                    activeClassName="selected"
                  >
                    <i className="mr-3 fab fa-react"></i> Multiple_choice
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="6">
                  <NavLink
                    to="/data/multiple_choice_2"
                    activeClassName="selected"
                  >
                    <i className="mr-3 fab fa-react"></i> Multiple_choice 2
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

                <>
                  <Button
                    className="bg-yellow-400 font-medium hover:text-blue-900"
                    onClick={showModal}
                  >
                    View Example
                  </Button>
                  <Modal
                    style={{ top: 20 }}
                    className="w-4/5"
                    title="Example"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                      <Button key="submit" type="primary" onClick={handleOk}>
                        Ok
                      </Button>,
                    ]}
                  >
                    <img className="w-full" src={imgExample} alt="" />
                  </Modal>
                </>
              </Header>
              <Content
                className="site-layout-background "
                style={{
                  padding: 20,
                  minHeight: 280,
                }}
              >
                <Component
                  {...propsComponent}
                  handelSetImgExample={handelSetImgExample}
                />
              </Content>
            </Layout>
          </Layout>
        );
      }}
    />
  );
}
