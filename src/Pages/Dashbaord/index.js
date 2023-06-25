import {
  Card,
  Space,
  Statistic,
  Table,
  Typography,
  Button,
  Divider,
  Progress,
} from "antd";
import { useEffect, useState } from "react";
import moment from 'moment';

function Dashboard() {
  return (
    <Space size={20} direction="vertical">
      <Space style={{ overflow: "hidden", justifyContent: "space-between" }}>
        <Typography.Title level={3}>Partner Dashboard</Typography.Title>
        <Button style={{ display: "flex", marginLeft: "730px" }} type="primary">
          Explore Projects
        </Button>
      </Space>
      <Space>
        <p>Overview</p>
      </Space>
      <Divider style={{ marginTop: "-30px" }} />
      <Space direction="horizontal">
        <DashboardCard
          icon={<Progress type="circle" percent={80} size={8} />}
          title={"Total Projects"}
          value="284"
        />
        <DashboardCard
          icon={<Progress type="circle" percent={50} size={8} />}
          title={"Project In Progress"}
          value="123"
        />
        <DashboardCard
          icon={<Progress type="circle" percent={78} size={8} />}
          title={"Milestone Completed"}
          value="300"
        />
        <DashboardCard
          icon={<Progress type="circle" percent={70} size={8} />}
          title={"Project Completed"}
          value="50"
        />
      </Space>
      <Space>
        <Customers />
      </Space>
    </Space>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card style={{ width: "19vw" }}>
      <Space direction="horizontal">
        <Statistic title={title} value={value} />
        <Space style={{ marginLeft: "50px" }}>{icon}</Space>
      </Space>
    </Card>
  );
}

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    fetch("https://dev-api.conqt.com/api/product/Get-All-Products")
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setDataSource(result.data);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  }, []);
  
  const renderDate = (date) => {
    const formattedDate = moment(date).format('MMM DD, YYYY');
    return <span>{formattedDate}</span>;
  };

  const renderVideoLink = (link) => {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        Click me
      </a>
    );
  };
  return (
    <Space style={{ width: "78vw" }} direction="vertical">
      <Typography.Title level={4}>List of Projects</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Date",
            dataIndex: "created_at",
            render: (date) => {
              return renderDate(date);
            },
          },
          {
            title: "Project Name",
            dataIndex: "product_name",
          },
          {
            title: "Category",
            dataIndex: "category_name",
          },
          {
            title: "Status",
            dataIndex: "status",
          },
          {
            title: "Product",
            dataIndex: "product_name",
          },
          {
            title: "Video",
            dataIndex: "video_link",
            render: (link) => {
              return renderVideoLink(link);
            },
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 3,
        }}
      ></Table>
    </Space>
  );
}
export default Dashboard;
