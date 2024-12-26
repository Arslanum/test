import React from "react";
import { Box, Typography, Button, Grid2 } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: 2,
      }}
    >
      <Grid2 container spacing={4} sx={{ maxWidth: 1200 }}>
        {/* Left Section */}
        <Grid2 item xs={12} md={8}>
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: 3,
              height: "100%",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Name of the content
            </Typography>
            <Box
              sx={{
                border: "1px dashed #aaa",
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

        {/* Right Section */}
        <Grid2 item xs={12} md={4}>
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: 3,
              height: "100%",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Add Content
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Button variant="outlined" fullWidth>
                Video
              </Button>
              <Button variant="outlined" fullWidth>
                Image
              </Button>
              <Button variant="outlined" fullWidth>
                Audio
              </Button>
              <Button variant="outlined" fullWidth>
                Document
              </Button>
              <Button variant="outlined" fullWidth>
                Text
              </Button>
              <Button variant="outlined" fullWidth>
                Resources
              </Button>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
