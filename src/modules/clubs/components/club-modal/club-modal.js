import { Form, Input, InputNumber, Modal, Select } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const ClubModal = ({
  title,
  initialValues = {},
  open,
  onClose,
  onSubmit,
  buttons,
}) => {
  const leagues = useSelector((state) => state.leagues.list);

  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues?.id) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues]);

  useEffect(() => {
    if (!open) {
      form.resetFields();
    }
  }, [open]);

  const handleFinish = (values) => {
    onSubmit({
      ...values,
      league: leagues.find((item) => item.id === values.leagueId),
    });
  };

  return (
    <Modal title={title} open={open} onCancel={onClose} footer={null}>
      <Form onFinish={handleFinish} form={form} initialValues={initialValues}>
        <Form.Item
          name="name"
          label="Club Name"
          rules={[
            {
              required: true,
              message: "Please input club name!",
            },
          ]}
        >
          <Input name="name" placeholder="Club Name" />
        </Form.Item>
        <Form.Item
          name="point"
          label="Point"
          rules={[
            {
              required: true,
              message: "Please input club name!",
            },
          ]}
        >
          <InputNumber
            style={{ display: "block", width: "100%" }}
            name="point"
            placeholder="Point"
          />
        </Form.Item>
        <Form.Item
          name="gamesPlayed"
          label="Games Played"
          rules={[
            {
              required: true,
              message: "Please input club name!",
            },
          ]}
        >
          <InputNumber
            style={{ display: "block", width: "100%" }}
            name="gamesPlayed"
            placeholder="Games Played"
          />
        </Form.Item>
        <Form.Item
          name="leagueId"
          label="League"
          rules={[
            {
              required: true,
              message: "Please select league!",
            },
          ]}
        >
          <Select
            options={leagues?.map((league) => ({
              value: league.id,
              label: league.name,
            }))}
            name="leagueId"
            placeholder="League"
          />
        </Form.Item>
        {buttons}
      </Form>
    </Modal>
  );
};
