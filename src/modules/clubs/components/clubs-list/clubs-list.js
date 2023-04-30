import { Col, Row } from "antd";
import { Club } from "../club/club";
import { useSelector } from "react-redux";

export const ClubsList = () => {
  const clubs = useSelector((state) => state.clubs.list);

  const handleEditClick = (club) => {};

  return (
    <Row gutter={[20, 20]}>
      {clubs?.map((club) => (
        <Col key={club.id} span={6}>
          <Club key={club.id} onEditClick={handleEditClick} club={club} />
        </Col>
      ))}
    </Row>
  );
};
