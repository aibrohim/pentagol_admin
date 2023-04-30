import { Space, Typography } from "antd";
import { PageHeader } from "components";
import { AddLeague, LeaguesList } from "./components";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getLeagues } from "./services/getLeagues";

export const Leagues = () => {
  const dispatch = useDispatch();
  const [addModalOpen, setAddModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getLeagues());
  }, []);

  const handleAddClick = () => {
    setAddModalOpen(true);
  };

  return (
    <>
      <PageHeader title="Leagues" onAddClick={handleAddClick} />

      <LeaguesList />

      <AddLeague open={addModalOpen} onClose={() => setAddModalOpen(false)} />
    </>
  );
};
