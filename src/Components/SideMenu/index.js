import {
  AppstoreOutlined,
  UserOutlined,
  ProjectOutlined,
  PlusSquareOutlined,
  SolutionOutlined,
  PropertySafetyOutlined,
  EditOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <div className="SideMenuHeading">
        <h2>CONQT</h2>
      </div>
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Vendor Dashbaord",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Projects",
            icon: <ProjectOutlined />,
            key: "/Projects",
          },
          {
            label: "Opporunity",
            icon: <PlusSquareOutlined />,
            key: "/Opporunity",
          },
          {
            label: "Customers Details",
            key: "/Customers",
            icon: <UserOutlined />,
          },
          {
            label: "Solution",
            icon: <SolutionOutlined />,
            key: "/Solution",
          },
          {
            label: "My Proposals",
            icon: <PropertySafetyOutlined />,
            key: "/MyProposals",
          },
          {
            label: "My Profile",
            icon: <EditOutlined />,
            key: "/MyProfile",
          },
          {
            label: "Logout",
            icon: <LogoutOutlined />,
            key: "/Logout",
          }
        ]}
      >
      </Menu>
    </div>
  );
}
export default SideMenu;
