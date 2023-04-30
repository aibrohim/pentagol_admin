import { useDispatch } from "react-redux";
import { LeagueModal } from "../league-modal";
import { editLeague } from "modules/leagues/services/editLeague";

export const EditLeague = ({ editingLeague, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(editLeague({ ...editingLeague, ...values }));
  };

  return (
    <LeagueModal
      title="Edit"
      open={editingLeague}
      onClose={onClose}
      initialValues={editingLeague}
      onSubmit={handleSubmit}
    />
  );
};
