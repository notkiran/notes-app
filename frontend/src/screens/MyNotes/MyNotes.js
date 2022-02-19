import React, { useState, useEffect } from "react";
import { Accordion, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import axios from "axios";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    // if (window.confirm("Are you sure you want to delete this note?")) {
    // }
  };
  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes/");
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome back Kiran G..">
      <Link to={"/create-note"}>
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion style={{ marginTop: 10, marginBottom: 20 }} key={note._id}>
          <Accordion.Item eventKey="0">
            <Accordion.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                {note.title}
              </span>
              <div>
                <Button href={`/notes/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <h4>
                <Badge bg="success">Category - {note.category}</Badge>
              </h4>
              <blockquote className="blockquote mb-0">
                <p>{note.content}</p>
                <footer className="blockquote-footer">Created on- date</footer>
              </blockquote>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        // <Card style={{ margin: 10 }}>
        //   <Card.Header style={{ display: "flex" }}>
        //     <span
        //       style={{
        //         color: "black",
        //         textDecoration: "none",
        //         flex: 1,
        //         cursor: "pointer",
        //         alignSelf: "center",
        //         fontSize: 18,
        //       }}
        //     >
        //       {note.title}
        //     </span>
        //     <div>
        //       <Button href={`/notes/${note._id}`}>Edit</Button>
        //       <Button
        //         variant="danger"
        //         className="mx-2"
        //         onClick={deleteHandler(note._id)}
        //       >
        //         Delete
        //       </Button>
        //     </div>
        //   </Card.Header>
        //   <Card.Body>
        //     <h4>
        //       <Badge bg="success">Category - {note.category}</Badge>
        //     </h4>
        //     <blockquote className="blockquote mb-0">
        //       <p>{note.content}</p>
        //       <footer className="blockquote-footer">Created on- date</footer>
        //     </blockquote>
        //   </Card.Body>
        // </Card>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
