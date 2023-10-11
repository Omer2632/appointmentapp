import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
function AddModal({ show, handleClose, apps, setApps, exName }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const handleSubmit = (e) => {
    e.preventDefault();
    setApps([
      ...apps,
      {
        id: new Date().getTime(),
        costomer: name,
        day: date,
        consulted: false,
        executive: exName,
      },
    ]);
    setName("");
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{exName} için randevu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Adınız</Form.Label>
              <Form.Control
                type="text"
                placeholder="Adınız"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Randevu tarihi</Form.Label>
              <Form.Control
                type="date"
                placeholder="Tarih"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                required
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit" className="me-2">
                Kaydet
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Vazgeç
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
