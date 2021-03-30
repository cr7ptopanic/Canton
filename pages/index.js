import Carousel from 'react-material-ui-carousel'
import { useEffect, useState } from "react";
import {
    Flex,
    Box,
    Image,
    Text,
    SimpleGrid,
} from "@chakra-ui/core";
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Button from '@material-ui/core/Button';
import { fade } from '@material-ui/core/styles/colorManipulator';

const images = [
  { url: "images/back/1.jpg" },
  { url: "images/back/2.jpg" },
  { url: "images/back/3.jpg" },
  { url: "images/back/4.jpg" },
  { url: "images/back/5.jpg" },
];

const tarray = ["","","","","","","","","","","","","","","","","","","","",]
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateWindowDimensions = () => {
      if(window.innerWidth < 1024)
        setIsOpen(true);
      else
        setIsOpen(false);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions) 
  }, []);

  return (
    <Flex w="100%" flexDirection="column">
      <Flex w="100%">
        <Carousel
          autoPlay={true}
          animation="slide"
          indicators={true}
          timeout={300}
          navButtonsAlwaysVisible={false}
          navButtonsAlwaysInvisible={isOpen}
          cycleNavigation={true}
          fullHeightHover={false}
          navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
              background: 'black', 
              boxShadow: 'none', 
              opacity: 0.5, 
              borderRadius: 0,
              fontSize: "30px",
              color: "white",
              
            }
        }} 
        >
          {images.map((item, index) => {
            return (
              <Box key={index} minH={["160px", "200px","300px", "400px","500px"]}>
                <Image 
                  src={item.url}
                  w="100%"
                  alt=""
                  objectFit="cover"
                />
              </Box>
            )
          })}
        </Carousel>
      </Flex>
      <Text color="orange.100" textAlign="center" fontWeight="bold" fontSize="24px">Don't Miss the Promotion</Text>
      <Flex flexDirection={["column", "column", "row", "row"]} justifyContent="center" m="0 auto">
        <Box w={["300px", "360px"]} m="1rem">
          <Flex bg="orange.100" borderTopRadius="5px" flexDirection="column" h="120px">
            <Text color="white" fontWeight="bold" fontSize="38px" textAlign="center" m="auto 0">Free Delivery!</Text>
          </Flex>
          <Flex boxShadow="0 2px 13px 0 rgba(0, 0, 0, 0.21)" p="1rem" borderBottomRadius="5px" flexDirection="column">
            <Text>Code " RTC10 " FREE DELIVERY for buy RTC COMBO 10 + 1</Text>
            <Flex flexDirection="row" m="1.5rem 0 0 auto" cursor="pointer" userSelect="none">
              <Text color="orange.100" fontWeight="bold">View Details</Text>
              <ArrowForwardIcon color="orange.100" m="auto 0.5rem"/>
            </Flex>
          </Flex>
        </Box>
        <Box w={["300px", "360px"]} m="1rem">
          <Flex bg="orange.100" borderTopRadius="5px" flexDirection="column" h="120px">
            <Text color="white" fontWeight="bold" fontSize="38px" textAlign="center" m="auto 0 0 0">RM15.00</Text>
            <Text color="white" fontSize="18px" textAlign="center" m="0 0 auto 0">Off Total Order!</Text>
          </Flex>
          <Flex boxShadow="0 2px 13px 0 rgba(0, 0, 0, 0.21)" p="1rem" borderBottomRadius="5px" flexDirection="column">
            <Text>Code " SF15 "  to get RM15 OFF when spend RM250 & above</Text>
            <Flex flexDirection="row" m="1.5rem 0 0 auto" cursor="pointer" userSelect="none">
              <Text color="orange.100" fontWeight="bold">View Details</Text>
              <ArrowForwardIcon color="orange.100" m="auto 0.5rem"/>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Flex
        p="0 2rem"
        boxShadow="0 2px 13px 0 rgba(0, 0, 0, 0.21)"
        m="3rem 0 1rem 0"
        borderRadius="5px" w={[null, "100%", "100%"]}
        display={["none", "none", "none", "flex"]}
      >
        <Text fontSize="18px" p="1rem" borderBottom="4px solid #E48D04">【Super Deal Limited Time Promo】 限时优惠</Text>
        <Text fontSize="18px" p="1rem">【Kitchen Must Have】厨神必备 *Delivery Tuesday to Sunday 2pm - 6pm</Text>
        <Flex m="auto 0 auto auto" cursor="pointer" userSelect="none">
          <Text>More</Text>
          <ArrowForwardIcon m="auto 0.5rem"/>
        </Flex>
      </Flex>
      <Text color="orange.100" fontSize="24px" fontWeight="bold">【Super Deal Limited Time Promo】 限时优惠</Text>
      <Text color="orange.100" fontSize="18px" m="1rem 0">限时优惠！好康多多~</Text>
      <SimpleGrid spacing="1rem" w="100%" minChildWidth={["150px", "200px", "250px"]}>
        {tarray.map((item, index) => {
          return (
            <Flex key={index} flexDirection="column">
              <Image src="/images/image.jpeg" w="100%"/>
              <Flex boxShadow="0 2px 13px 0 rgba(0, 0, 0, 0.21)" p="1rem" borderBottomRadius="5px" flexDirection="column">
                <Text fontWeight="bold">苦麦菜 Fu Mak Choy 300g+- per bunch/扎</Text>
                <Text m="1rem 0">RM0.99</Text>
                <Flex bg="orange.100" borderRadius="5px" boxShadow="0 2px 13px 0 rgba(0, 0, 0, 0.21)">
                    <Button style={{color: "white", fontWeight: "bold", width: "100%"}}>Add</Button>
                </Flex>
              </Flex>
            </Flex>
          )
        })}
      </SimpleGrid>
    </Flex>
  )
}

export default Home;