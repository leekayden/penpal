import "./App.css";
import Navbar from "./components/common/Navbar";
import { Button, Grid } from "@mui/material";
import Add from "@mui/icons-material/Add";
import PenGallery from "./components/Pens/PenGallery";
import { NoteList } from "./components/global/data";

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <Grid container justifyContent="center">
        {/* <Button variant="contained" size="large" startIcon={<Add />}>
          New Pen
        </Button> */}
      </Grid>
      <PenGallery data={NoteList} />
    </div>
  );
}

export default App;
