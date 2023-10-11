import Container from "react-bootstrap/Container";
import { serviceData } from "../helper/data";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import AddModal from "./AddModal";
import { useState } from "react";
const Services = ({ apps, setApps }) => {
  const [show, setShow] = useState(false);
  const [exName, setExName] = useState("");

  // const handleImgClick = () => {
  //   setShow(true);
  // };
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Servisler
      </h3>
      <Row className="justify-content-center">
        {serviceData.map(({ id, img, dep, name }) => (
          <Col xs={12} sm={6} md={4} lg={3} key={id}>
            <img
              src={img}
              alt={name}
              className="img-thumbnail service-img"
              onClick={() => {
                setExName(name);
                setShow(true);
              }}
            />
            <h5>{dep}</h5>
            <h6>{name}</h6>
          </Col>
        ))}
      </Row>
      <AddModal
        show={show}
        handleClose={() => {
          setShow(false);
        }}
        apps={apps}
        setApps={setApps}
        exName={exName}
      />
    </Container>
  );
};

export default Services;
