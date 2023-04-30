import { IconEdit, IconTrash } from "@tabler/icons-react";
import { Card } from "antd";

export const Club = ({ name, league: { name: leagueName } }) => {
  return (
    <Card
      size="small"
      title={name}
      actions={[<IconTrash key="delete" />, <IconEdit />]}
    >
      {leagueName}
    </Card>
  );
};
