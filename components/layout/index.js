import { useEffect }          from "react";
import { useRouter }          from "next/router";
import { Flex }               from "@chakra-ui/core";
import Container              from "./Container";
import Main                   from "./Main";
import Header                 from "./Header";
import Footer                 from "./Footer";
import useDidMount            from "../../hooks/useDidMount";
import { scrollToPosition }   from "../../lib/scroll";

const Layout = ({ children }) => {
    const didMount = useDidMount();
    const router = useRouter();
    const { asPath } = router;
    /**
     * Scroll to top on each route change using `asPath` (resolved path),
     * not `pathname` (may be a dynamic route).
     */
    useEffect(() => {
      if (didMount) {
        scrollToPosition();
      }
    }, [asPath]);
  
    return (
      <Container>
        <Flex 
          w="100%"
          h="100vh"
          flexDirection="column" 
          margin="0 auto"
          maxW="76rem"
          p="0 1rem"
        >
          <Header/>
          <Main>{children}</Main>
          <Footer/>
        </Flex>
      </Container>
    );
  };
  
  export default Layout;