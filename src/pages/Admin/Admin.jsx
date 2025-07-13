// AdminPanel.jsx
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
import { FaUser, FaWpforms } from "react-icons/fa";


const { Sider, Content } = Layout;

const initialAdmissions = [
  { id: 1, name: "Rahul Patel", contact: "9876543210", course: "BCA" },
  { id: 2, name: "Aarti Mehta", contact: "9087654321", course: "MBA" },
];

const initialUsers = [
  { id: 1, email: "test1@example.com", role: "Admin" },
  { id: 2, email: "demo2@example.com", role: "User" },
];

const AdminPanel = () => {
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
        { title: "Contact", dataIndex: "contact", key: "contact" },
        { title: "Course", dataIndex: "course", key: "course" },
        {
          title: "Action",
          render: (_, record) => (
            <Button onClick={() => handleEdit(record)} type="link">
              Edit
            </Button>
          ),
        },
      ]
      : [
        { title: "Email", dataIndex: "email", key: "email" },
        { title: "Role", dataIndex: "role", key: "role" },
        {
          title: "Action",
          render: (_, record) => (
            <Button onClick={() => handleEdit(record)} type="link">
              Edit
            </Button>
          ),
        },
      ];

  return (
    <Layout className="min-h-screen">
      {/* Sidebar */}
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

      {/* Main Content */}
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
              dataSource={
                selectedKey === "admission" ? admissions : users
              }
              rowKey="id"
              pagination={false}
            />
          </div>
        </Content>
      </Layout>

      {/* Edit Modal */}
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
                name="contact"
                label="Contact"
                rules={[{ required: true, message: "Enter contact number" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="course"
                label="Course"
                rules={[{ required: true, message: "Enter course" }]}
              >
                <Input />
              </Form.Item>
            </>
          ) : (
            <>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: "Enter email" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="role"
                label="Role"
                rules={[{ required: true, message: "Enter role" }]}
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

export default AdminPanel;
