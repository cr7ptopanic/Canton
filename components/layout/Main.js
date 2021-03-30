import { Box } from "@chakra-ui/core";

const Main = ({ children }) => (
  <Box as="main" flex="1 0 auto" mt="6rem">
    {children}
  </Box>
);

export default Main;