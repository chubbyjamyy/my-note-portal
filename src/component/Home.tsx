import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Modal,
  Box,
  TextField,
} from "@mui/material";
import Note from "../Note";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [notes, setNotes] = useState(Note);
  const navigate = useNavigate();

  const handleSaveNote = () => {
    // Create a new note object
    const newNote = {
      id: notes.length + 1,
      userId: 1,
      title,
      body,
    };

    setNotes((notes) => [...notes, newNote]);
    setIsModalOpen(false);
    setTitle("");
    setBody("");
  };

  const handleClick = (note: any) => {
    navigate(`/NotePage/${note.id}`, { state: { note } });
  };

  return (
    <div>
      <h1>Note</h1>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {notes.map((note) => (
          <ListItem key={note.id} onClick={() => handleClick(note)}>
            <ListItemText primary={note.title} />
          </ListItem>
        ))}
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsModalOpen(true)}
        >
          Create New Note
        </Button>
      </List>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: 400,
          }}
        >
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleSaveNote}>
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Home;
