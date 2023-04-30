import { Button } from "antd";
import { useSelector } from "react-redux";

export const AddButtons = () => {
  const adding = useSelector((state) => state.clubs.adding);

  return (
    <Button loading={adding} htmlType="submit">
      Add League
    </Button>
  );
};
