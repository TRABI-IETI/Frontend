import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";

export function BotonScrollTop(){
    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };

    return(
        <Box position="fixed" ml={3} mb={3} bottom={{ base: "5%", md: "2%", lg: "1%" }}
        left={{ base: "5%", md: "2%", lg: "1%" }} zIndex="100">
          <IconButton icon={<ArrowUpIcon/>} color="#717171" size="md" borderRadius="full" onClick={handleScrollToTop}/>
        </Box>
    )
}