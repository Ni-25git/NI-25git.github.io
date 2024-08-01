import React from 'react';
import { Box, SimpleGrid, Image, Text, Flex } from '@chakra-ui/react';

// Import your skill images
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/javascript.png';
import reactLogo from '../assets/react.png';
import chakraLogo from '../assets/chakra.png';
import nodeLogo from '../assets/nodeJs.jpeg';
import mongoLogo from "../assets/mongoDb.jpeg"
import expressJS from "../assets/expressJs.jpeg"

const skills = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "ReactJS", logo: reactLogo },
  { name: "Chakra UI", logo: chakraLogo },
  { name: "NodeJS", logo: nodeLogo },
  {name : "MongoDB", logo: mongoLogo},
  {name : "ExpressJS" , logo:expressJS}
];

const Skills = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      p={8}
      bg="gray.300"
      minH="100vh"
      id="skills"
    >
      <Text fontSize="4xl" color="teal.500" fontWeight="bold" mb={8}>
        Skills
      </Text>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10} w="full" maxW="800px">
        {skills.map((skill, index) => (
          <Box
            key={index}
            p={5}
            shadow="md"
            borderWidth="1px"
            flex="1"
            borderRadius="md"
            textAlign="center"
            bg="white"
          >
            <Image src={skill.logo} alt={skill.name} boxSize="100px" mx="auto" mb={4} />
            <Text fontSize="xl" color="gray.700" fontWeight="semibold">
              {skill.name}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Skills;
