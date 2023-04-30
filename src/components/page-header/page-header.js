import { Button, Space, Typography } from "antd";

export const PageHeader = ({ title, onAddClick }) => {
  return (
    <Space
      style={{ display: "flex", justifyContent: "space-between" }}
      align="center"
    >
      <Typography.Title level={2}>{title}</Typography.Title>
      <Button onClick={onAddClick} type="primary">
        Add {title}
      </Button>
    </Space>
  );
};
