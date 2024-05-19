import { Box, Container, Stack } from "@mui/material";
import Rightbar from "../rightbar/Rightbar";
import Posts from "../posts/Posts";

const Main = () => {
  return (
    <Container>
      <Stack direction={"row"} spacing={1} mt={3}>
        <Box flex={3}>
          <Posts />
        </Box>
        <Box flex={1} sx={{ sx: "none", md: "block" }}>
          <Rightbar />
        </Box>
      </Stack>
    </Container>
  );
};

export default Main;
