import { Avatar, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";

function Customers() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(response => response.json())
      .then(result => {
        setDataSource(result.users);
        setLoading(false);
      })
      .catch(error => console.log('error', error));
    setLoading(true);
  }, []);

  return (
    <Space style={{width:"78vw"}} size={80} direction="vertical">
      <Typography.Title level={4}>Customers Contact</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "First Name",
            dataIndex: "firstName",
          },
          {
            title: "LastName",
            dataIndex: "lastName",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },

          {
            title: "address",
            dataIndex: "address",
            render: (address) => {
              return (
                <span>
                  {address.address}, {address.city}
                </span>
              );
            },
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 7,
        }}
      ></Table>
    </Space>
  );
}
export default Customers;
