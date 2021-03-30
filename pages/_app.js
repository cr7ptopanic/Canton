import { ChakraProvider }     from "@chakra-ui/core";
import Layout                 from "../components/layout";
import theme                  from "../theme";

const fakeStorageManager = {
  get: () => "dark",
  set: (value) => {},
  type: "cookie",
};

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme} colorModeManager={fakeStorageManager}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
};

export default App;
