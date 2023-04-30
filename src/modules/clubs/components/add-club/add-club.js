import { useDispatch } from "react-redux";
import { ClubModal } from "../club-modal";
import { AddButtons } from "../add-buttons";
import { addClub } from "modules/clubs/services/addClub";

export const AddClub = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const handleFormSubmit = (values) => {
    dispatch(addClub(values));
  };

  return (
    <ClubModal
      onSubmit={handleFormSubmit}
      title="Add Club"
      open={open}
      onClose={onClose}
      buttons={<AddButtons />}
    />
  );
};
