import { useDispatch } from "react-redux";
import { LeagueModal } from "../league-modal";
import { AddButtons } from "../add-buttons";
import { addLeague } from "modules/leagues/services/addLeague";

export const AddLeague = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const handleFormSubmit = (values) => {
    dispatch(addLeague(values));
  };

  return (
    <LeagueModal
      onSubmit={handleFormSubmit}
      title="Add League"
      open={open}
      onClose={onClose}
      buttons={<AddButtons />}
    />
  );
};
