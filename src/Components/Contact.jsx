import React from 'react';
import { Box, Flex, Heading, Text, Icon, Link, VStack } from '@chakra-ui/react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      p={8}
      bg="gray.200"
      minH="60vh"
      id="contact"
    >
      <Heading as="h2" size="xl" color="teal.500" mb={8}>
        Contact
      </Heading>
      <VStack spacing={6} mb={8}>
        <Flex align="center">
          <Icon as={FaEnvelope} w={6} h={6} mr={2} />
          <Link href="mailto:nipunsherawat@gmail.com" color="teal.500" isExternal>
            nipunsherawat@gmail.com
          </Link>
        </Flex>
        <Flex align="center">
          <Icon as={FaGithub} w={6} h={6} mr={2} />
          <Link href="https://github.com/Ni-25git" color="teal.500" isExternal>
            Ni-25git
          </Link>
        </Flex>
        <Flex align="center">
          <Icon as={FaLinkedin} w={6} h={6} mr={2} />
          <Link href="https://www.linkedin.com/in/nipun-shaharavat-40927b2a3/" color="teal.500" isExternal>
            Nipun Shaharavat
          </Link>
        </Flex>
        <Flex align="center">
          <Icon as={FaPhone} w={6} h={6} mr={2} />
          <Text color="teal.500">
            8171339623
          </Text>
        </Flex>
      </VStack>
      <Text fontSize="2xl" textAlign="center" color="black.700" mt={6}>
      "Thank you for taking the time to explore my Portfolio"
      </Text>
    </Flex>
  );
};

export default Contact;
