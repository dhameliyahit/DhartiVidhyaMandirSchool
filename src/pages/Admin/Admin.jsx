import React, { useState } from "react";
import {
  Layout,
  Menu,
  Table,
  Button,
  Modal,
  Form,
  Input,
  message,
} from "antd";
import {
  UserOutlined,
  FormOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const { Sider, Content } = Layout;
const { confirm } = Modal;

const initialAdmissions = [
  {
    id: 1,
    name: "Rahul Patel",
    email: "rahul@gmail.com",
    contact: "9876543210",
    standard: "10th",
    message: "Interested in admission",
  },
  {
    id: 2,
    name: "Aarti Mehta",
    email: "aarti@gmail.com",
    contact: "9087654321",
    standard: "12th",
    message: "Need more info",
  },
];

const initialUsers = [
  {
    id: 1,
    name: "Suresh Bhai",
    contact: "9876512345",
    studentName: "Ravi Suresh",
    parentName: "Suresh Kumar",
  },
  {
    id: 2,
    name: "Meena Joshi",
    contact: "9123456789",
    studentName: "Riya Joshi",
    parentName: "Manoj Joshi",
  },
];

const Admin = () => {
  const [selectedKey, setSelectedKey] = useState("admission");
  const [admissions, setAdmissions] = useState(initialAdmissions);
  const [users, setUsers] = useState(initialUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [form] = Form.useForm();

  const handleEdit = (item) => {
    setEditingItem(item);
    form.setFieldsValue(item);
    setIsModalOpen(true);
  };

  const handleDelete = (record) => {
    confirm({
      title: "Are you sure you want to delete this record?",
      icon: <ExclamationCircleOutlined />,
      onOk() {
        if (selectedKey === "admission") {
          setAdmissions((prev) => prev.filter((item) => item.id !== record.id));
        } else {
          setUsers((prev) => prev.filter((item) => item.id !== record.id));
        }
        message.success("Deleted successfully!");
      },
    });
  };

  const handleUpdate = () => {
    form.validateFields().then((values) => {
      if (selectedKey === "admission") {
        setAdmissions((prev) =>
          prev.map((item) =>
            item.id === editingItem.id ? { ...item, ...values } : item
          )
        );
      } else {
        setUsers((prev) =>
          prev.map((item) =>
            item.id === editingItem.id ? { ...item, ...values } : item
          )
        );
      }
      message.success("Updated successfully!");
      setIsModalOpen(false);
    });
  };

  const columns =
    selectedKey === "admission"
      ? [
          { title: "Name", dataIndex: "name", key: "name" },
          { title: "Email", dataIndex: "email", key: "email" },
          { title: "Mobile No", dataIndex: "contact", key: "contact" },
          { title: "Standard", dataIndex: "standard", key: "standard" },
          { title: "Message", dataIndex: "message", key: "message" },
          {
            title: "Action",
            render: (_, record) => (
              <>
                <Button onClick={() => handleEdit(record)} type="link">
                  Edit
                </Button>
                <Button danger onClick={() => handleDelete(record)} type="link">
                  Delete
                </Button>
              </>
            ),
          },
        ]
      : [
          { title: "Name", dataIndex: "name", key: "name" },
          { title: "Mobile No", dataIndex: "contact", key: "contact" },
          { title: "Student Name", dataIndex: "studentName", key: "studentName" },
          { title: "Parent's Name", dataIndex: "parentName", key: "parentName" },
          {
            title: "Action",
            render: (_, record) => (
              <>
                <Button onClick={() => handleEdit(record)} type="link">
                  Edit
                </Button>
                <Button danger onClick={() => handleDelete(record)} type="link">
                  Delete
                </Button>
              </>
            ),
          },
        ];

  return (
    <Layout className="h-screen border">
      <Sider theme="dark" width={220}>
        <div className="text-white text-center py-4 text-xl font-bold">
          Admin Panel
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={({ key }) => setSelectedKey(key)}
          items={[
            {
              key: "admission",
              icon: <FormOutlined />,
              label: "Admission Inquiry",
            },
            {
              key: "users",
              icon: <UserOutlined />,
              label: "Registered Users",
            },
          ]}
        />
      </Sider>

      <Layout>
        <Content className="p-6 bg-gray-100">
          <h2 className="text-2xl font-semibold mb-4">
            {selectedKey === "admission"
              ? "Admission Inquiries"
              : "Registered Users"}
          </h2>

          <div className="bg-white p-4 rounded shadow">
            <Table
              columns={columns}
              dataSource={selectedKey === "admission" ? admissions : users}
              rowKey="id"
              pagination={false}
            />
          </div>
        </Content>
      </Layout>

      <Modal
        title={`Edit ${selectedKey === "admission" ? "Admission" : "User"}`}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleUpdate}
        okText="Update"
      >
        <Form form={form} layout="vertical">
          {selectedKey === "admission" ? (
            <>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Enter name" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: "Enter email" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="contact"
                label="Mobile No"
                rules={[{ required: true, message: "Enter mobile number" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="standard"
                label="Standard"
                rules={[{ required: true, message: "Enter standard" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: "Enter message" }]}
              >
                <Input.TextArea rows={3} />
              </Form.Item>
            </>
          ) : (
            <>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Enter name" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="contact"
                label="Mobile No"
                rules={[{ required: true, message: "Enter mobile number" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="studentName"
                label="Student Name"
                rules={[{ required: true, message: "Enter student name" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="parentName"
                label="Parent's Name"
                rules={[{ required: true, message: "Enter parent's name" }]}
              >
                <Input />
              </Form.Item>
            </>
          )}
        </Form>
      </Modal>
    </Layout>
  );
};

export default Admin;
