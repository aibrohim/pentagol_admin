import { Button, Space } from "antd";
import { deleteLeague } from "modules/leagues/services/deleteLeague";
import { useDispatch, useSelector } from "react-redux";

export const EditButtons = () => {
  const dispatch = useDispatch();
  const { editing, deleting, editingLeague } = useSelector(
    (state) => state.leagues
  );

  const handleDeleteClick = () => dispatch(deleteLeague(editingLeague.id));

  return (
    <Space>
      <Button onClick={handleDeleteClick} loading={deleting} danger ghost>
        Delete
      </Button>
      <Button htmlType="submit" loading={editing} type="primary" ghost>
        Edit League
      </Button>
    </Space>
  );
};
