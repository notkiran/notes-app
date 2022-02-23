import React, { useEffect } from "react";
import { Accordion, Badge, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const MyNotes = ({ search }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, notes, error } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      navigate("/login");
    }
  }, [
    navigate,
    userInfo,
    dispatch,
    successCreate,
    successUpdate,
    successDelete,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  return (
    <MainScreen title={`Welcome back ${userInfo.name}`}>
      <Link to={"/create-note"}>
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {loadingDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}
      {loadingDelete && <Loading />}
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      {notes
        ?.reverse()
        .filter((filteredNote) =>
          filteredNote.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((note) => (
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
                  <Link to={`/note/${note._id}`}>
                    <Button>Edit</Button>
                  </Link>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
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
                  <footer className="blockquote-footer">
                    Created on {note.createdAt.substring(0, 10)}
                  </footer>
                </blockquote>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
    </MainScreen>
  );
};

export default MyNotes;
