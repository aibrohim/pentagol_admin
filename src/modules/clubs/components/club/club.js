import { IconEdit, IconTrash } from "@tabler/icons-react";
import { Button, Card } from "antd";

export const Club = ({ club, onEditClick }) => {
  const {
    name,
    league: { name: leagueName },
  } = club;

  return (
    <Card
      size="small"
      title={name}
      actions={[
        <IconTrash key="delete" />,
        <Button onClick={() => onEditClick(club)}>
          <IconEdit />
        </Button>,
      ]}
    >
      {leagueName}
    </Card>
  );
};
