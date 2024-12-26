import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography, Button, Grid2 } from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ImageIcon from "@mui/icons-material/Image";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import DescriptionIcon from "@mui/icons-material/Description";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import LinkIcon from "@mui/icons-material/Link";

export default function Home() {
  return (
  //   <Box
  //   sx={{
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     minHeight: "100vh",
  //     padding: 2,
  //   }}
  // >
    <Grid2 container spacing={4} sx={{ maxWidth: 1200, padding: 1 }}>
      <Grid2 item xs={12} md={8}>
        <Box
          sx={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: 3,
            minHeight: "600px",
            minWidth:  "500px"
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Name of the content
          </Typography>
          <Box
            sx={{
              border: "1px solid #aaa",
              borderRadius: "8px",
              padding: 4,
              textAlign: "center",
            }}
          >
            <Typography variant="body1" color="textSecondary">
              You’ve got knowledge, it’s time to share it!
            </Typography>
          </Box>
        </Box>
      </Grid2>

      <Grid2 item xs={12} md={4}>
        <Box
          sx={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: 3,
            // height: "100%",
            maxWidth: "400px"
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Add Content
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <Button
                variant="outlined"
                sx={{
                  width: "calc(20% - 0px)", 
                  flexDirection: "column", 
                  textAlign: "center",
                  padding: 2,
                  minWidth: "100px"
                }}
              >
                <VideoLibraryIcon fontSize="large" />
                <Typography variant="body2">Video</Typography>
              </Button>
              <Button
                variant="outlined"
                sx={{
                  width: "calc(20% - 8px)",
                  flexDirection: "column",
                  textAlign: "center",
                  padding: 2,
                  minWidth: "100px"
                }}
              >
                <ImageIcon fontSize="large" />
                <Typography variant="body2">Image</Typography>
              </Button>
              <Button
                variant="outlined"
                sx={{
                  width: "calc(20% - 8px)",
                  flexDirection: "column",
                  textAlign: "center",
                  padding: 2,
                  minWidth: "100px"
                }}
              >
                <AudiotrackIcon fontSize="large" />
                <Typography variant="body2">Audio</Typography>
              </Button>
              <Button
                variant="outlined"
                sx={{
                  width: "calc(20% - 8px)",
                  flexDirection: "column",
                  textAlign: "center",
                  padding: 2,
                  minWidth: "100px"
                }}
              >
                <DescriptionIcon fontSize="large" />
                <Typography variant="body2">Document</Typography>
              </Button>
              <Button
                variant="outlined"
                sx={{
                  width: "calc(20% - 8px)",
                  flexDirection: "column",
                  textAlign: "center",
                  padding: 2,
                  minWidth: "100px"
                }}
              >
                <TextFieldsIcon fontSize="large" />
                <Typography variant="body2">Text</Typography>
              </Button>
              <Button
                variant="outlined"
                sx={{
                  width: "calc(20% - 8px)",
                  flexDirection: "column",
                  textAlign: "center",
                  padding: 2,
                  minWidth: "100px"
                }}
              >
                <LinkIcon fontSize="large" />
                <Typography variant="body2">Resources</Typography>
              </Button>
            </Box>
        </Box>
      </Grid2>
    </Grid2>
  // </Box>
   
  );
}
