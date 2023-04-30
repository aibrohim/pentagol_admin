import { Button, Space, Typography } from "antd";
import { ClubsList } from "./components/";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getClubs } from "./services/getClubs";
import { ClubModal } from "./components/club-modal";
import { AddClub } from "./components/add-club";
import { getLeagues } from "modules/leagues/services";

export const Clubs = () => {
  const dispatch = useDispatch();

  const [isAddOpen, setAddOpen] = useState(false);

  useEffect(() => {
    dispatch(getClubs());
    dispatch(getLeagues());
  }, []);

  return (
    <>
      <Space
        style={{ display: "flex", justifyContent: "space-between" }}
        align="baseline"
      >
        <Typography.Title level={2}>Clubs</Typography.Title>
        <Button onClick={() => setAddOpen(true)} type="primary">
          Add Club
        </Button>
      </Space>
      <ClubsList title="Hello" />

      <AddClub open={isAddOpen} onClose={() => setAddOpen(false)} />
    </>
  );
};
