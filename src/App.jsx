import {
  Box,
  Button,
  grid,
  Heading,
  Text,
  useStatStyles,
} from "@chakra-ui/react";
import useWindowSize from "react-use/lib/useWindowSize";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useState } from "react";

export const App = () => {
  const [kills, setKills] = useState(0);
  const { width, height } = useWindowSize();
  return (
    <Box backgroundColor={"pink.200"} height={"100vh"}>
      <Confetti
        height={height}
        width={width}
        numberOfPieces={400}
        gravity={0.2}
      />
      <Box
        paddingTop={12}
        as={motion.div}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition="1s linear"
      >
        <Heading textAlign={"center"} fontSize={"6xl"} as={motion.h2}>
          I wanna{" "}
        </Heading>
        <Heading
          textAlign={"center"}
          fontSize={"6xl"}
          as={motion.h2}
          animate={{ opacity: 1, scale: 1 }}
          transition="1s linear"
        >
          kill myself :D
        </Heading>
        <Text textAlign={"center"} marginTop={4} fontSize={"xl"}>
          Times i tried killing myself:{" "}
          <Text as={"span"} color={"red.500"}>
            {kills}
          </Text>
        </Text>
      </Box>
      <Box
        paddingTop={8}
        display={"grid"}
        placeContent={"center"}
        width={"100vw"}
      >
        <Button
          colorScheme={"pink"}
          onClick={() => setKills((prevKills) => prevKills + 1)}
        >
          Kill me
        </Button>
      </Box>
    </Box>
  );
};
