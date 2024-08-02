import React from 'react';
import { Box, Flex, Heading, Text, Link, VStack } from '@chakra-ui/react';

const About = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      p={8}
      bg="gray.200"
      minH="90vh"
      id="about"
      
    >
      <VStack spacing={4} maxW="800px"  textAlign="center">
        <Heading as="h2" mt={40}  size="xl" color="red.500">
          About
        </Heading>
        <Text fontSize="lg" color="gray.700">
        "As a proficient full-stack developer, I navigate the convergence of front-end finesse and back-end proficiency. Specializing in crafting user-centric solutions, I contribute to the evolution of digital landscapes. From ideation to deployment, my dynamic approach to code architecture ensures the creation of seamless and innovative digital experiences, marking a distinct imprint in the realm of technology."
        </Text>
        <Link href="mailto:nipunsherawat@gmail.com" color="blue.500" fontSize="lg">
          nipunsherawat@gmail.com
        </Link>
      </VStack>
    </Flex>
  );
};

export default About;
