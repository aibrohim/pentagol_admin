import { Col, Row } from "antd";
import { Club } from "../club/club";
import { useSelector } from "react-redux";

export const ClubsList = () => {
  const clubs = useSelector((state) => state.clubs.list);

  return (
    <Row gutter={[20, 20]}>
      {clubs?.map((club) => (
        <Col span={6}>
          <Club key={club.id} {...club} />
        </Col>
      ))}
    </Row>
  );
};
