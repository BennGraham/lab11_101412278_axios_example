import Accordion from "react-bootstrap/Accordion";
import PersonCard from "./PersonCard";

export default function PersonAccordion({ persons }) {
  return (
    <Accordion>
      {persons.map((person, index) => {
        return (
          <Accordion.Item eventKey={index}>
            <Accordion.Header>
              <img
                className="rounded-circle mx-2"
                src={person.picture.thumbnail}
                alt={person.name.first}
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
              {`${person.name.title} ${person.name.first} ${person.name.last}`}
            </Accordion.Header>
            <Accordion.Body className="bg-dark">
              <PersonCard person={person} index={index} />
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}
