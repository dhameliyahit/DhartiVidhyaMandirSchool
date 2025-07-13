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
  Popconfirm,
} from "antd";
import { FaUser, FaWpforms } from "react-icons/fa";

const { Sider, Content } = Layout;

const initialAdmissions = [
  {
    id: 1,
    name: "Jay Patel",
    email: "jay@example.com",
    phone: "9876543210",
    standard: "10th",
    message: "Interested in science stream",
    comment: "",
    createdAt: new Date(),
  },
];

const initialUsers = [
  {
    id: 1,
    name: "Parent User",
    mobile: "9123456789",
    studentName: "Dhruv",
    parentName: "Kiran Patel",
    comment: "",
  },
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
      const updatedItem = { ...editingItem, ...values };

      if (selectedKey === "admission") {
        setAdmissions((prev) =>
          prev.map((item) =>
            item.id === editingItem.id ? updatedItem : item
          )
        );
      } else {
        setUsers((prev) =>
          prev.map((item) =>
            item.id === editingItem.id ? updatedItem : item
          )
        );
      }

      console.log("🔄 Updated:", updatedItem);
      message.success("Updated successfully!");
      setIsModalOpen(false);
    });
  };

  const handleDelete = (id) => {
    if (selectedKey === "admission") {
      setAdmissions((prev) => prev.filter((item) => item.id !== id));
    } else {
      setUsers((prev) => prev.filter((item) => item.id !== id));
    }
    message.success("Deleted successfully!");
  };

  const columns =
    selectedKey === "admission"
      ? [
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Email", dataIndex: "email", key: "email" },
        { title: "Phone", dataIndex: "phone", key: "phone" },
        { title: "Standard", dataIndex: "standard", key: "standard" },
        { title: "Message", dataIndex: "message", key: "message" },
        { title: "Comment", dataIndex: "comment", key: "comment" },
        {
          title: "Action",
          render: (_, record) => (
            <div className="flex flex-col sm:flex-row gap-2">
              <Button onClick={() => handleEdit(record)} type="link">
                Edit
              </Button>
              <Popconfirm
                title="Are you sure you want to delete?"
                onConfirm={() => handleDelete(record.id)}
                okText="Yes"
                cancelText="No"
              >
                <Button type="link" danger>
                  Delete
                </Button>
              </Popconfirm>
            </div>
          ),
        },
      ]
      : [
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Mobile", dataIndex: "mobile", key: "mobile" },
        { title: "Student Name", dataIndex: "studentName", key: "studentName" },
        { title: "Parent Name", dataIndex: "parentName", key: "parentName" },
        { title: "Comment", dataIndex: "comment", key: "comment" },
        {
          title: "Action",
          render: (_, record) => (
            <div className="flex flex-col sm:flex-row gap-2">
              <Button onClick={() => handleEdit(record)} type="link">
                Edit
              </Button>
              <Popconfirm
                title="Are you sure you want to delete?"
                onConfirm={() => handleDelete(record.id)}
                okText="Yes"
                cancelText="No"
              >
                <Button type="link" danger>
                  Delete
                </Button>
              </Popconfirm>
            </div>
          ),
        },
      ];

  return (
    <Layout className=" h-screen">
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
              icon: <FaWpforms />,
              label: "Admission Inquiry",
            },
            {
              key: "users",
              icon: <FaUser />,
              label: "Registered Users",
            },
          ]}
        />
      </Sider>

      {/* Main Content */}
      <Layout>
        <Content className="p-4 sm:p-6 bg-gray-100">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            {selectedKey === "admission"
              ? "Admission Inquiries"
              : "Registered Users"}
          </h2>

          <div className="bg-white p-4 rounded shadow overflow-auto">
            <Table
              columns={columns}
              dataSource={selectedKey === "admission" ? admissions : users}
              rowKey="id"
              pagination={{ pageSize: 5 }}
              scroll={{ x: true }}
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
              <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="standard" label="Standard" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="message" label="Message" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="comment" label="Comment">
                <Input.TextArea rows={3} />
              </Form.Item>
            </>
          ) : (
            <>
              <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name="mobile" label="Mobile" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item
                name="studentName"
                label="Student Name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="parentName"
                label="Parent Name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item name="comment" label="Comment">
                <Input.TextArea rows={3} />
              </Form.Item>
            </>
          )}
        </Form>
      </Modal>
    </Layout>
  );
};

export default AdminPanel;
