import { Form, Input, Modal } from "antd";
import { useEffect } from "react";

export const LeagueModal = ({
  title,
  initialValues = {},
  open,
  onClose,
  onSubmit,
  buttons,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues?.id) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues]);

  return (
    <Modal title={title} open={open} onCancel={onClose} footer={null}>
      <Form onFinish={onSubmit} form={form} initialValues={initialValues}>
        <Form.Item
          name="name"
          label="League Name"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input name="name" placeholder="League Name" />
        </Form.Item>
        {buttons}
      </Form>
    </Modal>
  );
};
