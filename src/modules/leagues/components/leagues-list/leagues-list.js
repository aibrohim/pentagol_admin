import { IconEdit } from "@tabler/icons-react";
import { Button, List, Spin } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditLeague } from "../edit-league";
import { leaguesActions } from "modules/leagues/store";

export const LeaguesList = () => {
  const dispatch = useDispatch();

  const { list, loading, editingLeague } = useSelector(
    (state) => state.leagues
  );

  if (loading) return <Spin />;

  return (
    <>
      <List
        dataSource={list ?? []}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <Button
                onClick={() => dispatch(leaguesActions.setEditingLeague(item))}
                size="small"
              >
                <IconEdit />
              </Button>,
            ]}
          >
            {item.name}
          </List.Item>
        )}
      ></List>
      <EditLeague
        editingLeague={editingLeague}
        onClose={() => dispatch(leaguesActions.setEditingLeague(null))}
      />
    </>
  );
};
