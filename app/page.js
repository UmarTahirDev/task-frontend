import axios from "axios";
import { Box, Container, Typography, Paper } from "@mui/material";

async function getMessage() {
  const baseUrl = process.env.BACKEND_URL;
  const res = await axios.get(`${baseUrl}/api/message`);
  return res.data;
}

export default async function Home() {
  const data = await getMessage();
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, textAlign: "center" }}>
        <Box>
          <Typography variant="h3" gutterBottom>
            Server Message
          </Typography>
          <Typography variant="h4" color="textSecondary">
            {data.message}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
