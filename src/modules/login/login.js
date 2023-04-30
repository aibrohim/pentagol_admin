import { Button, Card, Form, Input } from "antd";
import { loginUser } from "app/slices/user/services/login";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const { loginLoading } = useSelector((state) => state.user);
  console.log(loginLoading);

  const dispatch = useDispatch();

  const handleFormSubmit = (values) => {
    dispatch(loginUser(values));
  };

  return (
    <Card style={{ margin: "40px auto", width: 400 }}>
      <Form
        onFinish={handleFormSubmit}
        name="login"
        initialValues={{ username: "cricketUser", password: "qwerty123456" }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
          name="username"
        >
          <Input name="username" />
        </Form.Item>
        <Form.Item
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
          name="password"
        >
          <Input.Password name="password" />
        </Form.Item>
        <Button loading={loginLoading} htmlType="submit">
          Login
        </Button>
      </Form>
    </Card>
  );
};
