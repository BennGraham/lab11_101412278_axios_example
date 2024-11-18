import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

export default function PersonCard({ person }) {
  return (
    <Card className="border-0 shadow-sm">
      <Card.Body className="bg-light rounded-4">
        <Row className="align-items-center">
          <Col xs="auto">
            <img
              className="rounded-4"
              src={person.picture.large}
              alt={person.name.first}
              style={{
                width: "120px",
                height: "120px",
              }}
            />
          </Col>
          <Col>
            <h4>{person.login.username}</h4>
            <div className="text-dark">{person.email}</div>
          </Col>
        </Row>
      </Card.Body>
      <Card.Body className="border-top">
        <h6 className="text-uppercase mb-3" style={{ fontSize: "0.75rem" }}>
          Contact Information
        </h6>
        <Row>
          <Col md={6}>
            <p>
              <b>Phone:</b> {person.phone}
            </p>
            <p>
              <b>Cell:</b> {person.cell}
            </p>
          </Col>
          <Col md={6}>
            <p>
              <b>Email:</b> {person.email}
            </p>
            <p>
              <b>Nationality:</b> {person.nat}
            </p>
          </Col>
        </Row>
      </Card.Body>
      <Card.Body className="border-top bg-light">
        <h6 className="text-uppercase mb-3" style={{ fontSize: "0.75rem" }}>
          Location
        </h6>
        <Row>
          <Col md={6}>
            <p>
              <b>City:</b> {person.location.city}
            </p>
            <p>
              <b>State:</b> {person.location.state}
            </p>
          </Col>
          <Col md={6}>
            <p>
              <b>Country:</b> {person.location.country}
            </p>
            <p>
              <b>Postal Code:</b> {person.location.postcode}
            </p>
          </Col>
        </Row>
        <p className="mb-0">
          <b>Street:</b> {person.location.street.number}{" "}
          {person.location.street.name}
        </p>
      </Card.Body>
      <Card.Body className="border-top">
        <h6 className="text-uppercase mb-3" style={{ fontSize: "0.75rem" }}>
          Additional Details
        </h6>
        <Row>
          <Col md={6}>
            <p>
              <b>Date of Birth:</b>{" "}
              {new Date(person.dob.date).toLocaleDateString()}
            </p>
            <p>
              <b>Age:</b> {person.dob.age}
            </p>
          </Col>
          <Col md={6}>
            <p>
              <b>Registered:</b>{" "}
              {new Date(person.registered.date).toLocaleDateString()}
            </p>
            <p>
              <b>ID:</b> {person.login.uuid}
            </p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
