import { Button, Space, Typography } from "antd";
import { ClubsList } from "./components/";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getClubs } from "./services/getClubs";

export const Clubs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClubs());
  }, []);

  return (
    <>
      <Space
        style={{ display: "flex", justifyContent: "space-between" }}
        align="baseline"
      >
        <Typography.Title level={2}>Clubs</Typography.Title>
        <Button type="primary">Add Club</Button>
      </Space>
      <ClubsList title="Hello" />
    </>
  );
};
