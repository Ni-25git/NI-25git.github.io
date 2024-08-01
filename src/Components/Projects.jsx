import React from 'react';
import { Box, SimpleGrid, Image, Text, Flex, Heading, Button , Link , HStack} from '@chakra-ui/react';

// Import your project images
import project1 from '../assets/SS1.jpg.png';
import project2 from '../assets/project2ss.png';
// import project3 from '../assets/project3.png';

const projects = [
  { name: "Evenhour Website Clone ", image: project1, description: "Evenhour Clone is a time tracking and invoicing web app that helps freelancers and teams manage projects, track time, and generate professional invoices, streamlining workflow and boosting productivity.", skills: "ReactJS|HTML|CSS", websiteLink: "https://everhourclone23.netlify.app",
    githubLink: "https://github.com/Ni-25git/my_projects/tree/main/everhour-clone" },
  { name: "Mynetdiary Website Clone", image: project2, description: "MyNetDiary Clone is a personalized diet and nutrition app that tracks daily food intake, macronutrients, and calorie consumption, providing users with a tailored weight loss and healthy eating plan.", skills: "ReactJS|HTML|CSS|ChakraUI",  websiteLink: "https://mynetdiarynipun.netlify.app/", // Update with the actual link
    githubLink: "https://github.com/Ni-25git/Project_cap60" }
];

const Projects = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      p={8}
      bg="gray.100"
      minH="100vh"
      id="project"
    >
      <Heading as="h2" size="xl" color="teal.500" mb={8}>
        Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10} w="full" maxW="1200px">
        {projects.map((project, index) => (
          <Box
            key={index}
            p={5}
            shadow="md"
            borderWidth="1px"
            flex="1"
            borderRadius="md"
            bg="white"
            textAlign="center"
          >
            <Image src={project.image} alt={project.name} borderRadius="md" mb={4} />
            <Heading as="h3" size="md" mb={2}>
              {project.name}
            </Heading>
            
            <Text fontSize="md" color="gray.700">
              {project.description}
            </Text>
            <Text mt={2} fontSize="lg" color="gray.700">
              {project.skills}
            </Text>
            <HStack mt={4} spacing={4} justify={{ base: 'center', md: 'flex-start' }}>
        <Link href={project.websiteLink} isExternal>
          <Button colorScheme="blue">Website</Button>
        </Link>
        <Link href={project.githubLink} isExternal>
          <Button colorScheme="blue">Github</Button>
        </Link>
      </HStack>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Projects;
