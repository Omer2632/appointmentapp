import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { TiDelete } from "react-icons/ti";

const AppointmentList = ({ apps, setApps }) => {
  console.log(apps);
  const handleDelete = (id) => {
    setApps(apps.filter((item) => item.id !== id));
  };
  const handleDoubleClick = (id) => {
    setApps(
      apps.map((item) =>
        item.id == id ? { ...item, consulted: !item.consulted } : item
      )
    );
  };
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Randevu Listesi
      </h3>
      {apps.length < 1 && <img src="./img/porsche.jpg" />}
      {apps.map(({ id, costomer, consulted, executive, day }) => (
        <div
          key={id}
          className={consulted ? "appointments consulted" : "appointments"}
          onDoubleClick={() => handleDoubleClick(id)}
        >
          <Row className="justify-content-center">
            <Col xs={12} sm={6} md={6}>
              <h5>{costomer}</h5>
              <h6>{executive}</h6>
            </Col>

            <Col>
              <h5>{day}</h5>
            </Col>

            <Col>
              <TiDelete
                className="text-danger fs-4"
                type="button"
                onClick={() => handleDelete(id)}
              />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
