import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { AppName } from "../global/definitions";
import { Add } from "@mui/icons-material";
import Autocomplete from "@mui/material/Autocomplete";
import { NoteListType } from "../global/data";
import TextField from "@mui/material/TextField";
import GridOnIcon from "@mui/icons-material/GridOn";
import FilterListIcon from "@mui/icons-material/FilterList";
import InputAdornment from '@mui/material/InputAdornment';

interface PenGalleryProps {
  data: NoteListType[];
}

export default function PenGallery({ data }: PenGalleryProps) {
  const handleViewClick = (route: string) => {
    window.location.href = `/pens/${route}/edit`;
  };
  const [selectedOption, setSelectedOption] = useState<{ noteTitle: string }>({
    noteTitle: "", // initial title
  });
  const handleOptionChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: { noteTitle: string } | null
  ) => {
    if (newValue) {
      setSelectedOption(newValue);
    }
  };
  const filteredData = selectedOption?.noteTitle
    ? data.filter((item) => item.noteTitle === selectedOption.noteTitle)
    : data;
  return (
    <div>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            // pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Box
              sx={{
                bgcolor: "background.paper",
                pt: 8,
                pb: 6,
              }}
            >
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h3"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Pens
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="text.secondary"
                  paragraph
                >
                  This is where all your pens are.
                </Typography>
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Button
                    variant="contained"
                    startIcon={<Add />}
                    size="large"
                    disableElevation
                  >
                    New
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<GridOnIcon />}
                    size="large"
                    disabled
                  >
                    List View
                  </Button>
                </Stack>
              </Container>
            </Box>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={data}
              sx={{ width: "100%" }}
              value={selectedOption}
              onChange={handleOptionChange}
              getOptionLabel={(option) => option.noteTitle}
              disableClearable
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Filter note"
                  variant="filled"
                  // InputProps={{
                  //   startAdornment: (
                  //     <InputAdornment position="start">
                  //       <FilterListIcon />
                  //     </InputAdornment>
                  //   ),
                  // }}
                />
              )}
            />
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        userSelect: "none",
                      }}
                      image={
                        item.noteImg
                          ? item.noteImg
                          : "https://res.cloudinary.com/kayden/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1677907411/icon-image-not-found-free-vector_bdfcct.jpg"
                      }
                      alt={item.noteTitle}
                      width={263}
                      height={148}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.noteTitle}
                      </Typography>
                      <Typography>{item.noteDescription}</Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "space-between" }}>
                      <Button
                        size="large"
                        variant="outlined"
                        onClick={() => handleViewClick(item.id.toString())}
                      >
                        View
                      </Button>
                      <Button
                        size="large"
                        variant="contained"
                        onClick={() =>
                          handleViewClick(`pen/edit/${item.id.toString()}`)
                        }
                        disableElevation
                      >
                        View
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              <p>No notes yet!</p>
            )}
          </Grid>
        </Container>
      </main>
    </div>
  );
}
