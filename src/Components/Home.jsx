import React from 'react';
import { Box, Button, Flex, Image, Text, Link, HStack, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import bg from "../assets/profile.jpg";

const Home = () => {
    const openResume = () => {
        window.open(
          "https://drive.google.com/file/d/1AsIE4OVNgQAhFOf7GnPYxFEdnL1mR5kM/view?usp=sharing",
          "_blank"
        );
      };
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="center"
      p={8}
      bg="gray.100"
      h="100vh"
    >
      <Box id="home" flex="1" textAlign={{ base: 'center', md: 'left' }} mb={{ base: 8, md: 0 }}>
        <Text fontSize="4xl" color="red.600" fontWeight="bold" mb={4}>
          I'm Nipun Sehrawat 
        </Text>
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Frontend Web Developer
        </Text>
        <Text fontSize="xl" color="gray.600">
          Passionate frontend developer with a flair for clean, responsive designs. Proficient in HTML, CSS, React, and JavaScript. Committed to creating visually appealing and user-friendly web experiences.
        </Text>
        <Button mt={6} colorScheme="blue" onClick={openResume}>Resume</Button>
        <HStack mt={6} spacing={6} justify={{ base: 'center', md: 'flex-start' }}>
          <Link href="https://github.com/Ni-25git" isExternal>
            <Icon as={FaGithub} w={10} h={10} color="gray.700" />
          </Link>
          <Link href="https://www.linkedin.com/in/nipun-shaharavat-40927b2a3/" isExternal>
            <Icon as={FaLinkedin} w={10} h={10} color="blue.600" />
          </Link>
        </HStack>
      </Box>
      <Box flex="1" display="flex" justifyContent={{ base: 'center', md: 'flex-end' }}>
        <Image
          src={bg}
          alt="Profile Picture"
          boxSize={{ base: '300px', md: '400px' }}
          borderRadius="full"
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
};

export default Home;
