import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/core';
const styles = {
  global: props => ({
    body: {
      color: mode('gray.100', 'black')(props),
      bg: mode('#21222D', '#fff')(props),
    },
  }),
};
const colors = {
  orange: {
    100: "#E48D04"
  }
}
const components = {
};

const theme = extendTheme({
  components,
  styles,
  colors
});

export default theme;